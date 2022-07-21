import "./ProfileInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import EditEmployeeModal from "../Overlay/EditEmployeeModal"
import DeleteProfileDialog from "../Overlay/DeleteProfileDialog"

const ProfileInteraction = (props) => {
    const [isOpeningEditModal, setOpeningEditModal] = useState(false)
    const [isOpeningDelModal, setOpeningDelModal] = useState(false)

    return (
    <div className="nav">
        <h3 className="nameDisplay">{props.profile.fullName}</h3>
        <div className="button-wrapper">
            <button className="interactButton" onClick={()=>setOpeningEditModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button className="interactButton" onClick={()=>setOpeningDelModal(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        {isOpeningEditModal && 
            <EditEmployeeModal onBackdropClick={()=>setOpeningEditModal(false)} refetch={props.refetch}
            profile={props.profile} teams={props.teams}/>}
        {isOpeningDelModal && 
            <DeleteProfileDialog onBackdropClick={()=>setOpeningDelModal(false)} refetch={props.refetch}
            profile={props.profile}/>}
    </div>)
}

export default ProfileInteraction