import "./Profile.scss"

import Navbar from "../components/Navbar/Navbar"
import ProfileInteraction from "../components/Profile/ProfileInteraction"
import AvatarInfo from "../components/Profile/AvatarInfo"

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from "react-query"
import DetailButtonGroup from "../components/Profile/DetailButtonGroup"
import InfomationTab from "../components/Profile/InformationTab"
import WorkingTab from "../components/Profile/WorkingTab"
import AdvanceTab from "../components/Profile/AdvanceTab"
import StatisticTab from "../components/Profile/StatisticTab"
import { CircularProgress } from "@mui/material"

import getEmployeeByNo from "../api-calls/employee/getEmployeeByNo";
import getAllTeams from "../api-calls/team/getAllTeam";

const Profile = (props) => {
    const { EmployeeID } = useParams()
    const { isLoading: isProfileLoading, isError: isProfileError, refetch : refetchProfile, data: profile } = useQuery('getAllEmployeeByNo', () => getEmployeeByNo(EmployeeID))
    const { isLoading: isTeamLoading, isError: isTeamError, data: teams } = useQuery('getAllTeam', getAllTeams)
    const [tab, setTab] = useState("information")

    // Query
    if (isProfileLoading || isTeamLoading) {
        return <CircularProgress size={"25px"} />
    } else if (isProfileError || isTeamError) {
        return <span style={{color: 'red'}}>Error loading profile data</span>
    } else {
        let formattedProfile = profile.data;
        formattedProfile.startDate = formattedProfile.startDate.slice(0, 10)
        return (
            <>
                <Navbar selected="Employee"/>
                <ProfileInteraction profile={formattedProfile} teams={teams} no={EmployeeID} refetch={refetchProfile}/>
                <div className="profile-container">
                    <AvatarInfo className="left-side" profile={formattedProfile} refetch={refetchProfile}/>
                    <div className="right-side">
                        <DetailButtonGroup tab={tab} setTab={setTab} />
                        {tab === "information" && <InfomationTab profile={formattedProfile} teamName={teams.filter(team => team.teamNo === profile.data.teamNo)[0].teamName}/>}
                        {tab === "working" && <WorkingTab employeeNo={formattedProfile.no} />}
                        {tab === "advances" && <AdvanceTab employeeNo={formattedProfile.no} />}
                        {tab === "statistics" && <StatisticTab employeeNo={formattedProfile.no} />}
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;