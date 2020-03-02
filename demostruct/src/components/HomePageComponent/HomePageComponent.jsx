import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import {
    EuiFlexItem,
    EuiPanel,
    EuiFieldText,
    EuiFieldPassword,
    EuiButton
  } from '@elastic/eui';

class HomePageComponent extends Component {
      constructor(props) {
        super(props);

        this.state = {
          value: '',
        };
      }

      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
    render() {
        return (
            <div className="homepage">
                 <EuiFlexItem>
                  <EuiPanel
                  className='panel'
                  >
                    <h1>Login</h1>
                    <EuiFieldText
                      placeholder="Enter your email"
                      value={this.state.value}
                      onChange={this.onChange}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiFieldPassword
                    // style={{marginbottom : '20px'}}
                      placeholder="Enter your password"
                      value={this.state.value}
                      onChange={this.onChange}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                    <Link to ='/adminDashboard'>
                    <EuiButton fill>
                      Login
                    </EuiButton></Link>
                    {/* <Button color="primary">primary</Button> */}
                  </EuiPanel>
                </EuiFlexItem>
            </div>
        )
    }
}

export default HomePageComponent;