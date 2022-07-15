import "./EditEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import SelectRow from "../Modal/SelectRow"
import { useState } from "react"

const EditEmployeeModal = (props) => {
    const submitHandler = () => {
        props.onBackdropClick()
        props.setProfile(formInput)
    }

    const [formInput, setFormInput] = useState(props.profile)
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"black"}>
        <div className="edit-header">Edit {props.profile.FullName} profile</div>
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
                            value={formInput.Age} setInput={setFormInput}/>
                        <InputRow name="MoneyHour" required label="Money/hour *"placeholder="1000" type="number" 
                            value={formInput.MoneyHour} setInput={setFormInput}/>                       
                    </div>
                    <div className="modal-right">
                        <SelectRow name="Sex" required label="Sex employee *" placeholder="" options={["Male", "Female"]} 
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

export default EditEmployeeModal