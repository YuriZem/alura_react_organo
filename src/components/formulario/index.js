import './Formulario.css';
import CampoTexto from '../CampoTexto';

const campoTextoNome = {
  label: 'nome',
  placeholder: 'Digite seu nome'
}
const campoTextoCargo = {
  label: 'cargo',
  placeholder: 'Digite seu cargo'
}
const campoTextoImagem = {
  label: 'imagem',
  placeholder: 'Digite a url da imagem'
}

const formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto parametros={campoTextoNome} />
        <CampoTexto parametros={campoTextoCargo} />
        <CampoTexto parametros={campoTextoImagem} />
      </form>
    </section>
  )
}

export default formulario;