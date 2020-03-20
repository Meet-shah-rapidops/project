import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPageComponent from "../components/Login";
// import AdminDashboardComponent from '../components/AdminComponents/AdminDashboradComponent';
// import StudentTableComponent from '../components/AdminComponents/StudentTableComponent';
// import SubjectsComponent from '../components/AdminComponents/SubjectsComponent';
// import AdminRoutingComponent from '../components/AdminComponents/AdminRoutingComponent';
import RegisterComponent from '../components/RegisterComponent';
import FacultyMainPage from '../components/Faculty/FacultyMainPage'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPageComponent />
      </Route>
      <Route exact path="/login">
        <LoginPageComponent />
      </Route>

      <Route exact path="/register">
        <RegisterComponent />
      </Route>

      {/* <AdminRoutingComponent /> */}
      <FacultyMainPage/>

      {/* Admin Routing
      <Route exact path="/adminDashboard">
        <AdminDashboardComponent />
      </Route>
      <Route exact path="/changepassword">
        <ChangePassword />
      </Route>

      <AdminRoutingComponent />
    </Switch>
  );
};

export default Routing;
