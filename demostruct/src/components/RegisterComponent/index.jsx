import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    EuiForm,
    EuiFlexGroup,
    EuiFlexItem,
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
    EuiButtonEmpty
} from '@elastic/eui';
import { EuiFormLabel } from '@elastic/eui';
import { EuiLink } from '@elastic/eui';

class RegisterComponent extends Component {
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

                                    <EuiFormRow label="Username">
                                        <EuiFieldText icon="user" placeholder="John" />
                                    </EuiFormRow>

                                    <EuiFormRow label="Email">
                                        <EuiFieldText icon="email" />
                                    </EuiFormRow>

                                    <EuiFormRow label="Password" helpText="Must include one number and one symbol">
                                        <EuiFieldPassword icon="lock" />
                                    </EuiFormRow>

                                    <EuiFormRow label="Confirm Password" helpText="Must include one number and one symbol">
                                        <EuiFieldPassword icon="lock" />
                                    </EuiFormRow>

                                    <Link to="/login">
                                        <EuiButton id="registerBtn" type="submit" fill onClick={() => window.alert('Button clicked')}>
                                            Register
                                        </EuiButton>
                                    </Link>

                                    <EuiFlexGroup id="login">
                                        <EuiFormLabel id="label">Already have an account?</EuiFormLabel>
                                        <Link to="/login">
                                            <EuiLink id="link">Log in</EuiLink>
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
