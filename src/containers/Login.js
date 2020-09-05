//Endpoint kirjautumiselle
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'

import './Login.css'

import loginService from '../services/login'
import expenseService from '../services/expense'
import incomeService from '../services/income'
import dailyBudgetService from '../services/dailybudget'

import Notification from '../components/Notification'

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
      console.log(user)
      window.localStorage.setItem('BudgetUser', JSON.stringify(user))
      incomeService.setToken(user.token)
      expenseService.setToken(user.token)
      dailyBudgetService.setToken(user.token)

      setUsername('')
      setPassword('')
      await userHasAuthenticated(true)
      history.push('/')
    } catch {}
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      <Notification />
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
