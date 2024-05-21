import './App.css'
import Person from "./components/Person/Person";

function App() {
  const name = "Jacinto";
  const surname = "Duro";
  const age = "29";
  return (
      <div>
        <p className="text">Hola</p>
        <Person name={name} surname={surname} age={age}/>
        <Person name={"Filiberto"} surname={"Piedras"} age={30}/>
        <Person name={"Anselmo"} surname={"Cabeza"} age={31}/>
      </div>
  )
}

export default App
