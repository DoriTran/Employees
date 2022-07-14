import "./TeamDetail.scss"
import { useNavigate } from "react-router-dom";

const TeamDetail = (props) => {
    const navigate = useNavigate()

    return (
        <div className="team-detail-container">
            <h3 className="team-detail-header">Result all employees team  {props.teamName} - Total {props.teamMembers.length} members</h3>
            <table className="team-detail">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>FullName</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Sex</th>
                    </tr>
                    {
                        props.teamMembers.map((member, index) => (
                            <tr key={index}  >
                                <td>{member.EmployeeID}</td>
                                <td className="member-hover" onClick={() => navigate("/profile/id=" + member.EmployeeID)}>{member.FullName}</td>
                                <td>{member.Phone}</td>
                                <td>{member.Address}</td>
                                <td>{member.Sex}</td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TeamDetail