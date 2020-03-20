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

class LoginPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  login = () => {
    console.warn(this.state);
    PostData("login", this.state)
      .then(result => {
        let responseJSON = result;
        console.log(responseJSON);
        if (result.message) {
          localStorage.setItem("login", JSON.stringify(responseJSON));
          console.log(result);
          this.setState({ redirect: true });
        } else if (result.error) {
          console.log(result.error);
        }
      })
      .catch(error => {
        alert(error.error);
      });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/adminDashboard" />;
    }
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

                  <EuiButton
                    type="submit"
                    fill
                    onClick={() => {
                      this.login();
                    }}
                  >
                    Login
                  </EuiButton>

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
