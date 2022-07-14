import "./AddNewEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import { useState } from "react"

const AddNewTeamModal = (props) => {
    const submitHandler = () => {
        props.onBackdropClick()
        props.setTeams(teams => [...teams, newTeam])
    }

    const [newTeam, setNewTeam] = useState("")
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Add new Employee</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="notObject" required label="Team Name" placeholder="Engineer" setInput={setNewTeam}/>
                        <span style={{textAlign: "right", width: "100%"}}>{newTeam.length}/255</span>
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
                        onClick={() => submitHandler()}
                        >
                            {false ? <CircularProgress size={'25px'}/> :'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default AddNewTeamModal