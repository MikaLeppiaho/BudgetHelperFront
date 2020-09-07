import axios from 'axios'

let baseUrl = 'http://localhost:3005/api/users'
//let baseUrl = '/api/users'

const newUser = async (newUserObject) => {
  const response = await axios.post(baseUrl, newUserObject)
  return response.data
}

export default { newUser }
