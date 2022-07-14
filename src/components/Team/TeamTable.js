import "./TeamTable.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

const TeamTable = (props) => {
    return (
        <div className="team-table-container">
            <h3 className="team-table-header">Total {props.teams.length} teams</h3>
            <table className="team-table">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>NameTeam</th>
                        <th>Detail</th>
                    </tr>
                    {
                        props.teams.map((team, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{team}</td>
                                <td>
                                    <FontAwesomeIcon className="delete-button" icon={faAddressCard} onClick={() => props.setTeamName(team)} />
                                </td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TeamTable