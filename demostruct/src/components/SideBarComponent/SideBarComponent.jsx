import React from 'react';

import { EuiIcon, EuiTreeView, EuiToken } from '@elastic/eui';

class SideBarComponent extends React.Component {
  showAlert = () => {
    alert('You squashed a bug!');
  };

  render() {
    const items = [
      {
        label: 'CE',
        id: 'ce',
        icon: <EuiIcon type="folderClosed" />,
        iconWhenExpanded: <EuiIcon type="folderOpen" />,
        isExpanded: false,
        children: [
          {
            label: 'Sem-1',
            id: 'sem-1',
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
            label: 'Sem-2',
            id: 'sem-2',
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
            label: 'Sem-3',
            id: 'sem-3',
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
            label: 'Sem-4',
            id: 'sem-4',
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
            label: 'Sem-5',
            id: 'sem-5',
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
            label: 'Sem-6',
            id: 'sem-6',
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
            label: 'Sem-7',
            id: 'sem-7',
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
            label: 'Sem-8',
            id: 'sem-8',
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
        ],
      },


      {
        label: 'IT',
        id: 'it',
        icon: <EuiIcon type="folderClosed" />,
        iconWhenExpanded: <EuiIcon type="folderOpen" />,
        isExpanded: false,
        children: [
          {
            label: 'Sem-1',
            id: 'sem-1',
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
            label: 'Sem-2',
            id: 'sem-2',
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
            label: 'Sem-3',
            id: 'sem-3',
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
            label: 'Sem-4',
            id: 'sem-4',
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
            label: 'Sem-5',
            id: 'sem-5',
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
            label: 'Sem-6',
            id: 'sem-6',
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
            label: 'Sem-7',
            id: 'sem-7',
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
            label: 'Sem-8',
            id: 'sem-8',
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
        ],
      },


      {
        label: 'Civil',
        id: 'civil',
        icon: <EuiIcon type="folderClosed" />,
        iconWhenExpanded: <EuiIcon type="folderOpen" />,
        isExpanded: false,
        children: [
          {
            label: 'Sem-1',
            id: 'sem-1',
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
            label: 'Sem-2',
            id: 'sem-2',
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
            label: 'Sem-3',
            id: 'sem-3',
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
            label: 'Sem-4',
            id: 'sem-4',
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
            label: 'Sem-5',
            id: 'sem-5',
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
            label: 'Sem-6',
            id: 'sem-6',
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
            label: 'Sem-7',
            id: 'sem-7',
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
            label: 'Sem-8',
            id: 'sem-8',
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
        ],
      },


      {
        label: 'Mechanical',
        id: 'mechanical',
        icon: <EuiIcon type="folderClosed" />,
        iconWhenExpanded: <EuiIcon type="folderOpen" />,
        isExpanded: false,
        children: [
          {
            label: 'Sem-1',
            id: 'sem-1',
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
            label: 'Sem-2',
            id: 'sem-2',
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
            label: 'Sem-3',
            id: 'sem-3',
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
            label: 'Sem-4',
            id: 'sem-4',
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
            label: 'Sem-5',
            id: 'sem-5',
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
            label: 'Sem-6',
            id: 'sem-6',
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
            label: 'Sem-7',
            id: 'sem-7',
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
            label: 'Sem-8',
            id: 'sem-8',
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
        ],
      },

      {
        label: 'EC',
        id: 'ec',
        icon: <EuiIcon type="folderClosed" />,
        iconWhenExpanded: <EuiIcon type="folderOpen" />,
        isExpanded: false,
        children: [
          {
            label: 'Sem-1',
            id: 'sem-1',
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
            label: 'Sem-2',
            id: 'sem-2',
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
            label: 'Sem-3',
            id: 'sem-3',
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
            label: 'Sem-4',
            id: 'sem-4',
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
            label: 'Sem-5',
            id: 'sem-5',
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
            label: 'Sem-6',
            id: 'sem-6',
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
            label: 'Sem-7',
            id: 'sem-7',
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
            label: 'Sem-8',
            id: 'sem-8',
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
        ],
      },

    ];

    return (
      <div style={{ width: '10rem' }}>
        <EuiTreeView items={items} aria-label="Sample Folder Tree" />
      </div>
    );
  }
}
export default SideBarComponent;
