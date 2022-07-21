import { API_URL } from "../api-url"
import axios from 'axios'

const getAllTeams = async() => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'teams/all',
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default getAllTeams