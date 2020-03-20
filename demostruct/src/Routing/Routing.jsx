import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPageComponent from "../components/Login";
// import AdminDashboardComponent from '../components/AdminComponents/AdminDashboradComponent';
// import StudentTableComponent from '../components/AdminComponents/StudentTableComponent';
// import SubjectsComponent from '../components/AdminComponents/SubjectsComponent';
import AdminRoutingComponent from "../components/AdminComponents/AdminRouting";
import RegisterComponent from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import ChangePassword from "../components/ChangePassword";
import CheckOtp from "../components/CheckOtp";
import ResendOtp from "../components/ResendOtp";

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

      <Route exact path="/forget">
        <ForgetPassword />
      </Route>
      <Route exact path="/changepassword">
        <ChangePassword />
      </Route>
      <Route exact path="/checkotp">
        <CheckOtp />
      </Route>
      <Route exact path="/resendotp">
        <ResendOtp />
      </Route>

      <AdminRoutingComponent />
    </Switch>
  );
};

export default Routing;
