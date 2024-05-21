import "./Home.css"


const Home = (props) => {
    console.log(props.dish.name);
  return (
    <div className="text-Home">Name: {props.dish.name} Description: {props.dish.description} price: {props.dish.price} </div>
  )
}

export default Home