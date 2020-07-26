import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import SignIn from './pages/SignIn/index'
import NewNote from './pages/NewNote/index';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/user/signin" component={SignIn} />
                <Route path="/user/:userId" component={Home} />
                <Route path="/:userId/creation" component={NewNote}/>
            </Switch>

        </Router>)

}