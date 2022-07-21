import "./WorkingTab.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useQuery, useMutation } from "react-query"
import AddWorkingModal from "../Overlay/AddWorkingModal"
import getAllWorkingByEmployeeNo from "../../api-calls/working/getAllWorkingByEmployeeNo"
import { CircularProgress } from "@mui/material"

import deleteWorkingByEmployeeNo from "../..//api-calls/working/deleteWorkingByEmployeeNo"

const WorkingTab = (props) => {
    // Delete handler
    const mutateDeleteWorking = useMutation(deleteWorkingByEmployeeNo)

    useEffect(() => {
        if (mutateDeleteWorking.isSuccess) 
            refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteWorking.isSuccess])

    const deleteHandler = (WorkingNo) => {
        mutateDeleteWorking.mutate({employeeNo: props.employeeNo, workingNo: WorkingNo})
    }

    // Query handler
    const { isLoading, isError, refetch , data: workings } = useQuery('getAllWorkingByEmployeeNo', () => getAllWorkingByEmployeeNo(props.employeeNo))

    // State
    const [addWorking, setAddWorking] = useState(false)

    // Return
    if (isLoading) {
        return <CircularProgress size={"25px"} />
    } else if (isError) {
        return <span style={{ color: 'red' }}>Error loading working data</span>
    } else {
        return (
            <div className="tab-wrapper">
                <div className="tab-header">
                    <span className="tab-title">WORKING</span>
                    <FontAwesomeIcon className="tab-add-button" icon={faCirclePlus} onClick={() => setAddWorking(true)} />
                </div>
                <div className="tab-body">
                    <table className="tab-table">
                        <tbody>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Hour</th>
                                <th>Option</th>
                            </tr>
                            {
                                workings.map(working => (
                                    <tr key={working.workingNo}>
                                        <td>{working.workingNo}</td>
                                        <td>{working.date.slice(0,10)}</td>
                                        <td>{working.hour}</td>
                                        <td><FontAwesomeIcon className="delete-button" icon={faTrashAlt} onClick={() => deleteHandler(working.workingNo)} /></td>
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {addWorking && <AddWorkingModal onBackdropClick={() => setAddWorking(false)}
                 no={props.employeeNo} refetch={refetch}/>}
            </div>
        )
    }

}

export default WorkingTab