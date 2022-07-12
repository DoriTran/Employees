import "./InputRow.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InputRow = (props) => {
    const handleInput = (event, input) => {
        return {...input, [props.name]: event.target.value}
    }

    return (
        <div className="main">
            {props.icon && <FontAwesomeIcon className="icon" icon={props.icon} />} 
            <span>{props.label}</span>
            <input
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                required = {props.required}
                max={props.max}
                min={props.min}
                defaultValue={props.value}
                disabled={props.disabled}
                onChange={event => props.setInput(input => handleInput(event, input))}/>            
        </div>
    )
}

export default InputRow