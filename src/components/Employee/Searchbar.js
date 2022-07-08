import "./Searchbar.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Searcbar = () => {
    const [totalEmployees, setTotalEmployees] = useState(0)

    return (
    <div className="nav-search">
        <div className="total-employees">Total {totalEmployees} employees</div>
        <div className="search-container">
            <div className="search-wrapper">
                <input/>
                <FontAwesomeIcon className="search-icon" icon={faSearch}/>    
            </div>
        </div>
        
    </div>
    ) 
}

export default Searcbar