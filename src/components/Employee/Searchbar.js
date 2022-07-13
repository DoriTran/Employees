import "./Searchbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Searcbar = (props) => {
    return (
    <div className="nav-search">
        <div className="total-employees">Total {props.total} employees</div>
        <div className="search-container">
            <div className="search-wrapper">
                <input placeholder="Search Employee by names" onChange={event => props.setSearchKey(event.target.value)}/>
                <FontAwesomeIcon className="search-icon" icon={faSearch}/>    
            </div>
        </div>
    </div>
    ) 
}

export default Searcbar