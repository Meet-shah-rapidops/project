import React, { Component } from 'react';
import moment from 'moment';
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiSelect,
    EuiDatePicker,
    EuiButton,
} from '@elastic/eui';

export class AddTest extends Component {
    constructor(props) {
        super(props);

        this.dept = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_male', text: 'CE' },
            { value: 'option_female', text: 'IT' },
        ];

        this.sem = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_one', text: 'Semester 1' },
            { value: 'option_two', text: 'Semester 2' },
            { value: 'option_three', text: 'Semester 3' },
            { value: 'option_four', text: 'Semester 4' },
            { value: 'option_five', text: 'Semester 5' },
            { value: 'option_six', text: 'Semester 6' },
            { value: 'option_seven', text: 'Semester 7' },
            { value: 'option_eight', text: 'Semester 8' },
        ];

        this.subject = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_java', text: 'Java' },
            { value: 'option_c', text: 'C' },
            { value: 'option_python', text: 'Python' },
        ];

        this.attempts = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_one', text: 'One Time' },
            { value: 'option_multi', text: 'Multiple Time' },
        ];

        this.durationType = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_duration', text: 'Only Duration' },
            { value: 'option_date', text: 'Duration and Date' },
        ];



        this.state = {
            visibility: 'none',
            dept: this.dept[0].value,
            sem: this.sem[0].value,
            subject: this.subject[0].value,
            attempts: this.attempts[0].value,
            durationType: this.durationType[0].value,
            time: moment(),
            startDate: moment(),
            endDate: moment(),
        };

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
    }

    onChangeStartDate(date) {
        this.setState({
            startDate: date,
        });
    }

    onChangeEndDate(date) {
        this.setState({
            endDate: date,
        });
    }

    onChangeDept = e => {
        this.setState({
            dept: e.target.value,
        });
    };

    onChangeSem = e => {
        this.setState({
            sem: e.target.value,
        });
    };

    onChangeSubject = e => {
        this.setState({
            subject: e.target.value,
        });
    };

    onChangeAttempts = e => {
        this.setState({
            attempts: e.target.value,
        });
    };

    onChangeDuration(date) {
        this.setState({
            time: date,
        });
    }

    onChangeDurationType = e => {
        this.setState({
            durationType: e.target.value,
            visibility: e.target.value === 'option_date' ? 'block' : 'none',
        });
    };

    render() {
        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Add Test</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>

                {/* ---------- Test Form ---------- */}

                <EuiForm>
                    <EuiFormRow label="Exam Label">
                        <EuiFieldText name="examlabel" />
                    </EuiFormRow>
                    <EuiFormRow label="Department:">
                        <EuiSelect
                            id="dept"
                            options={this.dept}
                            value={this.state.value}
                            onChange={this.onChangeDept}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Semester:">
                        <EuiSelect
                            id="sem"
                            options={this.sem}
                            value={this.state.value}
                            onChange={this.onChangeSem}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Subject:">
                        <EuiSelect
                            id="subject"
                            options={this.subject}
                            value={this.state.value}
                            onChange={this.onChangeSubject}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Attempts:">
                        <EuiSelect
                            id="attempts"
                            options={this.attempts}
                            value={this.state.value}
                            onChange={this.onChangeAttempts}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Duration Type:">
                        <EuiSelect
                            id="durationType"
                            options={this.durationType}
                            value={this.state.value}
                            onChange={this.onChangeDurationType}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Duration">
                        <EuiDatePicker
                            showTimeSelect
                            showTimeSelectOnly
                            selected={this.state.time}
                            onChange={this.onChangeDuration}
                            dateFormat="HH:mm"
                            timeFormat="HH:mm"
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Start Date" style={{ display: this.state.visibility }}>
                        <EuiDatePicker
                            showTimeSelect
                            selected={this.state.startDate}
                            onChange={this.onChangeStartDate}
                            dateFormat="DD/MM/YYYY HH:mm"
                        />
                    </EuiFormRow>
                    <EuiFormRow label="End Date" style={{ display: this.state.visibility }}>
                        <EuiDatePicker
                            showTimeSelect
                            selected={this.state.endDate}
                            onChange={this.onChangeEndDate}
                            dateFormat="DD/MM/YYYY HH:mm"
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Pass Value">
                        <EuiFieldText name="passValue" />
                    </EuiFormRow>
                    <EuiFormRow label="Negative Marks">
                        <EuiFieldText name="negativeMarks" />
                    </EuiFormRow>
                    <EuiFormRow>
                        <EuiButton className="float-left">Add Test</EuiButton>
                    </EuiFormRow>
                </EuiForm>
            </div>
        )
    }
}

export default AddTest;