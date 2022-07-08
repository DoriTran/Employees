import "./EmployeeInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const EmployeeInteraction = () => {
    return (
    <div className="nav">
        <h3 className="nameDisplay">Employee</h3>
        <div className="button-wrapper">
            <button className="interactButton"><FontAwesomeIcon icon={faCirclePlus} /></button>
            <button className="interactButton"><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    </div>)
}

export default EmployeeInteraction