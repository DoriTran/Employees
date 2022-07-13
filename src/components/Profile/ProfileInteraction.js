import "./ProfileInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import EditEmployeeModal from "../Overlay/EditEmployeeModal"
import DeleteEmployeeDialog from "../Overlay/DeleteEmployeeDialog"

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
            <DeleteEmployeeDialog onBackdropClick={()=>setOpeningDelModal(false)} 
            checkedID={props.checkedID} setCheckedID={props.setCheckedID}
            setCheckAll={props.setCheckAll}
            setEmployees={props.setEmployees}/>}
    </div>)
}

export default EmployeeInteraction