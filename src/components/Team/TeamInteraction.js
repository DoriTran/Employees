import "./TeamInteraction.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddNewTeamModal from "../Overlay/AddNewTeamModal"

const TeamInteraction = (props) => {
    const [isOpeningAddModal, setOpeningAddModal] = useState(false)

    return (
    <div className="nav">
        <h3 className="nameDisplay">Team</h3>
        <button className="add-team-btn" onClick={()=>setOpeningAddModal(true)}><FontAwesomeIcon icon={faCirclePlus} /></button>
        {isOpeningAddModal && 
            <AddNewTeamModal onBackdropClick={()=>setOpeningAddModal(false)} setTeams={props.setTeams} refetch={props.refetch}/>}
    </div>)
}

export default TeamInteraction