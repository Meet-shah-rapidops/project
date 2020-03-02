import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaUserTie, FaBook } from "react-icons/fa";

import {
  EuiPageContentBody,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton
} from "@elastic/eui";

class AdminDashboardComponent extends Component {
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
       
            <EuiPageContentBody>
              <EuiFlexGroup style={{ width: "100%" }}>
                <EuiFlexItem className="card">
                  <EuiCard
                    // icon={<EuiIcon size="xxl" />}
                    icon={<FaUserTie size={70} />}
                    title={`Faculty`}
                    onClick={() => window.alert("Card clicked")}
                  />
                  <EuiButton href="">Add</EuiButton>
                </EuiFlexItem>
                <EuiFlexItem className="card">
                  <EuiCard
                    icon={<FaUsers size={70} />}
                    title={`Student`}
                    onClick={() => window.alert("Card clicked")}
                  />
                  <Link to="/adminDashboard/student">
                    <EuiButton style={{ width: "150%" }}>Add</EuiButton>
                  </Link>
                </EuiFlexItem>
              </EuiFlexGroup>
              <br />
              <EuiFlexGroup style={{ width: "50%" }}>
                <EuiFlexItem className="card">
                  <EuiCard
                    icon={<FaBook size={70} />}
                    title={`Subject`}
                    onClick={() => window.alert("Card clicked")}
                  />
                  <Link to="/adminDashboard/subject">
                    <EuiButton style={{ width: "150%" }}> Add</EuiButton>
                  </Link>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>
      </div>
    );
  }
}

export default AdminDashboardComponent;
