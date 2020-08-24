import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import SignUp from './pages/SignUp/index'
import NewNote from './pages/NewNote/index';
import UpdateNote from './pages/UpdateNote/index'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/user/signup" component={SignUp} />
                <Route path="/user/:userId" component={Home} />
                <Route path="/:userId/creation" component={NewNote}/>
                <Route path="/:noteId/update" component={UpdateNote} />

            </Switch>

        </Router>)

}