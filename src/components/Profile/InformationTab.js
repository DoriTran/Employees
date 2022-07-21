import "./InformationTab.scss"

const InfomationTab = (props) => {
    return (
        <div className="tab-wrapper">
            <div className="tab-header">INFORMATIONS</div>
            <div className="tab-body">
                <span className="info-disabled-input">Start date: {props.profile.startDate.slice(0,10)}</span>
                <span className="info-disabled-input">Team: {props.teamName}</span>
                <span className="info-disabled-input">Address: {props.profile.address}</span>
                <span className="info-disabled-input">Sallary per hour: {props.profile.moneyHour}</span>
            </div>
        </div>
    )
}

export default InfomationTab