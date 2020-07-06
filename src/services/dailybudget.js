import axios from 'axios'
const baseUrl = 'http://localhost:3005/api/dailybudget'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getDailyBudget = async () => {
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.get(baseUrl, config)
    return response.data
}

const updateDailyBudget = async (id, newObject) => {
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}

export default {
    setToken,
    getDailyBudget,
    updateDailyBudget
    
}