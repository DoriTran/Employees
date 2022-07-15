import "./AddNewEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import SelectRow from "../Modal/SelectRow"
import { useEffect, useState } from "react"

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
        Address: "", Age: 18, MoneyHour: "",
        Sex: "Male", StartDate: new Date().toISOString().substring(0, 10), Phone: "", Team: props.teams[0], Working: [], Advance: []})

    useEffect(() => {   
        console.log(formInput)
    }, [formInput])
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Add new Employee</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="FullName" required label="Full name employee" placeholder="Nguyễn Văn A" 
                                   value={formInput.FullName} setInput={setFormInput} maxLength={255}/>
                        <span style={{textAlign: "right", width: "100%"}}>{formInput.FullName.length}/255</span>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-left">       
                        <InputRow name="Address" required label="Address *" placeholder="123, Cầu Giấy, Hà Nội" 
                                    value={formInput.Address} setInput={setFormInput} maxLength={300}/>    
                        <InputRow name="Age" required label="Age employee *" placeholder="18" type="number"
                                    value={formInput.Age} setInput={setFormInput} max={100}/>
                        <InputRow name="MoneyHour" required label="Money/hour *" placeholder="1000" type="number"
                                    value={formInput.MoneyHour} setInput={setFormInput}/>                       
                    </div>
                    <div className="modal-right">
                        <SelectRow name="Sex" required label="Sex employee *"options={["Male", "Female"]} 
                                    value={formInput.Sex} setInput={setFormInput}/>
                        <InputRow name="StartDate" required label="Start day *" type="date"
                                    value={formInput.StartDate} setInput={setFormInput}/>
                        <InputRow name="Phone" required label="Phone number *" placeholder="0123456789" regex="^([+]|[0-9]){0,1}[0-9]{0,12}$"
                                    value={formInput.Phone} setInput={setFormInput} maxLength={12}/>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-single">
                        <SelectRow name="Team" required label="Team *" options={props.teams} 
                                    value={formInput.Team} setInput={setFormInput}/>
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
                        variant="contained" type="submit"
                        style={{backgroundColor:"#ededed", marginLeft:"5px", color:"black"}} 
                        >
                            {false ? <CircularProgress size={'25px'}/> :'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default AddNewEmployeeModal