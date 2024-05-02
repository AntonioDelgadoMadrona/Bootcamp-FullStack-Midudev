
import './App.css'
import { Note } from '../components/Note';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function App({ defaultNotes = [] }) {

  const [notes, setNotes] = useState([...defaultNotes]);
  const [newNote, setNewNote] = useState();
  const [showAll, setShowAll] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewNote(value);
  };

  const handleSubmit = (e) => {
    // Con el preventDefault paramos el refresco de la pagina provocado por el formulario
    e.preventDefault();
    const newNotee = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toDateString(),
      important: Math.random() < 0.5
    };
    setNotes(prevNotes => [
      ...prevNotes,
      newNotee
    ]);
    setNewNote("");
  };

  const handleClick = () => {
    setShowAll((prevShow) => !prevShow)
  };

  if (notes.length === 0) {
    return (
      <p>No hay notas que mostrar</p>
    )
  }
  return (
    <ul>
      {showAll ? notes.map(({ id, content, date, important }) => {
        return (
          // Utilizar el id de un elemento como key es clave
          // <li key={id}>
          //   <p>{content}</p>
          //   <p><time>{date}</time></p>
          //   <p>{important ? 'Es importante' : "No es importante"}</p>
          // </li>
          <Note key={id} id={id} content={content} date={date} important={important} />
        )
      }) : notes.filter(note => note.important).map(({ id, content, date, important }) => {
        return (
          <Note key={id} id={id} content={content} date={date} important={important} />
        )
      }
      )}

      {/* Siempre deberiamos intentar wrappear el contenido del form por la etiqueta form y utilizar el onSubmit */}
      < form onSubmit={handleSubmit} >
        <input type='text' onChange={handleChange} value={newNote} />
        {/* El ultimo boton de un formulario, lanza el onSubmit */}
        < button > Crear nota</button>
      </form >

      <p>
        <button onClick={handleClick}>{showAll ? "Mostrar solo las notas importantes" : "Mostrar todas las notas"}</button>
      </p>
    </ul >
  )
}

export default App
