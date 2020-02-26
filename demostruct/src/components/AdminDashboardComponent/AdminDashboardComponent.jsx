import React, { Component } from "react";
import SideBarComponent from "../SideBarComponent/SideBarComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { BrowserRouter, Route } from 'react-router-dom';

import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar
} from "@elastic/eui";
import AdminHomepage from "../AdminHomepage";
import StudentComponent from "../StudentComponent/StudentComponent";

export class AdminDashboardComponent extends Component {
 
  render() {
    return (
      <div className="admin">
        <BrowserRouter>
        <NavbarComponent/>
          <EuiPage>
              <EuiPageSideBar><SideBarComponent /></EuiPageSideBar>
              <EuiPageBody>

              <Route exact path="/adminDashboard" component={AdminHomepage} />
              <Route path="/adminDashboard/student" component={StudentComponent} />

              </EuiPageBody>
            </EuiPage>
            </BrowserRouter>
      </div>
    );
  }
}

export default AdminDashboardComponent;
