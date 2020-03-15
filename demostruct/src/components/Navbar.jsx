import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';

import {
  EuiButton,
  EuiFieldSearch,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiAvatar,
  EuiOverlayMask,
  EuiConfirmModal,
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody
} from "@elastic/eui";

import { FaBell, FaUserCircle } from "react-icons/fa";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false
    };
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  closeModal = () => {
    this.setState({ isModalVisible: false });
  };
  confirmBox = () => {
    redirect: "/";
  }

  onButtonClick() {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false
    });
  }


  render() {
    const button = (
      <FaUserCircle
        size={30}
        onClick={this.onButtonClick.bind(this)}
      ></FaUserCircle>
    );
    let modal;

    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiConfirmModal
            title="Logout Confirmation"
            onCancel={this.closeModal}
            onConfirm={this.confirmBox}
            cancelButtonText="No, don't do it"
            confirmButtonText="Yes, do it"
            defaultFocusedButton="confirm">
            {/* <p>You&rsquo;re about to do something.</p> */}
            <p>Are you sure you want to Logout?</p>
          </EuiConfirmModal>
        </EuiOverlayMask>
      );
    }


    return (
      <div className="navbar">

        <EuiPageHeader className='headerOptions'>
          <div className='headerAdditionalOptions'>
            <EuiPageHeaderSection><Link to='/adminDashboard'>
              <EuiAvatar
                size="l"
                name="Charusat"
                imageUrl="https://source.unsplash.com/64x64/?cat"
              /></Link>
            </EuiPageHeaderSection>

            <EuiPageHeaderSection className='search'>
              <EuiFieldSearch
              size={50}
              // className='bg-transparent'
                placeholder="Search"
                value={this.state.value}
                onChange={this.onChange}
                isClearable={this.state.isClearable}
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiPageHeaderSection>
          </div>
          <EuiPageHeaderSection>
            <div className='nav-right'>
              <EuiButton className='msg' size="s">Message</EuiButton>

              <FaBell className='notify' style={{}} size={30} />

              <EuiPopover
                className='profile'
                style={{}}
                size={25}
                id="trapFocus"
                ownFocus
                button={button}
                isOpen={this.state.isPopoverOpen}
                closePopover={this.closePopover.bind(this)}
                initialFocus="[id=asdf2]"
              >
                <EuiFormRow
                  label="Profile"
                  id="asdf"
                  hasChildLabel={false}
                >
                  <h4>ABC-Admin</h4>
                </EuiFormRow>

                <EuiFormRow label="" id="asdf2">
                  <Link to="#">
                    <EuiButton> Change Password</EuiButton>
                  </Link>
                </EuiFormRow>

                <EuiButton className='mt-2' onClick={this.showModal}>Logout</EuiButton>
                {modal}
              </EuiPopover>
            </div>
          </EuiPageHeaderSection>
        </EuiPageHeader>
      </div>
    );
  }
}

export default NavbarComponent;
