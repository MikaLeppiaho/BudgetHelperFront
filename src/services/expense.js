//Kuukausittaisen kulujen ylläpito
import axios from 'axios'

let baseUrl = 'http://localhost:3005/api/expenses'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const addNewExpense = async (newExpense) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newExpense, config)
  return response.data
}

const removeExpense = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default {
  setToken,
  addNewExpense,
  removeExpense
}
