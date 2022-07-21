import "./TeamTable.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

const TeamTable = (props) => {
    let compare = (a,b) => {
        if (a.teamNo > b.teamNo) return 1;
        else if (a.teamNo < b.teamNo) return -1;
        else return 0;
    }

    let sortedTeam = props.teams
    sortedTeam.sort(compare)

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
                        sortedTeam.map(team => (
                            <tr key={team.teamNo}>
                                <td>{team.teamNo}</td>
                                <td>{team.teamName}</td>
                                <td>
                                    <FontAwesomeIcon className="delete-button" icon={faAddressCard} onClick={() => props.setTeamNo(team.teamNo)} />
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