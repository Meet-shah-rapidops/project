import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  EuiForm,
  EuiFormRow,
  EuiButton,
  EuiFieldPassword,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div
        className="changepasswordpage text-center"
        style={{ marginTop: "10%" }}
      >
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent
              verticalPosition="center"
              horizontalPosition="center"
            >
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle style={{ marginLeft: "7vh" }}>
                    <h2>Change Password</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>
                  <EuiFormRow
                    label="Current Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={this.onChange}
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="New Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={this.onChange}
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="Confirm Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={this.onChange}
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiSpacer />
                  <Link to="/login">
                    <EuiButton type="submit" fill>
                      send
                    </EuiButton>
                  </Link>
                </EuiForm>
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default ChangePassword;
