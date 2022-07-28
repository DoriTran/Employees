import "./SearchResult.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useMutation } from "react-query"

import deleteEmployee from "../../api-calls/employee/deleteEmployee"
import { useEffect } from "react";

const SearchResult = (props) => {
    const deleteHandler = (EmployeeNo) => {
        mutateDeleteEmployee.mutate(EmployeeNo)
        props.setCheckedID(prevCheckedIDs => prevCheckedIDs.filter(prevCheckedID => prevCheckedID !== EmployeeNo))
    }

    // Delete handler
    const mutateDeleteEmployee = useMutation(deleteEmployee)

    useEffect(() => {
        if (mutateDeleteEmployee.isSuccess) {
            props.refetch()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteEmployee.isSuccess])

    const handleCheckAll = () => {
        props.setCheckAll(!props.checkAll);
        let PageEmployeeNo = props.employees.map(employee => employee.no)

        if (!props.checkAll) {
            let newCheckedNos = PageEmployeeNo.filter(checked => !props.checkedID.includes(checked))
            props.setCheckedID(prev => [...prev, ...newCheckedNos])
        } else {
            props.setCheckedID(prev => prev.filter(checked => !PageEmployeeNo.includes(checked)))
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
                                checked={props.checkedID.includes(employee.no)} 
                                onChange={() => handleCheck(employee.no)}/></td>                            
                            <td>{employee.no}</td>
                            <td>{employee.fullName}</td>
                            <td>{employee.phone}</td>
                            <td>{props.teams.filter(team => team.teamNo === employee.teamNo)[0].teamName}</td>
                            <td>
                                <div className="option-wrapper">
                                    <Link to={`/profile/id=${employee.no}`}><FontAwesomeIcon className="info-button" icon={faInfo} /></Link>
                                    <FontAwesomeIcon className="delete-button" icon={faTrashAlt} onClick={() => deleteHandler(employee.no)}/>
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