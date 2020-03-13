import React, { Component } from 'react'
import { FaRegEdit } from "react-icons/fa";
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiFlexGrid,
    EuiFlexItem,
    EuiCard,
    EuiAvatar,
    EuiListGroup,
    EuiListGroupItem,
    EuiButton,
} from '@elastic/eui';
import { Link } from 'react-router-dom';

export class FacultyProfile extends Component {
    render() {
        const profileDetails = {
            'id': '123',
            'firstname': 'Jack',
            'middlename': 'U',
            'lastname': 'Skrillex',
            'dob': '29/02/2020',
            'gender': 'Male',
            'mobile': '9898987474',
            'bloodGroup': 'B+',
            'maritalStatus': 'No',
            'physicallyHandicapped': 'No',
            'email': 'jacku@gmail.com',
            'phone': '8989894747',
            'permanentAddress': {
                'plot': '111',
                'street': 'Wall Street',
                'city': 'New York',
                'taluka': 'Thaltej',
                'district': 'Ahmedabad',
                'state': 'Gujarat',
                'pincode': '3700205',
            },
            'currentAddress': {
                'plot': '111',
                'street': 'Wall Street',
                'city': 'New York',
                'taluka': 'Thaltej',
                'district': 'Ahmedabad',
                'state': 'Gujarat',
                'pincode': '3700205',
            },
        }

        let { id, firstname, middlename, lastname, dob, gender, mobile, bloodGroup, maritalStatus, physicallyHandicapped, email, phone, permanentAddress, currentAddress } = profileDetails;

        permanentAddress = {
            'plot': permanentAddress.plot ? `${permanentAddress.plot},` : '',
            'street': permanentAddress.street ? `${permanentAddress.street},` : '',
            'city': permanentAddress.city ? `${permanentAddress.city},` : '',
            'taluka': permanentAddress.taluka ? `${permanentAddress.taluka},` : '',
            'district': permanentAddress.district ? `${permanentAddress.district},` : '',
            'state': permanentAddress.state ? `${permanentAddress.state},` : '',
            'pincode': permanentAddress.pincode ? `${permanentAddress.pincode}.` : '',
        }

        currentAddress = {
            'plot': currentAddress.plot ? `${currentAddress.plot},` : '',
            'street': currentAddress.street ? `${currentAddress.street},` : '',
            'city': currentAddress.city ? `${currentAddress.city},` : '',
            'taluka': currentAddress.taluka ? `${currentAddress.taluka},` : '',
            'district': currentAddress.district ? `${currentAddress.district},` : '',
            'state': currentAddress.state ? `${currentAddress.state},` : '',
            'pincode': currentAddress.pincode ? `${currentAddress.pincode}.` : '',
        }


        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Profile</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>

                {/* ---------- Profile Card ---------- */}

                <EuiFlexGrid gutterSize="l">
                    <EuiFlexItem>
                        <EuiCard className='p-0 profileCard'
                            title={
                                <div className="profileCardHeader">
                                    <EuiAvatar
                                        className="profilePic mt-2"
                                        name="Mayur Ahir"
                                        imageUrl="https://source.unsplash.com/400x200/?Nature"
                                    />
                                    <h3>{firstname} {lastname}</h3>
                                </div>
                            }
                            description={
                                <div>
                                    <div>
                                        <div className="float-left text-right size"><b>DOB</b></div>
                                        <div className="float-left text-center size"><b>:</b></div>
                                        <div className="float-left text-left size">{dob}</div>
                                    </div>
                                    <div>
                                        <div className="float-left text-right size"><b>Gender</b></div>
                                        <div className="float-left text-center size"><b>:</b></div>
                                        <div className="float-left text-left size">{gender}</div>
                                    </div>
                                    <div>
                                        <div className="float-left text-right size"><b>Mobile</b></div>
                                        <div className="float-left text-center size"><b>:</b></div>
                                        <div className="float-left text-left size">{mobile}</div>
                                    </div>
                                    {/* <EuiButton iconType={<FaRegEdit/>}></EuiButton> */}
                                    <EuiButton className="mt-1 editBtn"><Link to="/editprofile"><FaRegEdit /> Edit</Link></EuiButton>
                                </div>
                            }
                        />
                    </EuiFlexItem>

                    <EuiFlexItem>
                        <EuiCard
                            description={
                                <div>
                                    {/* <div>
                                        <EuiTabs>
                                            <EuiTab onClick={'/'}>Example 1</EuiTab>
                                            <EuiTab onClick={'/'}>Example 2</EuiTab>
                                        </EuiTabs>
                                    </div> */}
                                    <div>
                                        <div className='profileDetails'>
                                            <div>
                                                <div className="float-left divSize">
                                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>First Name</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{firstname}</div>
                                                                </div>
                                                            </div>
                                                        } />
                                                        {/* <EuiHorizontalRule className="m-0" /> */}
                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Middle Name</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                        <div className="float-left text-left sideSize">{middlename}</div>
                                                                </div>
                                                            </div>
                                                        } />
                                                        {/* <EuiHorizontalRule className="m-0" /> */}
                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Last Name</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{lastname}</div>
                                                                </div>
                                                            </div>
                                                        } />

                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Blood Group</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{bloodGroup}</div>
                                                                </div>
                                                            </div>
                                                        } />

                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Marital Status</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{maritalStatus}</div>
                                                                </div>
                                                            </div>
                                                        } />

                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Physically Handicapped</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{physicallyHandicapped}</div>
                                                                </div>
                                                            </div>
                                                        } />
                                                    </EuiListGroup>
                                                </div>

                                                <div className="float-left divSize">
                                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>E-mail</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{email}</div>
                                                                </div>
                                                            </div>
                                                        } />
                                                        {/* <EuiHorizontalRule className="m-0" /> */}
                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Phone</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{phone}</div>
                                                                </div>
                                                            </div>
                                                        } />
                                                        {/* <EuiHorizontalRule className="m-0" /> */}
                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Permanent Address</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                                    <div className="float-left text-left sideSize">{permanentAddress.plot}<br />{permanentAddress.street}<br />{permanentAddress.city} {permanentAddress.taluka} {permanentAddress.district}<br />{permanentAddress.state} - {permanentAddress.pincode}</div>
                                                                </div>
                                                            </div>
                                                        } />

                                                        <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                                            <div>
                                                                <div>
                                                                    <div className="float-left text-left sideSize"><b>Current Address</b></div>
                                                                    <div className="float-left text-left middleSize"><b>:</b></div>
                                                        <div className="float-left text-left sideSize">{currentAddress.plot}<br />{currentAddress.street}<br />{currentAddress.city} {currentAddress.taluka} {currentAddress.district}<br />{currentAddress.state} - {currentAddress.pincode}</div>
                                                                </div>
                                                            </div>
                                                        } />

                                                    </EuiListGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                        />
                    </EuiFlexItem>
                </EuiFlexGrid>
            </div>
        )
    }
}

export default FacultyProfile
