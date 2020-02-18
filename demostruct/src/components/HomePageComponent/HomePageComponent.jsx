import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

import {
    EuiButton,
    EuiButtonEmpty,
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiOverlayMask,
    EuiFieldText,
    EuiFieldPassword,
    EuiIcon
   
  } from '@elastic/eui';

class HomePageComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isModalVisible: false,

        };
        
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
      }
    
      closeModal() {
        this.setState({ isModalVisible: false });
      }
    
      showModal() {
        this.setState({ isModalVisible: true });
      }
    
      onChange = e => {
        this.setState({

          value: e.target.value,
        });
      };
    
    render() {

        let modal;

        if (this.state.isModalVisible) {
          modal = (
            <EuiOverlayMask>
              <EuiModal onClose={this.closeModal}>
                <EuiModalHeader>
                  <EuiModalHeaderTitle>Admin</EuiModalHeaderTitle>
                </EuiModalHeader>
    
                <EuiModalBody>
                <EuiFieldText style = {{ marginBottom: 20 }}
                    placeholder="Enter your Username"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use" />
                 <EuiFieldPassword
                    placeholder="Enter your password"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />


                </EuiModalBody>
    
                <EuiModalFooter>
                  <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>
    
                  <EuiButton onClick={this.closeModal} href='/adminDashboard' fill>
                    Login
                  </EuiButton>
                </EuiModalFooter>
              </EuiModal>
            </EuiOverlayMask>
          );
        }

        return (
            <div className="homepage">
                {/* <h1>Home Page</h1> */}
                <div className='modals'>
                    <EuiButton className='mdbtn' onClick={this.showModal}>Admin Login</EuiButton>
                    {modal}
                    <EuiButton className='mdbtn' onClick={this.showModal}>Faculty Login</EuiButton>
                    {modal}
                    <EuiButton className='mdbtn' onClick={this.showModal}>Student Login</EuiButton>
                    {modal}
                </div>
            </div>
        )
    }
}

export default HomePageComponent;