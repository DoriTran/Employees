import "./AddNewEmployeeModal.scss"
import { Button } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import { useState, useEffect } from "react"
import { useMutation } from "react-query"
import addNewWorkingByEmployeeNo from "../../api-calls/working/addNewWorkingByEmployeeNo"

const AddWorkingModal = (props) => {
    // Form control
    const [formInput, setFormInput] = useState(() => {
        return {date: new Date().toISOString().substring(0, 10), hour: "0", employeeNo: props.no }
    })

    // Submit handler
    const mutateNewWorking = useMutation(addNewWorkingByEmployeeNo)

    useEffect(()=>{
        if (mutateNewWorking.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateNewWorking.isSuccess])
    
    const submitHandler = e => {
        e.preventDefault()
        mutateNewWorking.mutate(formInput)
    }
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Add new Working Date</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">       
                        <InputRow name="date" required label="Date *" type="date" 
                            value={formInput.date} setInput={setFormInput}/>    
                        <InputRow name="hour" required label="Hour *" type="number"
                            value={formInput.hour} setInput={setFormInput} handleInput={input => {
                                if (input > 24) return 24
                                else return input
                            }}/>                    
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

export default AddWorkingModal