import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./containers/Home"
import NotFound from "./containers/NotFound"
import Login from "./containers/Login"
import Settings from "./containers/Settings"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>

            <Route><NotFound /></Route>
        </Switch>
    )
}

export default Routes