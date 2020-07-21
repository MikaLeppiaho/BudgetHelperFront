import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {  Nav, Navbar, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './App.css'

import Routes from './Routes'
import { AppContext } from './libs/contextLib'





const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('BudgetUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      userHasAuthenticated(true)
  
    }
  }, [])
  
  const handleLogout = () => {
    userHasAuthenticated(false);
    window.localStorage.removeItem('BudgetUser')
  }
  


  return (
    <div>
        <Navbar bg="light">
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>


            <Nav className="container-fluid" >
              {isAuthenticated
                ? <Button className="ml-auto" onClick={handleLogout}> Logout </Button>
                : <>
                  <LinkContainer to="/signup">
                    <Nav.Item className="ml-auto">
                      <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Item>
                      <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                  </>
              }
            </Nav>

        </Navbar>
     
      

      <Container>
        <AppContext.Provider value={{isAuthenticated, userHasAuthenticated}}>
        <Routes />
        </AppContext.Provider>
      </Container>
    
    </div>
     
     
  )
}

export default App