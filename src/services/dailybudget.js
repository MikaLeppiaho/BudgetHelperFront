//Endpoint päivittäisen budgetin hakemiseen
import axios from 'axios'

let baseUrl = 'http://localhost:3005/api/dailybudget'
//let baseUrl = '/api/dailybudget'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getDailyBudget = async () => {
  const config = {
    headers: { Authorization: token }
  }
  console.log(`getDailyBudget: ${baseUrl}, ${JSON.stringify(config)}`)
  const response = await axios.get(baseUrl, config)
  return response.data
}

const updateDailyBudget = async (data, id) => {
  const config = {
    headers: { Authorization: token }
  }
  const request = await axios.put(`${baseUrl}/${id}`, data, config)
  return request.data
}

export default {
  setToken,
  getDailyBudget,
  updateDailyBudget
}
