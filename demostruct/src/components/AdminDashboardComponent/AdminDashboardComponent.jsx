import React, { Component } from "react";
import SideBarComponent from "../SideBarComponent/SideBarComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { BrowserRouter, Route } from 'react-router-dom';

import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle
} from "@elastic/eui";
import AdminHomepage from "../AdminHomepage";
import StudentComponent from "../StudentComponent/StudentComponent";
import SubjectComponent from "../SubjectComponent/SubjectComponent";

export class AdminDashboardComponent extends Component {
 
  render() {
    return (
      <div className="admin">
        <BrowserRouter>

          <EuiPage>
            <EuiPageSideBar>
              <SideBarComponent />
            </EuiPageSideBar>
            <EuiPageBody>
            <EuiPageHeader>
              <EuiPageHeaderSection>
                <EuiTitle size="l">
                <NavbarComponent/>
                </EuiTitle>
              </EuiPageHeaderSection>
            </EuiPageHeader>

              <Route exact path="/adminDashboard" component={AdminHomepage} />
              <Route path="/adminDashboard/student" component={StudentComponent} />
              <Route path="/adminDashboard/subject" component={SubjectComponent} />

            </EuiPageBody>
          </EuiPage>
          </BrowserRouter>
      </div>
    );
  }
}

export default AdminDashboardComponent;
