import "./AddNewEmployeeModal.scss"
import { Button } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import { useState } from "react"

const AddAdvanceModal = (props) => {
    const submitHandler = () => {
        props.onBackdropClick()

        props.setProfile(preProfile => {
            formInput.Money = formInput.Money + "$"
            return {...preProfile, Advance: [...preProfile.Advance, formInput]} 
        })
        props.setEmployees(employees => {
            return [...employees.filter(employee => employee.EmployeeID !== props.profile.EmployeeID), props.profile]
        })
    }

    const [formInput, setFormInput] = useState(() => {
        let allNoAdvance = props.profile.Advance.map(advance => advance.No)
        return {No: Math.max(...allNoAdvance) + 1, Date: "", Money: 0 }
    })
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Add new Advance Date</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="Date" required label="Date *" type="date" setInput={setFormInput}/>    
                        <InputRow name="Money" required label="Money *" type="number" setInput={setFormInput}/>                    
                    </div>
                </div>
                <div className="modal-button-group">
                    <Button variant="contained" style={{backgroundColor:"transparent", color:"black"}} onClick={props.onBackdropClick}>
                            Cancel
                    </Button>
                    <Button variant="contained" style={{backgroundColor:"#ededed", marginLeft:"5px", color:"black"}} type="submit">
                            Confirm
                    </Button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default AddAdvanceModal