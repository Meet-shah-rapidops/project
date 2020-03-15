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
import { EuiSpacer } from "@elastic/eui";

class RegisterComponent extends Component {
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

      <div className="RegisterPage">
      <EuiPage>
        <EuiPageBody>
          <EuiPageContent verticalPosition="center" horizontalPosition="center">
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>Sign Up</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiForm style={{ width: 350 }}>
                
              <EuiFormRow label="Username" value={this.state.value} onChange={this.onChange}>
                  <EuiFieldText icon="user" />
                </EuiFormRow>

                <EuiFormRow label="Email" value={this.state.value} onChange={this.onChange}>
                  <EuiFieldText icon="email" />
                </EuiFormRow>

                <EuiFormRow label="Password" helpText="Must include one number and one symbol" value={this.state.value} onChange={this.onChange}>
                  <EuiFieldPassword icon="lock" />
                </EuiFormRow>
            <EuiSpacer/>
                <Link to="/adminDashboard">
                  <EuiButton type="submit" fill>
                    Register
                </EuiButton>
                </Link>

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
    </div >
    );
  }
}

export default RegisterComponent;
