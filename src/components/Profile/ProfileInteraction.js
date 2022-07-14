import "./ProfileInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import EditEmployeeModal from "../Overlay/EditEmployeeModal"
import DeleteProfileDialog from "../Overlay/DeleteProfileDialog"

const EmployeeInteraction = (props) => {
    const [isOpeningAddModal, setOpeningAddModal] = useState(false)
    const [isOpeningDelModal, setOpeningDelModal] = useState(false)

    return (
    <div className="nav">
        <h3 className="nameDisplay">{props.FullName}</h3>
        <div className="button-wrapper">
            <button className="interactButton" onClick={()=>setOpeningDelModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button className="interactButton" onClick={()=>setOpeningDelModal(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        {isOpeningAddModal && 
            <EditEmployeeModal onBackdropClick={()=>setOpeningAddModal(false)} setEmployees={props.setEmployees}/>}
        {isOpeningDelModal && 
            <DeleteProfileDialog onBackdropClick={()=>setOpeningDelModal(false)} 
            FullName={props.FullName}
            EmployeeID={props.EmployeeID}
            setEmployees={props.setEmployees}/>}
    </div>)
}

export default EmployeeInteraction