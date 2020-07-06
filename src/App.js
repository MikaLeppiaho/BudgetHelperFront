import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Container from '@material-ui/core/Container'

import AppHome from './AppHome'
import Settings from './settings'

import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"



const App = () => {
    const padding = {
        padding: 5
      }
    
      return (
        <Container maxWidth="sm">
            <Router>
            <div>
                <Link style={padding} to="/">home</Link>
                <Link style={padding} to="/settings">settings</Link>
            </div>
        
            <Switch>
                <Route path="/settings">
                <Settings />
                </Route>
                <Route path="/">
                <AppHome />
                </Route>
            </Switch>
        
            <div style ={{bottom: "0", position:"fixed"}}>
                <i>BudgetHelper, Mika Leppiaho 2020</i>
            </div>
            </Router>
        </Container>
        
        
        
      )
}

export default App