import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  EuiForm,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class ForgetPassword extends Component {
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
      <div className="forgetpage text-center" style={{ marginTop: "10%" }}>
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent
              verticalPosition="center"
              horizontalPosition="center"
            >
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle style={{ marginLeft: "7vh" }}>
                    <h2>Forget Password</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>
                  <EuiFormRow
                    label="Email"
                    value={this.state.value}
                    onChange={this.onChange}
                  >
                    <EuiFieldText icon="email" />
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

export default ForgetPassword;
