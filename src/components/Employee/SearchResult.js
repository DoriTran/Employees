import "./SearchResult.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

const SearchResult = (props) => {
    const deleteHandler = (EmployeeID) => {
        props.setCheckedID(prevCheckedIDs => prevCheckedIDs.filter(prevCheckedID => prevCheckedID !== EmployeeID))
        props.setEmployees(prevEmployees => prevEmployees.filter(prevEmployee => prevEmployee.EmployeeID !== EmployeeID))
    }

    const handleCheckAll = () => {
        props.setCheckAll(!props.checkAll);
        let PageEmployeeID = props.employees.map(employee => employee.EmployeeID)

        if (!props.checkAll) {
            let newCheckedIDs = PageEmployeeID.filter(checked => !props.checkedID.includes(checked))
            props.setCheckedID(prev => [...prev, ...newCheckedIDs])
        } else {
            props.setCheckedID(prev => prev.filter(checked => !PageEmployeeID.includes(checked)))
        }
    }

    const handleCheck = (newCheckedID) => {
        if (props.checkedID.includes(newCheckedID)) {
            props.setCheckedID(prev => prev.filter(checked => checked !== newCheckedID))
        }         
        else {
            props.setCheckedID(prev => [...prev, newCheckedID])
        }
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th><input type="checkbox" name="check_page" 
                        checked={props.checkAll} 
                        onChange={() => handleCheckAll()}/></th>
                    <th>No</th>
                    <th>FullName</th>
                    <th>Phone</th>
                    <th>Team</th>
                    <th>Option</th>
                </tr>
                {
                    props.employees.map((employee, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" 
                                checked={props.checkedID.includes(employee.EmployeeID)} 
                                onChange={() => handleCheck(employee.EmployeeID)}/></td>                            
                            <td>{(props.page - 1) * 10 + index + 1}</td>
                            <td>{employee.FullName}</td>
                            <td>{employee.Phone}</td>
                            <td>{employee.Team}</td>
                            <td>
                                <div className="option-wrapper">
                                    <Link to={`/profile/id=${employee.EmployeeID}`}><FontAwesomeIcon className="info-button" icon={faInfo} /></Link>
                                    <FontAwesomeIcon className="delete-button" icon={faTrashAlt} onClick={() => deleteHandler(employee.EmployeeID)}/>
                                </div>
                            </td>
                        </tr>)
                    )
                }
            </tbody>
        </table>
    )
}

export default SearchResult