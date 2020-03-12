import React, { Component } from 'react'
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageContent,
    EuiPageContentBody,
    EuiTitle,
    EuiPanel,
    EuiFlexGrid,
    EuiFlexItem,
    EuiToolTip,
} from '@elastic/eui'

export class FacultySubjects extends Component {
    state = {
        visibility: 'none',
        index : 0,
        content : ''
    }

    show(subject) {
        console.log("Show")
        console.log(subject)
        this.setState({
            visibility: 'block',
            content: subject.syllabus
        })

    }
    

    render() {

        

        const subjectList = [
            {
                'code': 'CE501',
                'name': 'Theory of Computation',
                'syllabus': 'This is syllabus',
            },
            {
                'code': 'CE502',
                'name': 'JavaScript',
                'syllabus': 'This is syllabus',
            },
            {
                'code': 'CE503',
                'name': 'C++',
                'syllabus': 'This is syllabus',
            },
            {
                'code': 'CE504',
                'name': 'Python',
                'syllabus': 'This is syllabus',
            },
            {
                'code': 'CE505',
                'name': 'Data Science',
                'syllabus': 'This is syllabus',
            },
            {
                'code': 'CE506',
                'name': 'Big Data',
                'syllabus': 'This is syllabus',
            },
        ];

        const subjectListPanels = subjectList.map((subject, index) => {
            return (
                <EuiFlexItem  onClick={() => this.show(subject)}>
                    <EuiPanel className="subjectsPanel">
                        <div className="container-fluid">
                            <EuiToolTip position="right" content={subject.name}>
                                <div>{subject.code}</div>
                            </EuiToolTip>
                        </div>
                    </EuiPanel>
                </EuiFlexItem>
            );
        });

        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Subjects</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>
                {/* ----------Subject Codes---------- */}

                <div className="container">
                    <EuiFlexGrid gutterSize="l" columns={4}>
                        {subjectListPanels}
                    </EuiFlexGrid>
                </div>
                <EuiPageContent className='mt-4' style={{ display: this.state.visibility }}>
                    <EuiPageContentBody>
                        {this.state.content}
                    </EuiPageContentBody>
                </EuiPageContent>
            </div>
        )
    }
}

export default FacultySubjects
