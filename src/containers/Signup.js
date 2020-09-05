import React from 'react'
import SignupForm from '../forms/SignupForm'
import './Signup.css'

const Signup = () => {
  return (
    <div className="Signup">
      <h2>Signup</h2>
      <SignupForm />
      <p>
        Any information collected from our users will not be sold, shared, or
        rented to others
      </p>
    </div>
  )
}

export default Signup
