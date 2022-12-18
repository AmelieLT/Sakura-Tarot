import './styles/button.css'

function FunctionButton(props) {

  return (
    <button className={`bt ${props.class}`} >{props.text}</button> 
  )
}

export default FunctionButton;

FunctionButton.defaultProps = {
    text: 'Mi botón',
}