import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton,
    EuiIcon,
    EuiPageContentBody,
    EuiPageHeaderSection,
    EuiTitle,
    EuiPageHeader
  } from "@elastic/eui";

export class AdminHomepage extends Component {
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
            <div>
                 <EuiPageHeader>
                  <EuiPageHeaderSection>
                    <EuiTitle size="l">
                      <h1>Page title</h1>
                    </EuiTitle>
                  </EuiPageHeaderSection>
                  <EuiPageHeaderSection> </EuiPageHeaderSection>
                </EuiPageHeader> 
                  <EuiPageContentBody>
                    
                  <div className="cardsadmin">
                    <EuiFlexGroup style={{ width: "100%" }}>
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
                         <Link to='/adminDashboard/student'>
                            <EuiButton style={{width: '150%'}}>Add</EuiButton>
                        </Link>
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
                        <Link to ='/subject'>
                        <EuiButton style={{width: '150%'}}> Add</EuiButton></Link>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </div>
                    
                  </EuiPageContentBody>
            </div>
        )
    }
}

export default AdminHomepage;