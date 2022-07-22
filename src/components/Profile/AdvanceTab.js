import "./WorkingTab.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useQuery, useMutation } from "react-query"
import AddAdvanceModal from "../Overlay/AddAdvanceModal"
import getAllAdvanceByEmployeeNo from "../../api-calls/advance/getAllAdvanceByEmployeeNo"
import { CircularProgress } from "@mui/material"

import deleteAdvanceByEmployeeNo from "../..//api-calls/advance/deleteAdvanceByEmployeeNo"

const WorkingTab = (props) => {
    // Delete handler
    const mutateDeleteAdvance = useMutation(deleteAdvanceByEmployeeNo)

    useEffect(() => {
        if (mutateDeleteAdvance.isSuccess)
            refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteAdvance.isSuccess])

    const deleteHandler = (AdvanceNo) => {
        mutateDeleteAdvance.mutate({ employeeNo: props.employeeNo, advanceNo: AdvanceNo })
    }

    // Query handler
    const { isLoading, isError, refetch, data: advances } = useQuery('getAllAdvanceByEmployeeNo', getAllAdvanceByEmployeeNo.bind(null, props.employeeNo))

    // State
    const [addAdvance, setAddAdvance] = useState(false)

    // Support
    const isDateExists = (date) => {
        return (advances.filter(advance => advance.date === date).length !== 0)
    }

    // Return
    if (isLoading) {
        return <CircularProgress size={"25px"} />
    } else if (isError) {
        return <span style={{ color: 'red' }}>Error loading advance data</span>
    } else {
        return (
            <div className="tab-wrapper">
                <div className="tab-header">
                    <span className="tab-title">ADVANCES</span>
                    <FontAwesomeIcon className="tab-add-button" icon={faCirclePlus} onClick={() => setAddAdvance(true)} />
                </div>
                <div className="tab-body">
                    <table className="tab-table">
                        <tbody>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Money</th>
                                <th>Option</th>
                            </tr>
                            {
                                advances.map(advance => (
                                    <tr key={advance.advanceNo}>
                                        <td>{advance.advanceNo}</td>
                                        <td>{advance.date}</td>
                                        <td>{advance.money}</td>
                                        <td><FontAwesomeIcon className="delete-button" icon={faTrashAlt} onClick={() => deleteHandler(advance.advanceNo)} /></td>
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {addAdvance && <AddAdvanceModal onBackdropClick={() => setAddAdvance(false)} isDateExists={isDateExists}
                    no={props.employeeNo} refetch={refetch} />}
            </div>
        )
    }
}

export default WorkingTab