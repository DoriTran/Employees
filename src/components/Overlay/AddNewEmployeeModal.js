import "./AddNewEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import SelectRow from "../Modal/SelectRow"
import { useState } from "react"

const AddNewEmployeeModal = (props) => {
    const submitHandler = () => {
        props.onBackdropClick()
        props.setEmployees(prevEmployees => {
            let allID = prevEmployees.map(employee => parseInt(employee.EmployeeID))
            let maxID = (Math.max(...allID) + 1).toString()
            return [...prevEmployees, {EmployeeID: maxID, ...formInput}]
        })
    }

    const [formInput, setFormInput] = useState(
        {FullName: "", 
        Address: "", Age: "", MoneyHour: "",
        Sex: "Male", StartDate: "", Phone: "", Team: "None", Working: [], Advance: []})
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
        <div className="modal-header">Add new Employee</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="FullName" required label="Full name employee" placeholder="Nguyễn Văn A" setInput={setFormInput}/>
                        <span style={{textAlign: "right", width: "100%"}}>{formInput.FullName.length}/255</span>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-left">       
                        <InputRow name="Address" required label="Address *" placeholder="123, Cầu Giấy, Hà Nội" setInput={setFormInput}/>    
                        <InputRow name="Age" required label="Age employee *" placeholder="18" type="number" setInput={setFormInput}/>
                        <InputRow name="MoneyHour" required label="Money/hour *" placeholder="1000" type="number" setInput={setFormInput}/>                       
                    </div>
                    <div className="modal-right">
                        <SelectRow name="Sex" required label="Sex employee *" placeholder="" options={["Male", "Female"]} setInput={setFormInput}/>
                        <InputRow name="StartDate" required label="Start day *" type="date" setInput={setFormInput}/>
                        <InputRow name="Phone" required label="Phone number *" placeholder="0123456789" type="number" setInput={setFormInput}/>
                    </div>
                </div>
                <div className="modal-button-group">
                    <Button disabled={false} 
                        variant="contained" 
                        style={{backgroundColor:"transparent", color:"black"}} 
                        onClick={props.onBackdropClick}>
                            Cancel
                    </Button>
                    <Button disabled={false }
                        variant="contained" 
                        style={{backgroundColor:"#ededed", marginLeft:"5px", color:"black"}} 
                        onClick={() => submitHandler()}
                        >
                            {false ? <CircularProgress size={'25px'}/> :'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default AddNewEmployeeModal