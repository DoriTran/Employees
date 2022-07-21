import { API_URL } from "../api-url"
import axios from 'axios'

const deleteSelectedEmployee = async(arr) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'employees/delete/allByArrId',
            data: arr
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteSelectedEmployee