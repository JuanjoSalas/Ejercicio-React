import "./Person.css"

const Person = (props) => {
  return (
    <div className="text-person"><span> {props.name} {props.surname} {props.age} </span></div>
  )
}

export default Home