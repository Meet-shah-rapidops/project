import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPageComponent from "../components/Login";
import AdminRoutingComponent from "../components/AdminComponents/AdminRouting";
import RegisterComponent from "../components/Register";
import GetForgetPassword from "../components/GetForgetPassword";
import ChangePassword from "../components/ChangePassword";
import CheckOtp from "../components/CheckOtp";
import ForgetPassword from "../components/ForgetPassword";
import ForgetCheckOtp from "../components/ForgetCheckOtp";

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

      <Route exact path="/getforget">
        <GetForgetPassword />
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
      <Route exact path="/forgetcheckotp">
        <ForgetCheckOtp />
      </Route>
     

      <AdminRoutingComponent />
    </Switch>
  );
};

export default Routing;
