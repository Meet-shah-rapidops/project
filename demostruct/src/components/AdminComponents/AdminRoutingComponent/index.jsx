import React, { Component } from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar
} from "@elastic/eui";
import NavbarComponent from "../../NavbarComponent";
import SideBarComponent from "../../SideBarComponent";
import { Route } from "react-router-dom";
import AdminDashboardComponent from "../AdminDashboradComponent";
import StudentTableComponent from "../StudentTableComponent";
import SubjectsComponent from "../SubjectsComponent";
class AdminRoutingComponent extends Component {
  render() {
    return (
      <div className="">


        <NavbarComponent />

        <EuiPage>
          <EuiPageSideBar>
            <SideBarComponent />
          </EuiPageSideBar>
          <EuiPageBody>
            <EuiPageHeader>
            </EuiPageHeader>
            {/* <EuiPageContent> */}

            <EuiPageContentBody>
              <Route exact path="/adminDashboard">
                <AdminDashboardComponent />
              </Route>
              <Route exact path="/adminDashboard/student">
                <StudentTableComponent />
              </Route>
              <Route exact path="/adminDashboard/subject">
                <SubjectsComponent />
              </Route>
            </EuiPageContentBody>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default AdminRoutingComponent;
