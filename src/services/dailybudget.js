//Endpoint päivittäisen budgetin hakemiseen

import axios from 'axios'

const baseUrl = 'http://localhost:3005/api/dailybudget'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getDailyBudget = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const updateDailyBudget = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const request = await axios.put(baseUrl, config)
  return request.data
}

export default {
  setToken,
  getDailyBudget,
  updateDailyBudget
}
