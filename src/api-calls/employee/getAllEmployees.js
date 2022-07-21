import { API_URL } from "../api-url"
import axios from 'axios'

const getAllEmployees = async() => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'employees/all',
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default getAllEmployees