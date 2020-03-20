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

class CheckOtp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
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

  checkOtp = () => {
    console.warn(this.state);
    PostData("checkOtp", this.state)
      .then(result => {
        let responseJSON = result;
        console.log(responseJSON);
        if (result.message) {
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

  resendOtp = () => {
    console.warn(this.state);
    PostData("resendOtp", this.state)
      .then(result => {
        let responseJSON = result;
        console.log(responseJSON);
        // this.setState({ redirect: true });
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
      <div className="">
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
                    label="Enter-Otp"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ otp: event.target.value })
                    }
                  >
                    <EuiFieldText />
                  </EuiFormRow>

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

                  <EuiButton
                    type="submit"
                    fill
                    onClick={() => {
                      this.resendOtp();
                    }}
                  >
                    Resend-otp
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

export default CheckOtp;
