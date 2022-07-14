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
                        <InputRow name="FullName" required label="Full name employee" value={formInput.FullName} placeholder="Nguyễn Văn A" setInput={setFormInput}/>
                        <span style={{textAlign: "right", width: "100%"}}>{formInput.FullName.length}/255</span>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-left">       
                        <InputRow name="Address" required label="Address *" value={formInput.Address} placeholder="123, Cầu Giấy, Hà Nội" setInput={setFormInput}/>    
                        <InputRow name="Age" required label="Age employee *" value={formInput.Age} placeholder="18" type="number" setInput={setFormInput}/>
                        <InputRow name="MoneyHour" required label="Money/hour *" value={formInput.MoneyHour} placeholder="1000" type="number" setInput={setFormInput}/>                       
                    </div>
                    <div className="modal-right">
                        <SelectRow name="Sex" required label="Sex employee *" value={formInput.Sex} placeholder="" options={["Male", "Female"]} setInput={setFormInput}/>
                        <InputRow name="StartDate" required label="Start day *" value={formInput.StartDate} type="date" setInput={setFormInput}/>
                        <InputRow name="Phone" required label="Phone number *" value={formInput.Phone} placeholder="0123456789" type="number" setInput={setFormInput}/>
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