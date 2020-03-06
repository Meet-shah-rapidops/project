import React, { Component } from 'react'
import { EuiIcon, EuiTreeView, EuiToken } from '@elastic/eui';
import { FaUsers, FaUserTie, FaBook, FaRegFileAlt, FaRegCopy, FaPlusCircle, FaBuilding, FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export class SideBarComponent extends Component {
  showAlert = () => {
    alert('You squashed a bug!');

  };
  render() {
    const items = [
      {
        label: 'Department',
        id: 'dept',
        icon: <FaBuilding />,
        // iconWhenExpanded: <EuiIcon type="folderOpen" />,
        isExpanded: false,
        children: [
          {
            label: 'Create Department',
            id: 'createDept',
            icon: <FaPlusCircle />,
          },
          {
            label: 'CE',
            id: 'ce',
            icon: <EuiIcon type="arrowRight" />,
            iconWhenExpanded: <EuiIcon type="arrowDown" />,
            children: [
              {
                label: 'Sem-1',
                id: 'sem-1',
                icon: <FaArrowCircleRight />,
              },
              {
                label: "Sem-2",
                id: 'sem-2',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-3",
                id: 'sem-3',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-4",
                id: 'sem-4',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-5",
                id: 'sem-5',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-6",
                id: 'sem-6',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-7",
                id: 'sem-7',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-8",
                id: 'sem-8',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },


            ],
          },


          {
            label: 'IT',
            id: 'it',
            icon: <EuiIcon type="arrowRight" />,
            iconWhenExpanded: <EuiIcon type="arrowDown" />,
            children: [
              {
                label: 'Sem-1',
                id: 'sem-1',
                icon: <FaArrowCircleRight />,
              },
              {
                label: "Sem-2",
                id: 'sem-2',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-3",
                id: 'sem-3',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-4",
                id: 'sem-4',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-5",
                id: 'sem-5',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-6",
                id: 'sem-6',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-7",
                id: 'sem-7',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },
              {
                label: "Sem-8",
                id: 'sem-8',
                icon: <FaArrowCircleRight />,
                callback: this.showAlert,
              },


            ],
          },

        ],
      },
      {
        label: <Link className='text-white' to='/adminDashboard/student'>Faculty</Link>,
        id: 'faculty',
        icon: <FaUserTie />
      },
      {
        label: <Link className='text-white' to='/adminDashboard/student'>Student</Link>,
        id: 'student',
        icon: <FaUsers />,
      },
      {
        label: <Link className='text-white' to='/adminDashboard/subject'>Subject</Link>,
        id: 'subject',
        icon: <FaBook />,
      },
      {
        label: <Link className='text-white' to='/adminDashboard/student'>Reports</Link>,
        id: 'report',
        icon: <FaRegFileAlt />
      },
      {
        label: <Link className='text-white' to='/adminDashboard/student'>Logs</Link>,
        id: 'log',
        icon: <FaRegCopy />
      },
    ];
    return (
      <div className='sidebar'>
        {/* <EuiAvatar
          size="l"
          name="Cat"
          imageUrl="https://source.unsplash.com/64x64/?cat"
        />&emsp; sdmv sdkv sdkv */}
        <div style={{ width: '10rem' }}>
          <EuiTreeView items={items} aria-label="Sample Folder Tree" />
        </div>
      </div>
    )
  }
}

export default SideBarComponent
