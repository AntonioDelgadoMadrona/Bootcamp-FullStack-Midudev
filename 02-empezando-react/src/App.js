import Mensaje from "./Mensaje";
import Descripcion from "./Descripcion";

function App() {
  const mensaje = "Hola Mundo";
  return (
    <div className="App">
      <h1>{mensaje}</h1>
      <Mensaje />
      <Descripcion mensaje={"Descripcion desde app"} />
    </div>
  );
}

export default App;
