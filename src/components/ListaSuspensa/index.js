const listaSuspensa = (props) => {
  return (
    <div>
      <label>Lista Suspensa</label>
        <select>
          {props.itens.map(item =><option>{item}</option>)}
        </select>
    </div>
  )
}
export default listaSuspensa