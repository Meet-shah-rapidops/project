import React, { Component } from 'react'
import { TiMessages } from "react-icons/ti";
import { MdAccessTime } from "react-icons/md";
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiFlexGrid,
    EuiFlexItem,
    EuiPanel,
    EuiListGroup,
    EuiListGroupItem,
    EuiFlexGroup,
    EuiDescriptionList,
    EuiDescriptionListTitle,
    EuiDescriptionListDescription,
    EuiLink,
    EuiHorizontalRule,
    EuiAvatar,
} from '@elastic/eui'
import { Link } from 'react-router-dom';

export class Forum extends Component {
    render() {

        const general = [
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Martin Garrix',
                'time': '5 minutes',
                'replies': '9',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'DJ Snake',
                'time': '15 minutes',
                'replies': '10',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Dimitri Vegas',
                'time': '20 minutes',
                'replies': '5',
            },
        ];

        const lesson = [
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Martin Garrix',
                'time': '5 minutes',
                'replies': '9',
                'subject': 'Java',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'DJ Snake',
                'time': '15 minutes',
                'replies': '10',
                'subject': 'JavaScript',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Dimitri Vegas',
                'time': '20 minutes',
                'replies': '5',
                'subject': 'Python',
            },
        ];

        const getGeneral = general.map((post, index) => {
            return (
                <div>
                    <EuiListGroupItem className="pl-3 pt-3" onClick={'/'} label={
                        <div>
                            <EuiFlexGroup wrap>
                                <EuiFlexItem style={{ minWidth: '750px' }}>
                                    <EuiDescriptionList>
                                        <EuiDescriptionListTitle>
                                            {post.title}
                                        </EuiDescriptionListTitle>
                                        <EuiDescriptionListDescription>
                                            Posted by: <EuiAvatar size="s" name={post.author} /><EuiLink href="#"> {post.author}</EuiLink> | <MdAccessTime /> {post.time} ago
                                        </EuiDescriptionListDescription>
                                    </EuiDescriptionList>
                                </EuiFlexItem>
                                <EuiFlexItem style={{ minWidth: '50px' }}>
                                    <h4><TiMessages /> {post.replies}</h4>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </div>
                    } />
                    <EuiHorizontalRule className="m-0" />
                </div>
            );
        });

        const getLesson = lesson.map((post, index) => {
            return (
                <div>
                    <EuiListGroupItem className="pl-3 pt-3" onClick={'/'} label={
                        <div>
                            <EuiFlexGroup wrap>
                                <EuiFlexItem style={{ minWidth: '750px' }}>
                                    <EuiDescriptionList>
                                        <EuiDescriptionListTitle>
                                            {post.title}
                                        </EuiDescriptionListTitle>
                                        <EuiDescriptionListDescription>
                                            Subject: {post.subject} <br/>
                                            Posted by: <EuiAvatar size="s" name={post.author} /><EuiLink href="#"> {post.author}</EuiLink> | <MdAccessTime /> {post.time} ago
                                        </EuiDescriptionListDescription>
                                    </EuiDescriptionList>
                                </EuiFlexItem>
                                <EuiFlexItem style={{ minWidth: '50px' }}>
                                    <h4><TiMessages /> {post.replies}</h4>
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
                            <h1>Forum</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>


                {/* ---------- Forum Cards ----------- */}

                <EuiFlexGrid gutterSize="l">

                    {/* ---------- General Forum ---------- */}

                    <EuiFlexItem>
                        <EuiPanel betaBadgeLabel="General">
                            <EuiListGroup maxWidth="1200px" flush={true} bordered={false} className="m-0 mt-3">
                                <EuiHorizontalRule className="m-0" />
                                {getGeneral}
                                <Link to="/generalforum" className='viewAll'>View All</Link>
                            </EuiListGroup>
                        </EuiPanel>
                    </EuiFlexItem>

                    {/* ---------- Lessons Forum ---------- */}

                    <EuiFlexItem>
                        <EuiPanel betaBadgeLabel="Lesson">
                            <EuiListGroup maxWidth="1200px" flush={true} bordered={false} className="m-0 mt-3">
                                <EuiHorizontalRule className="m-0" />
                                {getLesson}
                                <Link to="/lessonforum" className='viewAll'>View All</Link>
                            </EuiListGroup>
                        </EuiPanel>
                    </EuiFlexItem>
                </EuiFlexGrid>
            </div>

        )
    }
}

export default Forum
