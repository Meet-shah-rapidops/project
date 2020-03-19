import React, { Component } from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar
} from "@elastic/eui";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { Route } from "react-router-dom";
import AdminDashboardComponent from "../AdminComponents/AdminDashboard";
import StudentData from "../AdminComponents/StudentData";
import SubjectData from "../AdminComponents/SubjectData";
import FacultyData from "../AdminComponents/FacultyData";

class AdminRoutingComponent extends Component {
  render() {
    return (
      <div className="adminRouting">
        <NavbarComponent />

        <EuiPage className="body" style={{ padding: "0px" }}>
          <EuiPageSideBar style={{ marginRight: "0px" }}>
            <SideBarComponent />
          </EuiPageSideBar>
          <EuiPageBody style={{ padding: "20px" }}>
            <EuiPageHeader></EuiPageHeader>
            {/* <EuiPageContent> */}

            <EuiPageContentBody>
              <Route exact path="/adminDashboard">
                <AdminDashboardComponent />
              </Route>
              <Route exact path="/adminDashboard/student">
                <StudentData />
              </Route>
              <Route exact path="/adminDashboard/subject">
                <SubjectData />
              </Route>
              <Route exact path="/adminDashboard/faculty">
                <FacultyData />
              </Route>
            </EuiPageContentBody>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default AdminRoutingComponent;
