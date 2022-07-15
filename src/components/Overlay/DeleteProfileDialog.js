import "./DeleteEmployeeDialog.scss"
import { Button } from "@mui/material"
import Dialog from '../Dialog/Dialog'
import { useNavigate } from "react-router-dom";

const DeleteEmployeeDialog = (props) => {
    const navigate = useNavigate()

    const deleteHandler = () => {

        props.setEmployees(employees => employees.filter(employee => employee.EmployeeID !== props.profile.EmployeeID))
        navigate("/employee")
    }

    return (
        <Dialog onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
            <div className="dialog-container">
                <div className="dialog-header">Are you sure to delete this employee?</div>
                <form className="dialog-body">
                    <div className="dialog-message">
                        <div className="dialog-single">All profile data of {props.profile.FullName} will be deleted</div>
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