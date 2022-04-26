export default function Card(props) {

  const { name, image, description } = props.props
  console.log(name)
  return (
    <div className="panel" >

      <div className="card">
        <h1>{name}</h1>
        <img className="profileImg" src={image} alt="" ></img>
        <p>{description}</p>
      </div>

    </div>
  )
}