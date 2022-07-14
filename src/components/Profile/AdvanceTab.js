import "./WorkingTab.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCirclePlus } from "@fortawesome/free-solid-svg-icons"

const WorkingTab = (props) => {
    const deleteHandler = (No) => {
        props.setProfile(prevProfile => {
            return {...prevProfile, Working: prevProfile.Working.filter(day => day.No !== No)}
        })
    }

    return (
        <div className="tab-wrapper">
        <div className="tab-header">
            <span className="tab-title">ADVANCES</span>
            <FontAwesomeIcon className="tab-add-button" icon={faCirclePlus} />
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
    </div>
    )
}

export default WorkingTab