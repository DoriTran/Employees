import "./ProfileInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import EditEmployeeModal from "../Overlay/EditEmployeeModal"
import DeleteProfileDialog from "../Overlay/DeleteProfileDialog"

const EmployeeInteraction = (props) => {
    const [isOpeningEditModal, setOpeningEditModal] = useState(false)
    const [isOpeningDelModal, setOpeningDelModal] = useState(false)

    return (
    <div className="nav">
        <h3 className="nameDisplay">{props.profile.FullName}</h3>
        <div className="button-wrapper">
            <button className="interactButton" onClick={()=>setOpeningEditModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button className="interactButton" onClick={()=>setOpeningDelModal(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        {isOpeningEditModal && 
            <EditEmployeeModal onBackdropClick={()=>setOpeningEditModal(false)} 
            profile={props.profile} setProfile={props.setProfile} teams={props.teams}
            setEmployees={props.setEmployees}/>}
        {isOpeningDelModal && 
            <DeleteProfileDialog onBackdropClick={()=>setOpeningDelModal(false)} 
            profile={props.profile}
            setEmployees={props.setEmployees}/>}
    </div>)
}

export default EmployeeInteraction