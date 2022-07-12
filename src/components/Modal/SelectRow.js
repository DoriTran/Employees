import "./SelectRow.scss"
import { forwardRef } from "react"

const SelectRow = forwardRef((props, ref) => {
    const handleInput = (event, input) => {
        return {...input, [props.name]: event.target.value}
    }

    return (
        <div className="main">
            <span>{props.label}</span>
            <select
                name={props.name}
                ref={ref}
                required = {props.required}
                disabled={props.disabled}
                onChange={event => props.setInput(input => handleInput(event, input))}
                defaultValue={props.selectedValue} >
                { props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}    
            </select>
            
        </div>
    )
})

export default SelectRow