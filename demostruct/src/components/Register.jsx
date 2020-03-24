import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PostData from "../services/PostData";

import {
  EuiForm,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiLink,
  EuiFlexGroup,
  EuiFormLabel
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeName: "",
      email: "",
      password: "",
      confirmPassword: "",
      redirect: false
    };
  }

  register = () => {
    console.warn(this.state);
    PostData("register", this.state)
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
      return <Redirect to="/checkotp" />;
    }

    return (
      <div className="RegisterPage">
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent
              verticalPosition="center"
              horizontalPosition="center"
            >
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Sign Up</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>
                  <EuiFormRow
                    label="College-Name"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ collegeName: event.target.value })
                    }
                  >
                    <EuiFieldText icon="user" />
                  </EuiFormRow>

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
                    label="Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>
                  <EuiFormRow
                    label="Confirm-Password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ confirmPassword: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>
                  <EuiSpacer />
                  {/* <Link to="/login"> */}
                  <EuiButton
                    type="submit"
                    fill
                    onClick={() => {
                      this.register();
                    }}
                  >
                    Register
                  </EuiButton>
                  {/* </Link> */}

                  <EuiFlexGroup id="login">
                    <EuiFormLabel id="label">Already registered?</EuiFormLabel>
                    <Link to="/login">
                      <EuiLink id="link">Login</EuiLink>
                    </Link>
                  </EuiFlexGroup>
                </EuiForm>
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default RegisterComponent;
