import "./AvatarInfo.scss"
import { API_URL } from "../../api-calls/api-url"
import { useState } from "react"
import UploadAvatarModal from "../Overlay/UploadAvatarModal"

const PillInfo = (props) => {
    return <div className="pill-info" style={{ backgroundColor: props.backgroundColor, color: props.color }}>
        {props.keyInfo} : {props.value}
    </div>
}

const AvatarInfo = (props) => {
    const [isOpeningAvatarModal, setOpeningAvatarModal] = useState(false)

    const getAvatarSource = () => {
        if (props.profile.avatar !== null) {
            return API_URL + "profile/avatar/files/" + props.profile.avatar
        }
        return props.profile.sex === "Female" ? require("./Default Avatar/DefaultWomanAvatar.png") : require("./Default Avatar/DefaultManAvatar.png")
    }

    return (
        <div className="avatar-wrapper">
            <div className="image-wrapper">
                <img src={getAvatarSource()} alt="Avatar" className="avatar-img"></img>
            </div>
            <div className="pill-row">
                <PillInfo keyInfo={"No"} value={props.profile.no} backgroundColor="#007bff" color="white" />
                <PillInfo keyInfo="Age" value={props.profile.age} backgroundColor="#17a2b8" color="white" />    
            </div>
            <div className="pill-row">
                <PillInfo keyInfo="Sex" value={props.profile.sex} backgroundColor="#ffc107" color="black" />
            </div>
            <div className="pill-row">
                <button className="btn-upload-avatar" onClick={() => setOpeningAvatarModal(true)}>Upload Avatar</button>
            </div>
            {isOpeningAvatarModal && <UploadAvatarModal no={props.profile.no} onBackdropClick={() => setOpeningAvatarModal(false)} refetch={props.refetch}/>}
        </div>

    )
}

export default AvatarInfo