import React from 'react'
import { Switch, Route } from 'react-router-dom';

import LoginPageComponent from '../components/LoginPageComponent/LoginPageComponent';
import SignupPageComponent from '../components/SignupPageComponent/SignupPageComponent';
import HomePageComponent from '../components/HomePageComponent/HomePageComponent';
import AdminDashboardComponent from '../components/AdminDashboardComponent/AdminDashboardComponent';


const Routing = () => {
    return (
        
        <Switch>
            <Route exact path='/'>
                <HomePageComponent />
            </Route>
            <Route exact path="/login">
                <LoginPageComponent />
            </Route>
            <Route exact path="/signup">
                <SignupPageComponent />
            </Route>
            <Route exact path="/adminDashboard">
                <AdminDashboardComponent />
            </Route>
        </Switch>
    )
}

export default Routing;