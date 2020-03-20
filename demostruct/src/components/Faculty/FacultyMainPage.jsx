import React, { Component } from 'react'
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
} from '@elastic/eui'
import NavbarComponent from '../NavbarComponent'
import SideBarComponent from '../SideBarComponent'
import FacultyDashboard from './FacultyDashboard'
import FacultySubjects from './FacultySubjects';

export class FacultyMainPage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <NavbarComponent />
                <EuiPage>
                    <EuiPageSideBar><SideBarComponent /></EuiPageSideBar>
                    <EuiPageBody>
                        
                            <Switch>
                                <Route exact path="/facultyDashboard" component={FacultyDashboard} />
                                <Route exact path="/facultyDashboard/subjects" component={FacultySubjects} />
                                <Route exact path="/facultyDashboard/profile" component={FacultyProfile} />
                                <Route exact path="/facultyDashboard/editprofile" component={FacultyEditProfile} />
                                <Route exact path="/facultyDashboard/assignment" component={Assignmet} />
                                <Route exact path="/facultyDashboard/viewassignment" component={ViewAssignment} />
                                <Route exact path="/facultyDashboard/addassignment" component={AddAssignment} />
                                <Route exact path="/facultyDashboard/addtest" component={AddTest} />
                                <Route exact path="/facultyDashboard/forum" component={Forum} />                                <Route exact path="/facultyDashboard/profile" component={FacultyProfile} />

                            </Switch>
                        
                    </EuiPageBody>
                </EuiPage>
                </BrowserRouter>
            </div>
        )
    }
}

export default FacultyMainPage;
