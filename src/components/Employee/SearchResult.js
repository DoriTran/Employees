import "./SearchResult.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const SearchResult = (props) => {


    return (
        <table>
            <tbody>
                <tr>
                    <th><input type="checkbox" name="check_all" /></th>
                    <th>No</th>
                    <th>FullName</th>
                    <th>Phone</th>
                    <th>Team</th>
                    <th>Option</th>
                </tr>

                {
                    props.employees.map((employee, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" /></td>
                            <td>{(props.page - 1) * 10 + index + 1}</td>
                            <td>{employee.FullName}</td>
                            <td>{employee.Phone}</td>
                            <td>{employee.Team}</td>
                            <td>
                                <div className="option-wrapper">
                                    <FontAwesomeIcon className="info-button" icon={faInfo} />
                                    <FontAwesomeIcon  icon={faTrashAlt} />
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