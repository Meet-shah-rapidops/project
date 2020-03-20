import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PostData from "../services/PostData";

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
export class ResendOtp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      forEmailVerify: "y",
      redirect: false
    };
  }

  // onChange = e => {
  //   this.setState({
  //     value: e.target.value
  //   });
  // };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent
              verticalPosition="center"
              horizontalPosition="center"
            >
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Check-Otp</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>
                  <EuiFormRow
                    label="Email"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  >
                    <EuiFieldText icon="email" />
                  </EuiFormRow>

                  <EuiFormRow label="forEmailVerify">
                    <EuiFieldText
                      icon="email"
                      value="Y"
                      placeholder="Y"
                      readOnly
                    />
                  </EuiFormRow>

                  <EuiSpacer />

                  <EuiButton
                    type="submit"
                    fill
                    onClick={() => {
                      this.checkOtp();
                    }}
                  >
                    Send
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

export default ResendOtp;
