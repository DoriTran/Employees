import { API_URL } from "../api-url"
import axios from 'axios'

const getEmployeeByNo = async(EmployeeNo) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'employees/profile/id=' + EmployeeNo,
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default getEmployeeByNo