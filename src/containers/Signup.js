import React from 'react'
import SignupForm from '../forms/SignupForm'
import userService from '../services/user'

const Signup = () => {
  const createUser = async (userObject) => {
    console.log(userObject)
    await userService.newUser(userObject)
  }
  return (
    <div>
      <SignupForm createUser={createUser} />
    </div>
  )
}

export default Signup
