//Endpoint kirjautumiselle
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'

import loginService from '../services/login'
import expenseService from '../services/expense'
import incomeService from '../services/income'

import { useAppContext } from '../libs/contextLib'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { userHasAuthenticated } = useAppContext()

  const history = useHistory()

  const validateForm = () => {
    return username.length > 0 && password.length
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    

    try {
      
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('BudgetUser', JSON.stringify(user))
      incomeService.setToken(user.token)
      expenseService.setToken(user.token)
      setUsername('')
      setPassword('')
      history.push('/')
      await userHasAuthenticated(true)
    } catch {
      
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <FormGroup controlId="username">
          <FormLabel>username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
