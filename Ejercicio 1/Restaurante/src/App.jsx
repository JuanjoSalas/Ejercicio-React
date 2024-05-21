import './App.css'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
const tittle = "Restaurant";
const dishes = [
  {
    id:1,
    name: "plato 1",
    description: "Este es el plato 1",
    price: 10
  },
  {
    id:1,
    name: "plato 2",
    description: "Este es el plato 2",
    price: 20
  },
  {
    id:1,
    name: "plato 3",
    description: "Este es el plato 3",
    price: 30
  }
]
const printDishes = dishes.map((dish) => <Home dish={dish}/>);
  return (
      <div>
        <Header tittle={tittle}/>
        {printDishes}
      </div>
  )
}

export default App
