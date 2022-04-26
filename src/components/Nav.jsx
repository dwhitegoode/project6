export default function Nav(props) {

  return (
    <ul className="tabs">
      <li data-target="#thor" onClick={() => props.setActive(0)}>Thor</li>
      <li data-target="#iron" onClick={() => props.setActive(1)}>Iron Man</li>
      <li data-target="#captain" onClick={() => props.setActive(2)}>Cpt. America</li>
      <li data-target="#strange" onClick={() => props.setActive(3)}>Dr. Strange</li>
      <li data-target="#panther" onClick={() => props.setActive(4)}>Black Panther</li>
    </ul>
  )
}