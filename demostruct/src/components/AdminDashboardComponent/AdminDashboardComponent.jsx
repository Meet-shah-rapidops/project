import React, { Component } from "react";
import SideBarComponent from "../SideBarComponent/SideBarComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";

import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiIcon,
  EuiPage,
  EuiPageBody,
  // EuiPageContent,
  EuiPageContentBody,
  // EuiPageContentHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiPageHeader
  // EuiPageContentHeaderSection
} from "@elastic/eui";

export class AdminDashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false
    };
  }

  onButtonClick() {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false
    });
  }
  render() {
    return (
      <div className="admin">

          <EuiPage>
              <EuiPageSideBar><SideBarComponent /></EuiPageSideBar>
              <EuiPageBody>
                <EuiPageHeader>
                  <EuiPageHeaderSection>
                    <EuiTitle size="l">
                      <h1>Page title</h1>
                    </EuiTitle>
                  </EuiPageHeaderSection>
                  <EuiPageHeaderSection> <NavbarComponent /></EuiPageHeaderSection>
                </EuiPageHeader>
                {/* <EuiPageContent> */}
                  {/* <EuiPageContentHeader>
                    {/* <EuiPageContentHeaderSection>
                      <EuiTitle>
                        <h2>Content title</h2>
                      </EuiTitle>
                    </EuiPageContentHeaderSection> */}
                    {/* <EuiPageContentHeaderSection>
                      Content abilities
                    </EuiPageContentHeaderSection> */}
                  {/* </EuiPageContentHeader> */} 
                  <EuiPageContentBody>
                    
                  <div className="cardsadmin">
                    <EuiFlexGroup style={{ width: "50%" }}>
                      <EuiFlexItem className="card">
                        <EuiCard
                          // icon={<EuiIcon size="xxl" />}
                          icon={<EuiIcon type="user" size="xxl" />}
                          title={`Faculty`}
                          onClick={() => window.alert("Card clicked")}
                        />
                        <EuiButton href="">Add</EuiButton>
                      </EuiFlexItem>
                      <EuiFlexItem className="card">
                        <EuiCard
                          icon={
                            <span>
                              <i class="fas fa-user-graduate"></i>
                            </span>
                          }
                          title={`Student`}
                          onClick={() => window.alert("Card clicked")}
                        />
                        <EuiButton href="/student">Add</EuiButton>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                    <br />
                    <EuiFlexGroup style={{ width: "50%" }}>
                      <EuiFlexItem className="card">
                        <EuiCard
                          icon={<EuiIcon type="notebookApp" size="xxl" />}
                          title={`Subject`}
                          onClick={() => window.alert("Card clicked")}
                        />
                        <EuiButton href="">Add</EuiButton>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </div>
                    
                  </EuiPageContentBody>
                {/* </EuiPageContent> */}
              </EuiPageBody>
            </EuiPage>
      </div>
    );
  }
}

export default AdminDashboardComponent;
