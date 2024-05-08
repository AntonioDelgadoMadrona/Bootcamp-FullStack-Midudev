// En este file se monta un servidor mediante node a pelo
// Lo más utilizado hoy en dia es a traves de un framework
// Como por ejemplo express, es el más utilizado

// Importa el módulo http para crear el servidor
const http = require("http");

// Datos de ejemplo
const notes = [
  { id: 1, name: "John", surname: "Doe", birthdate: "1990-01-01", isImportant: true },
  { id: 2, name: "Jane", surname: "Smith", birthdate: "1995-05-15", isImportant: false },
  { id: 3, name: "Alice", surname: "Johnson", birthdate: "1988-10-20", isImportant: true },
];

// Define la función de manejo de solicitudes
const requestHandler = (request, response) => {
  console.log(`URL solicitada: ${request.url}`);
  // response.end("¡Hola Mundo!"); // Responde con un mensaje de texto simple

  // Configura el encabezado de la respuesta para indicar que se devuelve JSON
  response.setHeader("Content-Type", "application/json");

  // Devuelve el array de notas como una respuesta JSON
  response.end(JSON.stringify(notes));
};

// Crea el servidor con la función de manejo de solicitudes
const server = http.createServer(requestHandler);

// Define el puerto en el que el servidor escuchará las solicitudes
const port = 3001;

// Inicia el servidor y especifica el puerto en el que escuchará
server.listen(port, (err) => {
  if (err) {
    return console.log("Ocurrió un error:", err);
  }
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
