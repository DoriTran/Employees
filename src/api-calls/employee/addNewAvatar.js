import { API_URL } from "../api-url"
import axios from 'axios'

const addNewEmployee = async(formData) => {
    let res = null
    try {
        res = await axios({
            headers: { "Content-Type": "multipart/form-data" },
            method: 'post',
            url: API_URL + 'profile/avatar/employeeNo=' + formData.no,
            data: {file: formData.file}
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default addNewEmployee