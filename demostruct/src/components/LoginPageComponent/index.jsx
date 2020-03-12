import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
      // <div className="bg-image">
      //   <div className="LoginPage">
      //     <h1 className="loginName">Login Here</h1>
      //     <EuiFieldText
      //       className="email"
      //       compressed
      //       placeholder="Enter your email"
      //       value={this.state.value}
      //       onChange={this.onChange}
      //       aria-label="Use aria labels when no actual label is in use"
      //     />
      //     <EuiFieldPassword
      //       className="password"
      //       compressed
      //       placeholder="Enter your password"
      //       value={this.state.value}
      //       onChange={this.onChange}
      //       aria-label="Use aria labels when no actual label is in use"
      //     />
      //     <Link to="/adminDashboard">
      //       <EuiButton className="loginBtn">Login</EuiButton>
      //       <br />
      //     </Link>

      //     {/* <a href= '#'>Forget Password</a> */}
      //     <EuiLink color="secondary" href="#">
      //       Forget Password
      //     </EuiLink>
      //   </div>
      // </div>
      <div className="LoginPage">
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent verticalPosition="center" horizontalPosition="center">
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Sign In</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>

                  <EuiFormRow label="Email" value={this.state.value} onChange={this.onChange}>
                    <EuiFieldText icon="email" />
                  </EuiFormRow>

                  <EuiFormRow label="Password" helpText="Must include one number and one symbol" value={this.state.value} onChange={this.onChange}>
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>

                  <EuiFormRow id="forgot">
                    <EuiLink id="link">Forgot password?</EuiLink>
                  </EuiFormRow>

                  <Link to="/adminDashboard">
                    <EuiButton type="submit" fill onClick={() => window.alert('Button clicked')}>
                      Login
                  </EuiButton>
                  </Link>

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
      </div >
    );
  }
}

export default LoginPageComponent;
