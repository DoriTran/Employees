import "./DeleteEmployeeDialog.scss"
import { Button } from "@mui/material"
import Dialog from '../Dialog/Dialog'

import { useEffect } from "react"
import { useMutation } from "react-query"

import deleteSelectedEmployee from "../../api-calls/employee/deleteSelectedEmployee"

const DeleteEmployeeDialog = (props) => {
    // Delete handler
    const mutateDeleteSelectedEmployee = useMutation(deleteSelectedEmployee)

    useEffect(() => {
        if (mutateDeleteSelectedEmployee.isSuccess) {
            props.refetch()
            props.onBackdropClick()
            props.setCheckedID([])
            props.setCheckAll(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteSelectedEmployee.isSuccess])

    const deleteHandler = () => {
        mutateDeleteSelectedEmployee.mutate(props.checkedID)
    }    

    return (
        <Dialog onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
            <div className="dialog-container">
                <div className="dialog-header">Are you sure to delete all employees selected?</div>
                <form className="dialog-body">
                    <div className="dialog-message">
                        <div className="dialog-single">All data of these employees will be deleted</div>
                    </div>
                </form>
                <div className="dialog-button-group">
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "transparent", color: "black" }}
                        onClick={props.onBackdropClick}>
                        NO
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#ededed", marginLeft: "5px", color: "black" }}
                        onClick={() => deleteHandler()}
                    >
                        YES
                    </Button>
                </div>
            </div>
        </Dialog>)
}

export default DeleteEmployeeDialog