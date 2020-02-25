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
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem
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
                  <EuiFlexGroup gutterSize="l">
                      <EuiFlexItem className='flex'>
                        <EuiCard
                        className='card'
                        style={{width: '340px'}}
                          layout="horizontal"
                          // icon={<EuiIcon size="xl" type={'logoBeats'} />}
                          title={'Admin'}
                          description="This card adds uses an 'xl' size icon which works well in a horizontal layout."
                          onClick={this.showModal}
                        /> {modal}
                      </EuiFlexItem>
                      <EuiFlexItem className='flex'>
                        <EuiCard
                        className='card'
                        style={{width: '340px'}}
                          layout="horizontal"
                          // icon={<EuiIcon size="l" type={'logoCloud'} />}
                          titleSize="xs"
                          title={'Faculty'}
                          description="This card uses an 'l' size icon but also shrinks the 'titleSize' to 'xs'."
                          onClick={this.showModal}
                        />{modal}
                      </EuiFlexItem>
                      <EuiFlexItem className='flex'>
                        <EuiCard
                        className='card'
                        style={{width: '340px'}}
                          layout="horizontal"
                          title={'Student'}
                          description="Example of a card's description. Stick to one or two sentences."
                          onClick={this.showModal}
                          href="#"
                        />{modal}
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </div>
            </div>
        )
    }
}

export default HomePageComponent;