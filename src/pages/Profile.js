import "./Profile.scss"

import Navbar from "../components/Navbar/Navbar"
import ProfileInteraction from "../components/Profile/ProfileInteraction"
import AvatarInfo from "../components/Profile/AvatarInfo"

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailButtonGroup from "../components/Profile/DetailButtonGroup"
import InfomationTab from "../components/Profile/InformationTab"
import WorkingTab from "../components/Profile/WorkingTab"
import AdvanceTab from "../components/Profile/AdvanceTab"

const Profile = (props) => {
    const { EmployeeID } = useParams()
    const [profile, setProfile] = useState(props.employees.find(employee => employee.EmployeeID === EmployeeID))
    const [tab, setTab] = useState("information")

    // For fake data api interact
    useEffect(() => {
        let employeesThatNotHaveThisProfile = props.employees.filter(employee => employee.EmployeeID !== profile.EmployeeID)
        props.setEmployees([...employeesThatNotHaveThisProfile, profile])
        console.log("useEffect")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile.Working])

    return (
        <>
            <Navbar />
            <ProfileInteraction
                FullName={profile.FullName}
                EmployeeID={profile.EmployeeID}
                setEmployees={props.setEmployees} />
            <div className="profile-container">
                <AvatarInfo className="left-side" profile={profile} />
                <div className="right-side">
                    <DetailButtonGroup tab={tab} setTab={setTab} />
                    {tab === "information" && <InfomationTab profile={profile} />}
                    {tab === "working" && <WorkingTab profile={profile} setProfile={setProfile} />}
                    {tab === "advances" && <AdvanceTab profile={profile} setProfile={setProfile} />}
                </div>
            </div>
        </>
    );
}

export default Profile;