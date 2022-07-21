import "./Team.scss"

import Navbar from "../components/Navbar/Navbar"
import TeamInteraction from "../components/Team/TeamInteraction";
import TeamTable from "../components/Team/TeamTable"
import TeamDetail from "../components/Team/TeamDetail";
import { useEffect, useState } from "react"

import { useQuery } from "react-query"
import { CircularProgress } from "@mui/material"
import getAllEmployeesByTeamNo from "../api-calls/team/getAllEmployeeByTeamNo";
import getAllTeams from "../api-calls/team/getAllTeam";


const Team = () => {
    // Query handler
    const { isLoading: isTeamLoading, isError: isTeamError, refetch: refetchTeam, data: teams } = useQuery('getAllTeam', getAllTeams)
    const { isLoading: isTeamEmployeeLoading, isError: isTeamEmployeeError, refetch: memberRefecth,  data: teamMembers } = useQuery('getAllEmployeesByTeamNo', () => getAllEmployeesByTeamNo(teamNo))

    // State
    const [teamNo, setTeamNo] = useState(1)

    // Effect
    useEffect(() => {
        memberRefecth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamNo])

    // Return
    if (isTeamEmployeeLoading || isTeamLoading) {
        return <CircularProgress size={"25px"} />
    } else if (isTeamEmployeeError || isTeamError) {
        return <span style={{color: 'red'}}>Error loading profile data</span>
    } else {
        return (
            <>
                <Navbar selected="Team"/>
                <TeamInteraction teams={teams} refetch={refetchTeam}/>
                <div className="team-container">
                    <TeamTable teams={teams} setTeamNo={setTeamNo}/>
                    <TeamDetail teamName={teams.filter(team => team.teamNo === teamNo)[0].teamName} teamMembers={teamMembers.data} />
                </div>
            </>
        );
    }

    

}

export default Team;