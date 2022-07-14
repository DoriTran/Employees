import "./WorkingTab.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddWorkingModal from "../Overlay/AddWorkingModal"

const WorkingTab = (props) => {
    const deleteHandler = (No) => {
        props.setProfile(prevProfile => {
            return {...prevProfile, Working: prevProfile.Working.filter(day => day.No !== No)}
        })
    }

    const [addWorking, setAddWorking] = useState(false)

    return (
        <div className="tab-wrapper">
        <div className="tab-header">
            <span className="tab-title">WORKING</span>
            <FontAwesomeIcon className="tab-add-button" icon={faCirclePlus} onClick={() => setAddWorking(true)}/>
        </div>
        <div className="tab-body">
            <table className="tab-table">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Option</th>
                    </tr>
                    {
                        props.profile.Working.map(working => (
                            <tr key={working.No}>                         
                                <td>{working.No}</td>
                                <td>{working.Date}</td>
                                <td>{working.Hour}</td>
                                <td><FontAwesomeIcon className="delete-button" icon={faTrashAlt} onClick={() => deleteHandler(working.No)}/></td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
        {addWorking && <AddWorkingModal onBackdropClick={()=>setAddWorking(false)}
            profile={props.profile} setProfile={props.setProfile}
            setEmployees={props.setEmployees}/>}
    </div>
    )
}

export default WorkingTab