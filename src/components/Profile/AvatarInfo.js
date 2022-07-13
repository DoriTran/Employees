import "./AvatarInfo.scss"

const PillInfo = (props) => {
    return <div className="pill-info" style={{ backgroundColor: props.backgroundColor, color: props.color }}>
        {props.keyInfo} : {props.value}
    </div>
}

const AvatarInfo = (props) => {
    return (
        <div className="avatar-wrapper">
            <img src={props.profile.Sex === "Female" ? "/DefaultWomanAvatar.png" : "/DefaultManAvatar.png"} alt="Avatar" className="avatar-img"></img>
            <div className="pill-row">
                <PillInfo keyInfo={"No"} value={props.profile.EmployeeID} backgroundColor="#007bff" color="white" />
                <PillInfo keyInfo="Age" value={props.profile.Age} backgroundColor="#17a2b8" color="white" />    
            </div>
            <div className="pill-row">
                <PillInfo keyInfo="Sex" value={props.profile.Sex} backgroundColor="#ffc107" color="black" />
            </div>
        </div>

    )
}

export default AvatarInfo