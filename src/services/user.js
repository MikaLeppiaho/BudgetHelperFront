import axios from 'axios'
const baseUrl = '/api/users'

const newUser = async (newUserObject) => {
  const response = await axios.post(baseUrl, newUserObject)
  return response.data
}

export default { newUser }
