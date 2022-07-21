import { API_URL } from "../api-url"
import axios from 'axios'

const getAllEmployeesByTeamNo = async(teamNo) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'employees/team=' + teamNo,
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default getAllEmployeesByTeamNo