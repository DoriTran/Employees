import { API_URL } from "../api-url"
import axios from 'axios'

const deleteWorkingByEmployeeNo = async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'working/delete/profile=' + data.employeeNo + "/workingNo=" + data.workingNo,
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteWorkingByEmployeeNo