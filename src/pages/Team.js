import "./Team.scss"

import Navbar from "../components/Navbar/Navbar"
import TeamInteraction from "../components/Team/TeamInteraction";
import TeamTable from "../components/Team/TeamTable"
import TeamDetail from "../components/Team/TeamDetail";
import { useEffect, useState } from "react"


const Team = (props) => {
    const [teamName, setTeamName] = useState("")
    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
        if (teamName === "") setTeamMembers([])
        else {
            setTeamMembers(props.employees.filter(employee => employee.Team === teamName))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamName])

    return (
        <>
            <Navbar selected="Team"/>
            <TeamInteraction teams={props.teams} setTeams={props.setTeams} />
            <div className="team-container">
                <TeamTable teams={props.teams} teamName={teamName} setTeamName={setTeamName} />
                <TeamDetail teamName={teamName} teamMembers={teamMembers} />
            </div>
        </>
    );
}

export default Team;