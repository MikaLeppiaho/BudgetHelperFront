import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './App.css'

import Routes from './Routes'

import { useSelector, useDispatch } from 'react-redux'

import { initializeSettings } from './reducers/settingsReducer'

import incomeService from './services/setting'
import expenseService from './services/expense'
import dailyBudgetService from './services/dailybudget'

import { logout, setAuthenticated } from './reducers/authenticationReducer'

const App = () => {
  const isAuthenticated = useSelector((state) => state.authentication.loggedIn)
  const dispatch = useDispatch()
  //check if userdata is stored in localstorage and update state with the information
  useEffect(() => {
    console.log('LoginUseEffect')
    const loggedUserJSON = window.localStorage.getItem('BudgetUser')
    console.log('LoginUseEffect2', loggedUserJSON)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setAuthenticated(user))
      dispatch(initializeSettings())
    }
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
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
        <Routes />
      </Container>
      <footer>BudgetHelper, Mika Leppiaho 2020 </footer>
    </div>
  )
}

export default App
