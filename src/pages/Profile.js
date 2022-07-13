import "./Profile.scss"

import Navbar from "../components/Navbar/Navbar"
import ProfileInteraction from "../components/Profile/ProfileInteraction"
import AvatarInfo from "../components/Profile/AvatarInfo"

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailButtonGroup from "../components/Profile/DetailButtonGroup"

const Profile = (props) => {
    const { EmployeeID } = useParams()
    const [profile, setProfile] = useState(props.employees.find(employee => employee.EmployeeID === EmployeeID))
    const [tab, setTab] = useState("information")

    return (
        <>
            <Navbar />
            <ProfileInteraction
                FullName={profile.FullName}
                setEmployees={props.setEmployees} />
            <div className="profile-container">
                <AvatarInfo className="left-side" profile={profile} />
                <div className="right-side">
                    <DetailButtonGroup tab={tab} setTab={setTab} />
                </div>
            </div>
            
            

        </>
    );
}

export default Profile;