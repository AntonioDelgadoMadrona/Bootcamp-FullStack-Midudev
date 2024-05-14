// Mediante el framework express facilitamos mucho la gestion del backend
// Por ejemplo la gestion del JSON la simplifica mucho

// Primero creamos la conexion con database
import connectToDatabase from "./database.js"; // Ruta al archivo db.js
connectToDatabase();

// Importar Express
import express, { json } from "express";

// Crear una instancia de Express
const app = express();
const port = 3001;

// Importamos el modelo de Note (esto nos permite acceder a la coleccion de notes)
import Note from "./Models/Note.js";

// Middleware para manejo de errores
import handleErrors from "./middlewares/handleErrors.js";

// Para parsear los parametros en el body
app.use(json());

// Esto es considerado un middleware, cada peticion al server va a entrar por aqui antes
// app.use((request, response, next) => {
//   console.log("--- MIDLLEWARE ---");
//   console.log(request.url);
//   console.log("---  ---");
//   next(); // Mediante el next decimos que continue, si no no pasaría de aqui
// });

// Ruta para obtener todas las notas
app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo!</h1> <h3>Desde 07-mongodb-mongoose</h3>");
});

// Si especificamos la URL podemos controlar que interaccion tenemos con el server
app.get("/notes", (req, res, next) => {
  console.log("Esta vez estas accediendo a la ruta de notas");
  Note.find({})
    .then((notes) => {
      console.log(notes);
      res.json(notes);
    })
    .catch((err) => {
      console.log("Error en /notas ", err);
      next(err);
    });
});

// Si especificamos la URL podemos controlar que interaccion tenemos con el server
app.get("/notes/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  Note.findById(id)
    .then((note) => {
      if (note) return res.json(note);
      else return res.send("<h2>Esta nota no existe en nuestra base de datos</h2>");
    })
    .catch((err) => {
      res.send("<h2>Esta nota es erronea</h2>");
      next(err);
    });
});

// Metodo de create
app.post("/notes", (req, res, next) => {
  const note = req.body;
  console.log(note);

  const newNote = new Note({
    content: note.content,
    date: new Date(),
    important: note.important || false,
  });

  console.log("Intentando crear nota: ", newNote);

  newNote
    .save()
    .then((savedNote) => res.json(savedNote))
    .catch((err) => {
      console.log("Hubo un error creando la nota");
      next(err);
    });
});

// Metodo de delete
app.delete("/notes/:id", (req, res, next) => {
  const { id } = req.params;

  // Encuentra la nota correspondiente por su id
  Note.findByIdAndDelete(id)
    .then((found) => {
      console.log("Nota eliminada correctamente");
      res.status(200).json(found);
    })
    .catch(() => {
      console.log("Ocurrió un error intentando eliminar la nota");
      res.status(404).end();
      next(err);
    });
});

// Metodo de update
app.put("/notes/:id", (req, res, next) => {
  const { id } = req.params;
  const { content, important } = req.body;

  const newNoteInfo = {
    content,
    important,
  };

  // Encuentra la nota correspondiente por su id y la actualiza
  // El tercer parametro hace que el result retorne la nota ya editada y no la encontrada
  Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    .then((result) => {
      console.log("Nota actualizada correctamente");
      res.status(200).json(result);
    })
    .catch(() => {
      console.log("Ocurrió un error intentando actualizar la nota");
      res.status(404).end();
      next(err);
    });
});

// Middleware para manejar errores
app.use(handleErrors);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
