import { API_URL } from "../api-url"
import axios from 'axios'

const addNewTeam = async(teamName) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: API_URL + 'teams/new',
            data: { teamName}
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default addNewTeam