import "./CampoTexto.css";

const CampoTexto = (props) => {
  console.log('testetest',props)
  const parametros = props.parametros
  return (
    <div className="campo-texto">
      <label>{parametros.label}</label>
      <input placeholder={parametros.placeholder}/>
    </div>
  )
}

export default CampoTexto;