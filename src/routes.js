import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Login from './pages/Login/index';
import Home from './pages/Home/index';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/user/:userId" component={Home} />
            </Switch>

        </Router>)

}