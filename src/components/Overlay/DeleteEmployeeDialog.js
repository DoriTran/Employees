import "./DeleteEmployeeDialog.scss"
import { Button } from "@mui/material"
import Dialog from '../Dialog/Dialog'
// import { useEffect, useState } from "react"

const DeleteEmployeeDialog = (props) => {
    const deleteHandler = () => {
        props.onBackdropClick()
        props.setCheckedID([])
        props.setCheckAll(false)
        props.setEmployees(prev => prev.filter(employee => !props.checkedID.includes(employee.EmployeeID)))
    }

    return (
        <Dialog onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
            <div className="dialog-container">
                <div className="dialog-header">Are you sure to delete all employees selected?</div>
                <form className="dialog-body" onSubmit={deleteHandler}>
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