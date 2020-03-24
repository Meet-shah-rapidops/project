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

class GetForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      redirect: false
    };
  }

  getForgotPasswordOtp = () => {
    console.warn(this.state);
    PostData("getForgotPasswordOtp", this.state)
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
      return <Redirect to="/forgetcheckotp" />;
    }
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
                    name='email'
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }>
                    <EuiFieldText icon="email" />
                  </EuiFormRow>
                  <EuiSpacer />
                  {/* <Link to="/login"> */}
                    <EuiButton type="submit" fill onClick={() => {this.getForgotPasswordOtp();}}>
                      send
                    </EuiButton>
                  {/* </Link> */}
                </EuiForm>
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default GetForgetPassword;
