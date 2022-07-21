import { API_URL } from "../api-url"
import axios from 'axios'

const deleteEmployee = async(no) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'employees/delete/id=' + no,
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteEmployee