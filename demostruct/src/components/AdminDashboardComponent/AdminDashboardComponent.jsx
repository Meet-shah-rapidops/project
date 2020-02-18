import React, { Component } from 'react'
import {
    EuiPage,
    EuiPageBody,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageSideBar,
    EuiTitle,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton,
    EuiIcon,
    EuiTreeView,
    EuiToken,
    EuiFieldText,
    EuiPopover
  } from '@elastic/eui';

export class AdminDashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
    };
  }

  onButtonClick() {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false,
    });
  }
    render() {
        const items = [
            {
              label: 'Item One',
              id: 'item_one',
              icon: <EuiIcon type="folderClosed" />,
              iconWhenExpanded: <EuiIcon type="folderOpen" />,
              isExpanded: true,
              children: [
                {
                  label: 'Item A',
                  id: 'item_a',
                  icon: <EuiIcon type="document" />,
                },
                {
                  label: 'Item B',
                  id: 'item_b',
                  icon: <EuiIcon type="arrowRight" />,
                  iconWhenExpanded: <EuiIcon type="arrowDown" />,
                  children: [
                    {
                      label: 'A Cloud',
                      id: 'item_cloud',
                      icon: <EuiToken iconType="tokenConstant" />,
                    },
                    {
                      label: "I'm a Bug",
                      id: 'item_bug',
                      icon: <EuiToken iconType="tokenEnum" />,
                      callback: this.showAlert,
                    },
                  ],
                },
                {
                  label: 'Item C',
                  id: 'item_c',
                  icon: <EuiIcon type="arrowRight" />,
                  iconWhenExpanded: <EuiIcon type="arrowDown" />,
                  children: [
                    {
                      label: 'Another Cloud',
                      id: 'item_cloud2',
                      icon: <EuiToken iconType="tokenConstant" />,
                    },
                    {
                      label:
                        'This one is a really long string that we will check truncates correctly',
                      id: 'item_bug2',
                      icon: <EuiToken iconType="tokenEnum" />,
                      callback: this.showAlert,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Item Two',
              id: 'item_two',
            },
          ];

          const button = (
            <EuiButton
              iconType="arrowDown"
              iconSide="right"
              onClick={this.onButtonClick.bind(this)}>
              Profile
            </EuiButton>
          );
      
        return (
            <div className = "admin">
                <EuiPage>
                    <EuiPageSideBar>
                        {/* SideBar nav */}
                        <div style={{ width: '10rem' }}>
                            <EuiTreeView items={items} aria-label="Sample Folder Tree" />
                        </div>
                    </EuiPageSideBar>

                    <EuiPageBody>

                    <EuiPageHeader>
                        <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Admin DashBoard</h1>
                        </EuiTitle>
                        </EuiPageHeaderSection>
                        <EuiPageHeaderSection>
                            <EuiButton fill href='/' onClick={() => window.alert('Logged out')}>
                                Logout
                                {<EuiIcon size="xs" type={`arrowRight`} />}
                            </EuiButton>

                            <EuiPopover
                            style = {{ marginLeft: 3 }}
                              id="popover"
                              button={button}
                              isOpen={this.state.isPopoverOpen}
                              closePopover={this.closePopover.bind(this)}>
                              <div style={{ width: '300px' }}>
                                Profile
                                <EuiFieldText
                                  placeholder="Placeholder text"
                                  value={this.state.value}
                                  onChange={this.onChange}
                                  aria-label="Use aria labels when no actual label is in use"/>
                              </div>
                            </EuiPopover>
                            
                        </EuiPageHeaderSection>
                    </EuiPageHeader>


                    <EuiFlexGroup>
                        <EuiFlexItem className='card'>
                            <EuiCard
                                icon={<EuiIcon size="xxl" />}
                                title={`Elastic`}
                                description="Example of a card's description. Stick to one or two sentences."
                                onClick={() => window.alert('Card clicked')}/>
                        </EuiFlexItem>
                        <EuiFlexItem className='card'>
                                <EuiCard
                                    icon={<EuiIcon size="xxl" />}
                                    title={`Elastic`}
                                    description="Example of a card's description. Stick to one or two sentences."
                                    onClick={() => window.alert('Card clicked')} />
                            </EuiFlexItem>
                    </EuiFlexGroup>
                <br />
                    <EuiFlexGroup>
                        <EuiFlexItem className='card'>
                            <EuiCard
                                icon={<EuiIcon size="xxl" />}
                                title={`Elastic`}
                                description="Example of a card's description. Stick to one or two sentences."
                                onClick={() => window.alert('Card clicked')}/>
                        </EuiFlexItem>
                        <EuiFlexItem className='card'>
                                <EuiCard
                                    icon={<EuiIcon size="xxl" />}
                                    title={`Elastic`}
                                    description="Example of a card's description. Stick to one or two sentences."
                                    onClick={() => window.alert('Card clicked')} />
                            </EuiFlexItem>
                    </EuiFlexGroup>
                  
                  
                    {/* <EuiPageContent>
                        <EuiPageContentHeader>
                        <EuiPageContentHeaderSection>
                            <EuiTitle>
                            <h2>Content title</h2>
                            </EuiTitle>
                        </EuiPageContentHeaderSection>
                        <EuiPageContentHeaderSection>
                            Content abilities
                        </EuiPageContentHeaderSection>
                        </EuiPageContentHeader>
                        <EuiPageContentBody>Content body</EuiPageContentBody>
                    </EuiPageContent> */}
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
}

export default AdminDashboardComponent;
