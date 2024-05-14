// Middleware para controlar errores
export default (err, req, res, next) => {
  console.error("Error Middleware", err); // Log del error en la consola

  // Verificar si el error es de tipo ValidationError (por ejemplo, de Mongoose)
  if (err.name === "ValidationError") {
    return res.status(422).json({ error: err.message }); // Devolver un código de estado 422 (Unprocessable Entity) con el mensaje de error
  }

  // Otros tipos de errores
  // Puedes manejar otros tipos de errores aquí según tus necesidades
  if (err.name === "CastError") {
    return res.status(400).json({ error: "Id no válido" });
  }

  // Si el error no coincide con ninguno de los casos anteriores, devolvemos un código de estado 500 (Internal Server Error)
  res.status(500).send("Algo fue mal!");
};
