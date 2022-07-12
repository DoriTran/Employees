import "./EmployeeInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddNewEmployeeModal from "./modal/AddNewEmployeeModal"

const EmployeeInteraction = () => {
    const [isOpeningAddModal, setOpeningAddModal] = useState(false)
    const [isOpeningDelModal, setOpeningDelModal] = useState(false)

    return (
    <div className="nav">
        <h3 className="nameDisplay">Employee</h3>
        <div className="button-wrapper">
            <button className="interactButton" onClick={()=>setOpeningAddModal(true)}><FontAwesomeIcon icon={faCirclePlus} /></button>
            <button className="interactButton" onClick={()=>setOpeningAddModal(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        {isOpeningAddModal && <AddNewEmployeeModal onBackdropClick={()=>setOpeningAddModal(false)} />}
        {isOpeningDelModal && <AddNewEmployeeModal onBackdropClick={()=>setOpeningAddModal(false)} />}
    </div>)
}

export default EmployeeInteraction