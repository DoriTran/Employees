import "./InformationTab.scss"

const InfomationTab = (props) => {
    return (
        <div className="tab-wrapper">
            <div className="tab-header">INFORMATIONS</div>
            <div className="tab-body">
                <span className="info-disabled-input">Start date: {props.profile.StartDate}</span>
                <span className="info-disabled-input">Team: {props.profile.Team}</span>
                <span className="info-disabled-input">Address: {props.profile.Address}</span>
                <span className="info-disabled-input">Sallary per hour: {props.profile.MoneyHour}</span>
            </div>
        </div>
    )
}

export default InfomationTab