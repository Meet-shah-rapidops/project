import React, { Component } from 'react'
import{
    EuiButton,
    EuiIcon

} from '@elastic/eui';

class NavbarComponent extends Component{
    render(){
        return(
            <div className="navbar">
                 <EuiButton fill href='/' onClick={() => window.alert('Logged out')}>
                  Logout
                 {<EuiIcon size="xs" type={`arrowRight`} />}
                </EuiButton>
            </div>
        )
    }
}

export default NavbarComponent;