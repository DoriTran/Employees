import "./WorkingTab.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddAdvanceModal from "../Overlay/AddAdvanceModal"

const WorkingTab = (props) => {
    const deleteHandler = (No) => {
        props.setProfile(prevProfile => {
            return {...prevProfile, Advance: prevProfile.Advance.filter(day => day.No !== No)}
        })
    }

    const [addAdvance, setAddAdvance] = useState(false)

    return (
        <div className="tab-wrapper">
        <div className="tab-header">
            <span className="tab-title">ADVANCES</span>
            <FontAwesomeIcon className="tab-add-button" icon={faCirclePlus} onClick={()=>setAddAdvance(true)} />
        </div>
        <div className="tab-body">
            <table className="tab-table">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Money</th>
                        <th>Option</th>
                    </tr>
                    {
                        props.profile.Advance.map(advance => (
                            <tr key={advance.No}>                         
                                <td>{advance.No}</td>
                                <td>{advance.Date}</td>
                                <td>{advance.Money}</td>
                                <td><FontAwesomeIcon className="delete-button" icon={faTrashAlt} onClick={() => deleteHandler(advance.No)}/></td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
        {addAdvance && <AddAdvanceModal onBackdropClick={()=>setAddAdvance(false)}
            profile={props.profile} setProfile={props.setProfile}
            setEmployees={props.setEmployees}/>}
    </div>
    )
}

export default WorkingTab