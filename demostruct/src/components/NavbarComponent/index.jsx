import React, { Component } from "react";
import {
  EuiButton,
  EuiFieldSearch,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiSwitch,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiAvatar
} from "@elastic/eui";

import { FaBell, FaUserCircle } from "react-icons/fa";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false
    };
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
    return (
      <div className="navbar">


        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiAvatar
              size="l"
              name="Cat"
              imageUrl="https://source.unsplash.com/64x64/?cat"
            />&emsp; sjdcbkjbfew
          </EuiPageHeaderSection>

          <EuiPageHeaderSection>
            <EuiFieldSearch
              className='search'
              placeholder="Search"
              value={this.state.value}
              onChange={this.onChange}
              isClearable={this.state.isClearable}
              aria-label="Use aria labels when no actual label is in use"
            />
          </EuiPageHeaderSection>

          <EuiPageHeaderSection>
            <div className='nav-right'>
              <EuiButton fill className='msg'>Message</EuiButton>
              <FaBell className='notify' size={30} />

              <EuiPopover
                className='profile'
                id="trapFocus"
                ownFocus
                button={button}
                isOpen={this.state.isPopoverOpen}
                closePopover={this.closePopover.bind(this)}
                initialFocus="[id=asdf2]"
              >
                <EuiFormRow
                  label="Generate a public snapshot?"
                  id="asdf"
                  hasChildLabel={false}
                >
                  <EuiSwitch
                    name="switch"
                    label="Snapshot data"
                    checked={true}
                    onChange={() => { }}
                  />
                </EuiFormRow>

                <EuiFormRow label="Include the following in the embed" id="asdf2">
                  <EuiSwitch
                    name="switch"
                    label="Current time range"
                    checked={true}
                    onChange={() => { }}
                  />
                </EuiFormRow>

                <EuiSpacer />

                <EuiButton fill>Copy IFRAME code</EuiButton>
              </EuiPopover>
            </div>
          </EuiPageHeaderSection>
        </EuiPageHeader>
      </div>
    );
  }
}

export default NavbarComponent;
