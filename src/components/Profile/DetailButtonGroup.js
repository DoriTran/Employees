import "./DetailButtonGroup.scss"

const DetailButtonGroup = (props) => {
    return (
    <div className="tab-wrapper">
        <button className={props.tab === "information" ? "selected-btn" : "unselected-btn"} 
                onClick={() => props.setTab('information')}>INFORMATION</button>
        <button className={props.tab === "working" ? "selected-btn" : "unselected-btn"} 
                onClick={() => props.setTab('working')}>WORKING</button>
        <button className={props.tab === "advances" ? "selected-btn" : "unselected-btn"} 
                onClick={() => props.setTab('advances')}>ADVANCES</button>
        <button className={props.tab === "statistics" ? "selected-btn" : "unselected-btn"} 
                onClick={() => props.setTab('statistics')}>STATISTICS</button>
        <div className="fillout" disabled></div>
    </div>)
}

export default DetailButtonGroup