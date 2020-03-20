import React, { Component } from 'react'
//import { DisplayToggles } from './display_toggles';
import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiDatePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiComboBox,
  EuiFieldText,
  EuiFormRow,
  EuiFilePicker,
  EuiRange,
  EuiSelect,
  EuiPanel,
  EuiSwitch,
} from '@elastic/eui'
import { EuiButton } from '@elastic/eui';
//import {readData} from '../../assign.js';
import { CENTER_ALIGNMENT } from '@elastic/eui/lib/services/alignment';
//import FacultyDashboard from './FacultyDashboard'

export class AddAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSwitchChecked: false,
      comboBoxSelectionOptions: [],
      value: '',
    };

    /* this.state = {
      startDate: moment(),
    }; */
    this.handleChange = this.handleChange.bind(this);
  }
  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  onRangeChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  onSwitchChange = () => {
    this.setState({
      isSwitchChecked: !this.state.isSwitchChecked,
    });
  };
  render() {
    return (
      <div>
        
        <EuiPage>
          
          <EuiPageBody >

            <h1 style={{}}> Add Assignment</h1>
            <hr />
            <div className='container'>
              <EuiFormRow label="Assignment Title">

                <EuiFieldText

                  placeholder="Enter Assignment Title"
                  value={this.state.value}
                  onChange={this.onChange}
                  _id="assignmentTitle"
                  display="center" />
              </EuiFormRow>

              <EuiFormRow label="Select-Assignment Type" >
                <EuiSelect id='atype'
                  options={[
                    { value: 'theory', text: 'Theory' },
                    { value: 'Programming', text: 'Programming' },

                  ]}

                />
              </EuiFormRow>
              <EuiFormRow label="Select-Subject" >
                <EuiSelect id='asub'
                  options={[
                    { value: 'java', text: 'JAVA' },
                    { value: 'Php', text: 'PHP' },

                  ]}

                />
              </EuiFormRow>
              <EuiFormRow label="Select-Semester" >
                <EuiSelect id='sem'
                  options={[
                    { value: 'sem-2', text: 'Sem-2' },
                    { value: 'sem-3', text: 'Sem-3' },

                  ]}

                />
              </EuiFormRow>

              <EuiFormRow label="Upload Assignment file">
                <EuiFilePicker display="centerCompressed" id='afile' />
              </EuiFormRow>

              <EuiFormRow label="Select Deadline">
                <EuiDatePicker display="centerCompressed"
                  id='deadline'
                  showTimeSelect
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </EuiFormRow>
              <EuiFormRow>
                <EuiButton >Add Assignment</EuiButton>
              </EuiFormRow>
            </div>
            {/* <FacultyDashboard/> */}
          </EuiPageBody>
        </EuiPage>
      </div>
    )
  }

}
export default AddAssignment;
