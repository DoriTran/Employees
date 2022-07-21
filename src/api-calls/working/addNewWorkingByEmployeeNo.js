import { API_URL } from "../api-url"
import axios from 'axios'

const addNewWorkingByEmployeeNo = async(formData) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: API_URL + 'working/new',
            data: { ...formData}
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default addNewWorkingByEmployeeNo