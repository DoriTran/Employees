import { API_URL } from "../api-url"
import axios from 'axios'

const  updateEmployee = async(updateInfo) => {
    let res = null

    let newData = updateInfo.data
    newData.teamNo = parseInt(newData.teamNo)
    try {
        res = await axios({
            method: 'put',
            url: API_URL + 'employees/update/id=' + newData.no,
            data: { ...newData}
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default updateEmployee