import axios from 'axios'

let baseUrl = 'http://localhost:3005/api/budgetsettings'
//let baseUrl = '/api/budgetsettings'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getBudgetSetting = async () => {
  const config = {
    headers: { Authorization: token }
  }

  console.log(`getBudgetSetting: ${baseUrl}, ${JSON.stringify(config)}`)

  const request = await axios.get(baseUrl, config)
  console.log('requ: ', request)
  return request.data
}

const postBudgetSetting = async (budgetSetting) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = axios.post(baseUrl, budgetSetting, config)
  return response.data
}

export default {
  setToken,
  postBudgetSetting,
  getBudgetSetting
}
