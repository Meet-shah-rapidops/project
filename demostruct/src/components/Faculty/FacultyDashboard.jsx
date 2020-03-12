import React, { Component } from 'react'
import { GiBlackBook } from "react-icons/gi";
import { FaRegStickyNote } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { MdAssignment } from "react-icons/md";
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiLink,
    EuiCard,
    EuiFlexItem,
    EuiFlexGrid,
    EuiListGroup,
    EuiListGroupItem,
    EuiHorizontalRule,
    EuiDescriptionList,
    EuiDescriptionListTitle,
    EuiDescriptionListDescription,
    EuiFlexGroup,
} from '@elastic/eui'

export class FacultyDashboard extends Component {
    render() {
        const subjectArr = [
            {
                'id': 1,
                'name': 'C',
            },
            {
                'id': 2,
                'name': 'C++',
            },
            {
                'id': 3,
                'name': 'Java',
            },
            {
                'id': 4,
                'name': 'JavaScript',
            },
            {
                'id': 5,
                'name': 'Python',
            },
        ];

        const testArr = [
            {
                'id': 1,
                'title': 'Linux Fundamentals',
                'subject': 'Linux',
                'score': '40',
            },
            {
                'id': 2,
                'title': 'GIT test',
                'subject': 'GIT',
                'score': '80',
            },
            {
                'id': 3,
                'title': 'HTML/CSS test',
                'subject': 'HTML/CSS',
                'score': '60',
            },
        ];
        let subjectDisplayArr = [...subjectArr];
        subjectDisplayArr = subjectDisplayArr.reverse().slice(0, 3);

        let testDisplayArr = [...testArr];
        testDisplayArr = testDisplayArr.reverse().slice(0, 2);


        const getSubject = subjectDisplayArr.map((item, index) => {
            return (
                <div>
                    <EuiListGroupItem className="pl-3" onClick={'/'} label={item.name} />
                    <EuiHorizontalRule className="m-0" />
                </div>
            );
        })

        const getDeadline = subjectArr.map((item, index) => {
            return (
                <div>
                    <EuiListGroupItem className="pl-3" onClick={'/'} label={item.name} />
                    <EuiHorizontalRule className="m-0" />
                </div>
            );
        })

        const getTest = testDisplayArr.map((test, index) => {
            return (
                <div>
                    <EuiListGroupItem className="pl-3" onClick={'/'} label={
                        <div>
                            <EuiFlexGroup wrap>
                                <EuiFlexItem style={{ minWidth: '750px' }}>
                                    <EuiDescriptionList>
                                        <EuiDescriptionListTitle>
                                            {test.title}
                                        </EuiDescriptionListTitle>
                                        <EuiDescriptionListDescription>
                                            Subject: <EuiLink href="#">{test.subject}</EuiLink>
                                        </EuiDescriptionListDescription>
                                    </EuiDescriptionList>
                                </EuiFlexItem>
                                <EuiFlexItem style={{ minWidth: '50px' }}>
                                    <h1>{test.score}</h1>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </div>
                    } />
                    <EuiHorizontalRule className="m-0" />
                </div>
            );
        });

        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Dashboard</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>
               
                {/* ----------Cards---------- */}

                <EuiFlexGrid gutterSize="l">

                 {/* ----------Subject Card---------- */}

                    <EuiFlexItem>
                        <EuiCard className='p-0 subjectCard'
                            title={
                                <h2 className="subjectCardHeader " >
                                    <GiBlackBook /> Subjects
                                </h2>
                            }
                            description={
                                <div>
                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                       {getSubject}
                                        <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                    </EuiListGroup>
                                </div>
                            }
                        />
                    </EuiFlexItem>

                    {/* ----------Deadline Card---------- */}

                    <EuiFlexItem style={{ height: '270px' }}>
                        <EuiCard className='p-0 deadlineCard'
                            title={
                                <h2 className="deadlineCardHeader " >
                                    <GoCalendar /> Deadlines
                                </h2>
                            }
                            description={
                                <div>
                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                        <div className="scrollable">
                                            {getDeadline}
                                        </div>
                                        <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                    </EuiListGroup>
                                </div>
                            }
                        />
                    </EuiFlexItem>

                    {/* ----------Assignment Card---------- */}

                    <EuiFlexItem>
                        <EuiCard className='p-0 assignmentCard'
                            title={
                                <h2 className="assignmentCardHeader " >
                                    <MdAssignment /> Assignments
                                </h2>
                            }
                            description={
                                <div>
                                    {/* <EuiSpacer size="s" /> */}
                                    {/* <EuiHorizontalRule className='m-0'/> */}

                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                       {getSubject}
                                        <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                    </EuiListGroup>
                                  </div>
                            }
                        />
                    </EuiFlexItem>

                    {/* ----------Test Card---------- */}

                    <EuiFlexItem>
                        <EuiCard className='p-0 testCard'
                            title={
                                <h2 className="testCardHeader " >
                                    <FaRegStickyNote /> Tests
                                </h2>
                            }
                            description={
                                <div>
                                    <EuiListGroup maxWidth="900px" flush={true} bordered={false} className="m-0">
                                        {getTest}
                                    </EuiListGroup>
                                    <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                </div>
                            }
                        />
                    </EuiFlexItem>
                </EuiFlexGrid>
            </div>
        )
    }
}

export default FacultyDashboard
