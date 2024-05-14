import mongoose from "mongoose";

// Definimos el schema que va a tener cada nota
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

// Definimos el modelo a raiz del schema
const Note = mongoose.model("Note", noteSchema);

// Alteramos el schema que va a ser devuelto desde la base de datos
// Ya que nos interesa renombrar ciertos campos y eliminar otros
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id), delete returnedObject._id, delete returnedObject.__v;
  },
});

// Creamos una primera instancia para guardar la primera nota
// const note = new Note({
//   content: "Esta es la primera nota",
//   date: new Date(),
//   important: true,
// });

export default Note;
