import { API_URL } from "../api-url"
import axios from 'axios'

const deleteAdvanceByEmployeeNo = async(data) => {
    let res = null
    console.log(data)
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'advance/delete/profile=' + data.employeeNo + "/advanceNo=" + data.advanceNo,
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteAdvanceByEmployeeNo