import "./DeleteEmployeeDialog.scss"
import { Button } from "@mui/material"
import Dialog from '../Dialog/Dialog'
import { useEffect } from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

import deleteEmployee from "../../api-calls/employee/deleteEmployee"

const DeleteEmployeeDialog = (props) => {
    const navigate = useNavigate()

    // Delete handler
    const mutateDeleteEmployee = useMutation(deleteEmployee)

    useEffect(() => {
        if (mutateDeleteEmployee.isSuccess) {
            props.onBackdropClick()
            navigate("/employee")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteEmployee.isSuccess])

    const deleteHandler = () => {
        mutateDeleteEmployee.mutate(props.profile.no)
    }
    

    return (
        <Dialog onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
            <div className="dialog-container">
                <div className="dialog-header">Are you sure to delete this employee?</div>
                <form className="dialog-body">
                    <div className="dialog-message">
                        <div className="dialog-single">All profile data of {props.profile.fullName} will be deleted</div>
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
                        variant="contained" onClick={() => deleteHandler()}
                        style={{ backgroundColor: "#ededed", marginLeft: "5px", color: "black" }}
                    >
                        YES
                    </Button>
                </div>
            </div>
        </Dialog>)
}

export default DeleteEmployeeDialog