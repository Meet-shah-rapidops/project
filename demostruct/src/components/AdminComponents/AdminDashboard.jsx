import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FaUsers, FaUserTie, FaBook } from "react-icons/fa";
import {
  EuiPageContentBody,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem
} from "@elastic/eui";

class AdminDashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      redirect: false
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


  componentWillMount(){
    if(localStorage.getItem("login")){
      console.log("login successfull")
    }
    else{
      this.setState({redirect:true});
    }
  }
  render() {


    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div>

        <EuiPageContentBody className='body'>
          <EuiFlexGroup style={{ width: "100%" }}>
            <EuiFlexItem>
              <Link className='link' to='/adminDashboard/faculty'>
                <EuiCard
                  className='cardsOfFaculty'
                  // layout="horizontal"
                  // icon={<EuiIcon size="xxl" />}
                  icon={<FaUserTie size={70} />}
                  title={`Faculty`}
                /></Link>
            </EuiFlexItem>

            <EuiFlexItem>
              <Link className='link' to='/adminDashboard/student'>
                <EuiCard
                  className='cardsOfStudent'
                  // layout="horizontal"
                  icon={<FaUsers size={70} />}
                  title={`Student`}
                /></Link>
            </EuiFlexItem>

            <EuiFlexItem>
              <Link className='link' to='/adminDashboard/subject'>
                <EuiCard
                  // layout="horizontal"
                  className='cardsOfSubject'
                  icon={<FaBook size={70} />}
                  title={`Subject`}
                /></Link>
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiPageContentBody>
      </div>
    );
  }
}

export default AdminDashboardComponent;
