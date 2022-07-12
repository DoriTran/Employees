import "./AddNewEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../../Modal/Modal'
import InputRow from "../../Modal/InputRow"
import SelectRow from "../../Modal/SelectRow"
import { useEffect, useState } from "react"

const AddNewEmployeeModal = (props) => {
    const submitHandler = () => {
        console.log(formInput)
    }

    const [formInput, setFormInput] = useState(
        {fullname: "", 
        address: "", age: "", moneyhour: "",
        sex: "Male", startday: "", phone: ""})

    useEffect(() => {
        console.log(formInput);
    }, [formInput, formInput.fullname])
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
        <div className="modal-header">Add new Employee</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="fullname" required label="Full name employee" placeholder="Nguyễn Văn A" setInput={setFormInput}/>
                        <span style={{textAlign: "right", width: "100%"}}>{formInput.fullname.length}/255</span>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-left">       
                        <InputRow name="address" required label="Address *" placeholder="123, Cầu Giấy, Hà Nội" setInput={setFormInput}/>    
                        <InputRow name="age" required label="Age employee *" placeholder="Nguyễn Văn A" type="number" setInput={setFormInput}/>
                        <InputRow name="moneyhour" required label="Money/hour *" type="number" setInput={setFormInput}/>                       
                    </div>
                    <div className="modal-right">
                        <SelectRow name="sex" required label="Sex employee *" placeholder="" options={["Male", "Female"]} setInput={setFormInput}/>
                        <InputRow name="startday" required label="Start day *" type="date" setInput={setFormInput}/>
                        <InputRow name="phone" required label="Phone number *" type="number" setInput={setFormInput}/>
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