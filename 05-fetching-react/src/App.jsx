import { Note } from '../components/Note';
import { useEffect, useState } from 'react';
import { createNewNote, getAllNotes } from '../services/noteService';

// eslint-disable-next-line react/prop-types
function App() {

  const NOTE_INITIAL_STATE = { title: "", body: "" };

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ ...NOTE_INITIAL_STATE });
  const [loading, setLoading] = useState(false);

  // Mediante el useEffect podemos acceder a diferentes ciclos de vida del componente
  useEffect(() => {
    setLoading(true);

    // Fetching con fetch (nativo de JS) - - - - - - - - 
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.json())
    //   .then(res => {
    //     setNotes(res)
    //     setLoading(false);
    //   });

    // Fetching con Axios - - - - - - - - - - - 
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => {
    //     const { data } = response;
    //     setNotes(data)
    //     setLoading(false);
    //   })

    // Mediante la externalizacion del servicio, separamos logica de negocio del componente
    getAllNotes().then(notes => {
      setNotes(notes)
      setLoading(false);
    });
  }, []) // Mediante el array de dependencias definimos cuando "ejecutarlo"

  const handleChange = (e) => {
    // Mediante el name/value podemos alterar un objeto sin tener que evaluar que propiedad en cuestion
    const { value, name } = e.target;
    console.log(value, name)
    setNewNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Con el preventDefault paramos el refresco de la pagina provocado por el formulario
    e.preventDefault();
    const newNotee = {
      userId: Math.random(),
      title: newNote.title,
      body: newNote.body,
    };

    // axios.post("https://jsonplaceholder.typicode.com/posts", newNotee)
    //   .then(response => {
    //     const { data } = response;
    //     setNotes(prevNotes => [
    //       ...prevNotes,
    //       data
    //     ]);
    //     setNewNote({ ...NOTE_INITIAL_STATE });
    //   })

    createNewNote(newNotee).then(note => {
      setNotes(prevNotes => [
        ...prevNotes,
        note
      ]);
      setNewNote({ ...NOTE_INITIAL_STATE });
    })
  };

  return (
    <div>
      {/* Siempre deberiamos intentar wrappear el contenido del form por la etiqueta form y utilizar el onSubmit */}
      <form onSubmit={handleSubmit} >
        <label htmlFor="title">Titulo</label>
        <input type='text' name="title" onChange={handleChange} value={newNote.title} />
        <br />
        <label htmlFor="body">Cuerpo</label>
        <input type='text' name='body' onChange={handleChange} value={newNote.body} />
        <hr />
        {/* El ultimo boton de un formulario, lanza el onSubmit */}
        < button > Crear nota</button>
      </form>

      {loading && <p>Cargando</p>}

      <ol>
        {notes.map(({ id, userId, body, title }) => {
          return (
            <Note key={id} userId={userId} body={body} title={title} />
          )
        }
        )}
      </ol >
    </div>
  )
}

export default App
