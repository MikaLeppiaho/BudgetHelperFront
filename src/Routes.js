import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import Login from './containers/Login'
import Settings from './containers/Settings'
import Signup from './containers/Signup'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes
