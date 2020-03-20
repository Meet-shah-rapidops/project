import React, { Component } from 'react'
import moment from 'moment';
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiDatePicker,
    EuiSelect,
    EuiPanel,
    EuiFlexGrid,
    EuiFlexItem,
} from '@elastic/eui';

export class FacultyEditProfile extends Component {

    constructor(props) {
        super(props);

        this.gender = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_male', text: 'Male' },
            { value: 'option_female', text: 'Female' },
        ];

        this.bloodGroup = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_one', text: 'A+' },
            { value: 'option_two', text: 'A-' },
            { value: 'option_three', text: 'B+' },
            { value: 'option_four', text: 'B-' },
            { value: 'option_five', text: 'O+' },
            { value: 'option_six', text: 'O-' },
            { value: 'option_seven', text: 'AB+' },
            { value: 'option_eight', text: 'AB-' },
        ];

        this.maritalStatus = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_single', text: 'Single' },
            { value: 'option_married', text: 'Married' },
        ];

        this.physicallyHandicapped = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_yes', text: 'Yes' },
            { value: 'option_no', text: 'No' },
        ];

        this.state = {
            startDate: moment(),
            gender: this.gender[0].value,
            bloodGroup: this.bloodGroup[0].value,
            maritalStatus: this.maritalStatus[0].value,
            physicallyHandicapped: this.physicallyHandicapped[0].value,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }

    onChangeGender = e => {
        this.setState({
            gender: e.target.value,
        });
    };

    onChangeBloodGroup = e => {
        this.setState({
            bloodGroup: e.target.value,
        });
    };

    onChangeMaritalStatus = e => {
        this.setState({
            maritalStatus: e.target.value,
        });
    };

    onChangePhysicallyHandicapped = e => {
        this.setState({
            physicallyHandicapped: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Edit Profile</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>

                {/* Edit Profile Form */}

                <EuiFlexGrid gutterSize='l'>
                    <EuiFlexItem grow={true}>
                        <EuiPanel betaBadgeLabel='General Information' className='mt-2' hasShadow={true} style={{ 'max-height': '740px', 'min-width': '400px' }}>

                            {/* ---------- General Information ---------- */}

                            <EuiForm>
                                <EuiFormRow label="First Name" size="l">
                                    <EuiFieldText name="firstname" isInvalid='' />
                                </EuiFormRow>
                                <EuiFormRow label="Middle Name">
                                    <EuiFieldText name="middlename" isInvalid='' />
                                </EuiFormRow>
                                <EuiFormRow label="Last Name">
                                    <EuiFieldText name="lastname" isInvalid='' />
                                </EuiFormRow>
                                <EuiFormRow label="Date of Birth">
                                    <EuiDatePicker
                                        dateFormat="DD/MM/YYYY"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                    />
                                </EuiFormRow>
                                <EuiFormRow label="Gender">
                                    <EuiSelect
                                        id="gender"
                                        options={this.gender}
                                        value={this.state.value}
                                        onChange={this.onChangeGender}
                                    />
                                </EuiFormRow>
                                <EuiFormRow label="Blood Group">
                                    <EuiSelect
                                        id="bloodGroup"
                                        options={this.bloodGroup}
                                        value={this.state.value}
                                        onChange={this.onChangeBloodGroup}
                                    />
                                </EuiFormRow>
                                <EuiFormRow label="Marital Status">
                                    <EuiSelect
                                        id="maritalStatus"
                                        options={this.maritalStatus}
                                        value={this.state.value}
                                        onChange={this.onChangeMaritalStatus}
                                    />
                                </EuiFormRow>
                                <EuiFormRow label="Physically Handicapped">
                                    <EuiSelect
                                        id="physicallyHandicapped"
                                        options={this.physicallyHandicapped}
                                        value={this.state.value}
                                        onChange={this.onChangePhysicallyHandicapped}
                                    />
                                </EuiFormRow>
                            </EuiForm>
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiPanel betaBadgeLabel='Contact Information' hasShadow style={{ 'min-width': '1100px' }}>
                            
                            {/* ---------- Number and Email ---------- */}
                            
                            <div className='mt-2' style={{ 'min-width': '200px' }}>
                                <EuiFlexGrid columns={3}>
                                    <EuiFlexItem >
                                        <EuiForm>
                                            <EuiFormRow label="Mobile No.">
                                                <EuiFieldText name="mobile" isInvalid='' />
                                            </EuiFormRow>
                                        </EuiForm>
                                    </EuiFlexItem>
                                    <EuiFlexItem>
                                        <EuiForm>
                                            <EuiFormRow label="Phone No.">
                                                <EuiFieldText name="phone" isInvalid='' />
                                            </EuiFormRow>
                                        </EuiForm>
                                    </EuiFlexItem>
                                    <EuiFlexItem>
                                        <EuiForm>
                                            <EuiFormRow label="E-mail">
                                                <EuiFieldText name="email" isInvalid='' />
                                            </EuiFormRow>
                                        </EuiForm>
                                    </EuiFlexItem>
                                </EuiFlexGrid>
                            </div>

                            {/* ---------- Address ---------- */}

                            <div className='mt-2' style={{ 'min-width': '500px' }}>
                                <EuiFlexGrid columns={2}>
                                    <EuiFlexItem>
                                        <EuiForm>
                                            <EuiFormRow label="Permanent Address">
                                                <div>
                                                    <EuiFormRow label="Plot No. :">
                                                        <EuiFieldText name="pPlot" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="Street/Locality :">
                                                        <EuiFieldText name="pStreet" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="City:">
                                                        <EuiFieldText name="pCity" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="Taluka:">
                                                        <EuiFieldText name="pTaluka" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="District:">
                                                        <EuiFieldText name="pDistrict" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="State:">
                                                        <EuiFieldText name="pState" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="Pincode:">
                                                        <EuiFieldText name="pPincode" isInvalid='' />
                                                    </EuiFormRow>
                                                </div>
                                            </EuiFormRow>
                                        </EuiForm>
                                    </EuiFlexItem>
                                    <EuiFlexItem>
                                        <EuiForm>
                                            <EuiFormRow label="Current Address">
                                                <div>
                                                    <EuiFormRow label="Plot No. :">
                                                        <EuiFieldText name="cPlot" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="Street/Locality :">
                                                        <EuiFieldText name="cStreet" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="City:">
                                                        <EuiFieldText name="cCity" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="Taluka:">
                                                        <EuiFieldText name="cTaluka" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="District:">
                                                        <EuiFieldText name="cDistrict" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="State:">
                                                        <EuiFieldText name="cState" isInvalid='' />
                                                    </EuiFormRow>
                                                    <EuiFormRow label="Pincode:">
                                                        <EuiFieldText name="cPincode" isInvalid='' />
                                                    </EuiFormRow>
                                                </div>
                                            </EuiFormRow>
                                        </EuiForm>
                                    </EuiFlexItem>
                                </EuiFlexGrid>
                            </div>
                        </EuiPanel>
                    </EuiFlexItem>
                </EuiFlexGrid>




            </div>
        )
    }
}

export default FacultyEditProfile
