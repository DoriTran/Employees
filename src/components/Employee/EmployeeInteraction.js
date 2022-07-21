import "./EmployeeInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddNewEmployeeModal from "../Overlay/AddNewEmployeeModal"
import DeleteEmployeeDialog from "../Overlay/DeleteEmployeeDialog"

const EmployeeInteraction = (props) => {
    const [isOpeningAddModal, setOpeningAddModal] = useState(false)
    const [isOpeningDelModal, setOpeningDelModal] = useState(false)

    return (
    <div className="nav">
        <h3 className="nameDisplay">Employee</h3>
        <div className="button-wrapper">
            <button className="interactButton" onClick={()=>setOpeningAddModal(true)}><FontAwesomeIcon icon={faCirclePlus} /></button>
            <button className="interactButton" onClick={()=>setOpeningDelModal(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        {isOpeningAddModal && 
            <AddNewEmployeeModal onBackdropClick={()=>setOpeningAddModal(false)} teams={props.teams} refetch={props.refetch}/>}
        {isOpeningDelModal && 
            <DeleteEmployeeDialog onBackdropClick={()=>setOpeningDelModal(false)} 
            checkedID={props.checkedID} setCheckedID={props.setCheckedID} 
            setCheckAll={props.setCheckAll}
            refetch={props.refetch}/>}
    </div>)
}

export default EmployeeInteraction