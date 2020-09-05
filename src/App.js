import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './App.css'

import Routes from './Routes'
import { AppContext } from './libs/contextLib'

import incomeService from './services/income'
import expenseService from './services/expense'
import dailyBudgetService from './services/dailybudget'
import Notification from './components/Notification'

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('BudgetUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      userHasAuthenticated(true)
      incomeService.setToken(user.token)
      expenseService.setToken(user.token)
      dailyBudgetService.setToken(user.token)
    }
  }, [])

  const handleLogout = () => {
    userHasAuthenticated(false)
    window.localStorage.removeItem('BudgetUser')
  }

  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand>
          <Link to="/">Budget Helper</Link>
        </Navbar.Brand>

        <Nav className="container-fluid">
          {isAuthenticated ? (
            <>
              <LinkContainer to="/settings">
                <Nav.Item>
                  <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav.Item>
              </LinkContainer>
              <Button className="ml-auto" onClick={handleLogout}>
                {' '}
                Logout{' '}
              </Button>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Item className="ml-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar>
      <Container fluid>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </Container>
      <footer>BudgetHelper, Mika Leppiaho 2020 </footer>
    </div>
  )
}

export default App
