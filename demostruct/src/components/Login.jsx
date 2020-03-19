import React, { Component } from "react";
import { Link } from "react-router-dom";
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

class LoginPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  // onChange = e => {
  //   this.setState({
  //     value: e.target.value
  //   });
  // };

  login = () => {
    console.warn(this.state);
    fetch(
      "https://assignment-system.herokuapp.com/user/api/admin/login" +
        this.state.name
    ).then(data => {
      data.json().then(resp => {
        console.warn("resp", resp);
      });
    });
  };

  render() {
    return (
      <div className="LoginPage">
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent
              verticalPosition="center"
              horizontalPosition="center"
            >
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Sign In</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>
                  <EuiFormRow
                    label="Email"
                    value={this.state.value}
                    // onChange={this.onChange}
                    name="email"
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  >
                    <EuiFieldText icon="email" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="Password"
                    name="password"
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    // onChange={this.onChange}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiFormRow id="forgot">
                    <Link to="/forget">
                      <EuiLink id="link">Forgot password?</EuiLink>
                    </Link>
                  </EuiFormRow>

                  {/* <Link to="/adminDashboard"> */}
                  <EuiButton
                    type="submit"
                    fill
                    onClick={() => {
                      this.login();
                    }}
                  >
                    Login
                  </EuiButton>
                  {/* </Link> */}

                  <EuiFlexGroup id="register">
                    <EuiFormLabel id="label">Not registered?</EuiFormLabel>
                    <Link to="/register">
                      <EuiLink id="link">Create an account</EuiLink>
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

export default LoginPageComponent;
