import "./AddNewEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../Modal/Modal'
import FileRow from "../Modal/FileRow"
import { useState, useEffect } from "react"
import { useMutation } from "react-query"
import addNewAvatar from "../../api-calls/employee/addNewAvatar"

const UploadAvatarModal = (props) => {
    // Form control
    const [avatar, setAvatar] = useState(undefined)

    // Submit handler
    const mutateNewAvatar= useMutation(addNewAvatar)

    useEffect(()=>{
        if (mutateNewAvatar.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateNewAvatar.isSuccess])
    
    const submitHandler = e => {
        e.preventDefault()
        console.log({file: avatar, no: props.no})
        mutateNewAvatar.mutate({file: avatar, no: props.no})
    }

    useEffect(() => { console.log(avatar) }, [avatar])
    
    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Upload new avatar</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <FileRow name="notObject" required type="file" setInput={setAvatar}/>                      
                    </div>
                </div>
                <div className="modal-button-group">
                    <Button disabled={mutateNewAvatar.isLoading }
                        variant="contained" 
                        style={{backgroundColor:"transparent", color:"black"}} onClick={props.onBackdropClick}>
                            Cancel
                    </Button>
                    <Button disabled={mutateNewAvatar.isLoading }
                        variant="contained" style={{backgroundColor:"#ededed", marginLeft:"5px", color:"black"}} type="submit">
                        {mutateNewAvatar.isLoading ? <CircularProgress size={'25px'}/> :'Upload'}
                    </Button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default UploadAvatarModal