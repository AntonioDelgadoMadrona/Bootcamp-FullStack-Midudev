// Mediante el framework express facilitamos mucho la gestion del backend
// Por ejemplo la gestion del JSON la simplifica mucho

// Importar Express
const express = require("express");

// Crear una instancia de Express
const app = express();
const port = 3001;

// Para parsear los parametros en el body
app.use(express.json());

// Esto es considerado un middleware, cada peticion al server va a entrar por aqui antes
app.use((request, response, next) => {
  console.log("--- MIDLLEWARE ---");
  console.log(request.url);
  console.log("---  ---");
  next(); // Mediante el next decimos que continue, si no no pasaría de aqui
});

// Array de notas
let notas = [
  { id: 1, titulo: "Nota 1", contenido: "Contenido de la nota 1" },
  { id: 2, titulo: "Nota 2", contenido: "Contenido de la nota 2" },
  { id: 3, titulo: "Nota 3", contenido: "Contenido de la nota 3" },
];

// Ruta para obtener todas las notas
app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo!</h1>");
});

// Si especificamos la URL podemos controlar que interaccion tenemos con el server
app.get("/notas", (req, res) => {
  console.log("Esta vez estas accediendo a la ruta de notas");
  res.json(notas);
});

// Si especificamos la URL podemos controlar que interaccion tenemos con el server
app.get("/notas/:id", (req, res) => {
  const { id } = req.params;
  const nota = notas.find((note) => note.id === Number(id));

  if (nota) return res.json(nota);
  else return res.status(404).end();
});

// Metodo de create
app.post("/notas/create", (req, res) => {
  console.log(req.body);
  const { titulo, contenido } = req.body;

  const newNote = { id: notas.length + 1, titulo, contenido };

  notas = [...notas, newNote];

  res.status(200).json(notas);
});

// Metodo de delete
app.delete("/notas/delete/:id", (req, res) => {
  const { id } = req.params;

  // Encuentra la nota correspondiente por su id
  const index = notas.findIndex((nota) => nota.id === parseInt(id));

  // Si no se encuentra la nota, devuelve un error
  if (index === -1) {
    return res.status(404).json({ error: "Nota no encontrada" });
  }

  // Elimina la nota del array de notas
  notas.splice(index, 1);

  // Devuelve el array de notas actualizado como respuesta
  res.status(200).json(notas);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
