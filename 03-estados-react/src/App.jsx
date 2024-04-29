// DEPENDENCIES
import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter';

const INITIAL_STATE = {
  count: 0,
  clicks: 0,
  message: "Clica en el boton para actualizar el valor del contador"
};

function App() {
  // El useState Hook es un array que retorna dos posiciones, el valor en sí y la funcion para cambiarlo
  // const [count, setCount] = useState(0)
  const [{ count, clicks, message }, setState] = useState(INITIAL_STATE)

  // Siempre que podamos, usar el estado lo más atomico posible
  // al igual que tener los minimos estados posibles

  // Podemos crear funciones dentro del componente que agrupen una funcionalidad más concreta
  const handleClick = () => {
    // setCount(count + 1)
    // setCount((prevCount) => prevCount + 1);
    // Mediante el debugger podemos poner un punto de interupcion para ver en detalle que ocurre
    // debugger;
    setState((prevState) => ({
      ...prevState, // Mediante el spread operator generamos una copia de todo lo demás 
      count: prevState.count * 2,
      clicks: prevState.clicks + 1
    }))
  };

  // Renderizado condicional 
  const isEven = count % 2 === 0;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          <Counter number={count} totalClicks={clicks} />
        </button>
        {/* Mediante las ternarias podemos tener condiciones de una manera muy intuitiva */}
        <p>{isEven ? "Es un numero par" : "Es un numero impar"}</p>
      </div>
      <p className="read-the-docs">
        {message}
      </p>
    </>
  )
}

export default App
