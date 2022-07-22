import "./AddNewEmployeeModal.scss"
import { Button } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import { useState, useEffect } from "react"
import { useMutation } from "react-query"
import addNewAdvanceByEmployeeNo from "../../api-calls/advance/addNewAdvanceByEmployeeNo"

const AddAdvanceModal = (props) => {
    // Form control
    const [formInput, setFormInput] = useState(() => {
        return {date: new Date().toISOString().substring(0, 10), money: "0$", employeeNo: props.no }
    })

    // Submit handler
    const mutateNewAdvance = useMutation(addNewAdvanceByEmployeeNo)

    useEffect(()=>{
        if (mutateNewAdvance.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateNewAdvance.isSuccess])

    const [warningDate, setWarningDate] = useState("")

    const validateInput = () => {
        let valid = true
        if (props.isDateExists(formInput.date)) {
            setWarningDate(" Working date exists")
            valid = false
        }
        else setWarningDate("")
           
        return valid
    }

    const submitHandler = e => {
        e.preventDefault()
        // Validate
        if (validateInput()) {
            if (!formInput.money.endsWith("$")) {
                mutateNewAdvance.mutate({...formInput, money: formInput.money + "$"})
            }
            else mutateNewAdvance.mutate(formInput)
        }
    }
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Add new Advance Date</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="date" required label="Date *" type="date" warning={warningDate}
                            value={formInput.date} setInput={setFormInput}/>    
                        <InputRow name="money" required label="Money *" 
                            value={formInput.money} setInput={setFormInput} regex="^[0-9]*([0-9]|[$]){0,1}$"/>                    
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