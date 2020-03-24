import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PostData from "../services/PostData";

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
  EuiTitle,
  EuiFieldText
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      oldPassword:'',
      newPassword:'',
      confirmPassword:''
    };
  }

  changePassword = () => {
    console.warn(this.state);
    PostData("changePassword", this.state)
      .then(result => {
        let responseJSON = result;
        console.log(responseJSON);
        if (result.message) {
          console.log(result);
          this.setState({ redirect: true });
        } else if (result.error) {
          console.log(result.error);
          alert(result.error);
        }
      })
      .catch(error => {
        alert(error.error);
      });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/login" />;
    }
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
                    label="Email"
                    name='email'
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  >
                    <EuiFieldText icon="email" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="Current Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ oldPassword: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="New Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ newPassword: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="Confirm Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ confirmPassword: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiSpacer />
                    <EuiButton type="submit" fill  onClick={() => {this.changePassword();}}>
                    Change-Password
                    </EuiButton>
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
