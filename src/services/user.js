import axios from 'axios'

let baseUrl = '/api/users'

const newUser = async (newUserObject) => {
  const response = await axios.post(baseUrl, newUserObject)
  return response.data
}

export default { newUser }
