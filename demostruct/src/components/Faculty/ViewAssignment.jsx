import React, { Component } from 'react'
import {
  EuiModal,
  EuiSelect,
  EuiFieldText,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiRange,
  EuiSwitch,
  EuiCodeBlock,
  EuiForm,
  EuiText,
  EuiFormRow,
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiBadge,
  EuiHealth,
  EuiButton,
  EuiButtonIcon,
  EuiCheckbox,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiSpacer,
  EuiTable,
  EuiTableBody,
  EuiTableFooter,
  EuiTableFooterCell,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableHeaderCellCheckbox,
  EuiTablePagination,
  EuiTableRow,
  EuiTableRowCell,
  EuiTableRowCellCheckbox,
  EuiTableSortMobile,
  EuiTableHeaderMobile,
} from '@elastic/eui'
import {
  LEFT_ALIGNMENT,
  RIGHT_ALIGNMENT,
  Pager,
  SortableProperties,
} from '@elastic/eui/lib/services';

import { EuiButtonEmpty } from '@elastic/eui';
//import FacultyDashboard from './FacultyDashboard'
//import { isFunction } from '../../../../../src/services/predicate';


export class ViewAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemIdToSelectedMap: {},
      itemIdToOpenActionsPopoverMap: {},
      sortedColumn: 'title',
      itemsPerPage: 10,
      //modal
      isModalVisible: false,
      isModal1Visible: false,
      isSwitchChecked: true,
    };
    //pendingModal
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    // viewAnswerModal
    this.closeModal1 = this.closeModal1.bind(this);
    this.showModal1 = this.showModal1.bind(this);

    this.items = [
      {
        id: 0,
        title:
          <EuiButtonEmpty onClick={this.showModal1}>
            {/* {modal}  */}
            Assignment1
        </EuiButtonEmpty>,
        //type: 'user',
        dateCreated: 'Tue Dec 28 2016',
        magnitude: 1,
        health: <EuiButtonEmpty onClick={this.showModal}>
          {/* {modal}  */}
          Pending
   </EuiButtonEmpty>,
        // <EuiHealth color="success">Healthy</EuiHealth>
      },

    ];

    this.sortableProperties = new SortableProperties(
      [
        {
          name: 'title',
          getValue: item => item.title.toLowerCase(),
          isAscending: true,
        },
        {
          name: 'dateCreated',
          getValue: item => item.dateCreated.toLowerCase(),
          isAscending: true,
        },
        {
          name: 'magnitude',
          getValue: item => item.magnitude.toLowerCase(),
          isAscending: true,
        },
      ],
      this.state.sortedColumn
    );

    this.columns = [
      {
        id: 'checkbox',
        isCheckbox: true,
        textOnly: false,
        width: '32px',
      },
      {
        id: 'type',
        label: '',
        alignment: LEFT_ALIGNMENT,
        width: '24px',
        cellProvider: cell => <EuiIcon type={cell} size="m" />,
        mobileOptions: {
          show: false,
        },
      },
      {
        id: 'title',
        label: 'Assignment Title',
        footer: <em>Title</em>,
        alignment: LEFT_ALIGNMENT,
        isSortable: true,
        mobileOptions: {
          show: false,
        },
      },
      {
        id: 'title_type',
        label: 'Title',
        mobileOptions: {
          only: true,
          header: false,
          enlarge: true,
          fullWidth: true,
        },
        render: (title, item) => (
          <span>
            <EuiIcon
              type={item.type}
              size="m"
              style={{ verticalAlign: 'text-top' }}
            />{' '}
            {title}
          </span>
        ),
      },
      {
        id: 'health',
        label: 'Status',
        footer: '',
        alignment: LEFT_ALIGNMENT,
      },
      {
        id: 'dateCreated',
        label: 'DeadLine',
        footer: 'Date created',
        alignment: LEFT_ALIGNMENT,
        isSortable: true,
      },

      // {
      //   id: 'magnitude',
      //   label: 'Orders of magnitude',
      //   footer: ({ items, pagination }) => {
      //     const { pageIndex, pageSize } = pagination;
      //     const startIndex = pageIndex * pageSize;
      //     const pageOfItems = items.slice(
      //       startIndex,
      //       Math.min(startIndex + pageSize, items.length)
      //     );
      //     return (


      //       <strong>
      //         Total: {pageOfItems.reduce((acc, cur) => acc + cur.magnitude, 0)}
      //       </strong>
      //     );
      //   },
      //   alignment: RIGHT_ALIGNMENT,
      //   isSortable: true,
      // },
      {
        id: 'actions',
        label: '',
        alignment: RIGHT_ALIGNMENT,
        isActionsPopover: true,
        width: '32px',
      },
    ];

    this.pager = new Pager(this.items.length, this.state.itemsPerPage);
    this.state.firstItemIndex = this.pager.getFirstItemIndex();
    this.state.lastItemIndex = this.pager.getLastItemIndex();
  }

  onChangeItemsPerPage = itemsPerPage => {
    this.pager.setItemsPerPage(itemsPerPage);
    this.setState({
      itemsPerPage,
      firstItemIndex: this.pager.getFirstItemIndex(),
      lastItemIndex: this.pager.getLastItemIndex(),
    });
  };

  onChangePage = pageIndex => {
    this.pager.goToPageIndex(pageIndex);
    this.setState({
      firstItemIndex: this.pager.getFirstItemIndex(),
      lastItemIndex: this.pager.getLastItemIndex(),
    });
  };

  onSort = prop => {
    this.sortableProperties.sortOn(prop);

    this.setState({
      sortedColumn: prop,
    });
  };

  toggleItem = itemId => {
    this.setState(previousState => {
      const newItemIdToSelectedMap = {
        ...previousState.itemIdToSelectedMap,
        [itemId]: !previousState.itemIdToSelectedMap[itemId],
      };

      return {
        itemIdToSelectedMap: newItemIdToSelectedMap,
      };
    });
  };

  toggleAll = () => {
    const allSelected = this.areAllItemsSelected();
    const newItemIdToSelectedMap = {};
    this.items.forEach(
      item => (newItemIdToSelectedMap[item.id] = !allSelected)
    );

    this.setState({
      itemIdToSelectedMap: newItemIdToSelectedMap,
    });
  };

  isItemSelected = itemId => {
    return this.state.itemIdToSelectedMap[itemId];
  };

  areAllItemsSelected = () => {
    const indexOfUnselectedItem = this.items.findIndex(
      item => !this.isItemSelected(item.id)
    );
    return indexOfUnselectedItem === -1;
  };

  areAnyRowsSelected = () => {
    return (
      Object.keys(this.state.itemIdToSelectedMap).findIndex(id => {
        return this.state.itemIdToSelectedMap[id];
      }) !== -1
    );
  };

  togglePopover = itemId => {
    this.setState(previousState => {
      const newItemIdToOpenActionsPopoverMap = {
        ...previousState.itemIdToOpenActionsPopoverMap,
        [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId],
      };

      return {
        itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
      };
    });
  };

  closePopover = itemId => {
    // only update the state if this item's popover is open
    if (this.isPopoverOpen(itemId)) {
      this.setState(previousState => {
        const newItemIdToOpenActionsPopoverMap = {
          ...previousState.itemIdToOpenActionsPopoverMap,
          [itemId]: false,
        };

        return {
          itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
        };
      });
    }
  };

  isPopoverOpen = itemId => {
    return this.state.itemIdToOpenActionsPopoverMap[itemId];
  };

  renderSelectAll = mobile => {
    return (
      <EuiCheckbox
        id="selectAllCheckbox"
        label={mobile ? 'Select all' : null}
        checked={this.areAllItemsSelected()}
        onChange={this.toggleAll.bind(this)}
        type={mobile ? null : 'inList'}
      />
    );
  };

  getTableMobileSortItems() {
    const items = [];
    this.columns.forEach(column => {
      if (column.isCheckbox || !column.isSortable) {
        return;
      }
      items.push({
        name: column.label,
        key: column.id,
        onSort: this.onSort.bind(this, column.id),
        isSorted: this.state.sortedColumn === column.id,
        isSortAscending: this.sortableProperties.isAscendingByName(column.id),
      });
    });
    return items.length ? items : null;
  }

  renderHeaderCells() {
    const headers = [];

    this.columns.forEach((column, columnIndex) => {
      if (column.isCheckbox) {
        headers.push(
          <EuiTableHeaderCellCheckbox key={column.id} width={column.width}>
            {this.renderSelectAll()}
          </EuiTableHeaderCellCheckbox>
        );
      } else {
        headers.push(
          <EuiTableHeaderCell
            key={column.id}
            align={this.columns[columnIndex].alignment}
            width={column.width}
            onSort={
              column.isSortable ? this.onSort.bind(this, column.id) : undefined
            }
            isSorted={this.state.sortedColumn === column.id}
            isSortAscending={this.sortableProperties.isAscendingByName(
              column.id
            )}
            mobileOptions={column.mobileOptions}>
            {column.label}
          </EuiTableHeaderCell>
        );
      }
    });
    return headers.length ? headers : null;
  }

  renderRows() {
    const renderRow = item => {
      const cells = this.columns.map(column => {
        const cell = item[column.id];

        let child;

        if (column.isCheckbox) {
          return (
            <EuiTableRowCellCheckbox key={column.id}>
              <EuiCheckbox
                id={`${item.id}-checkbox`}
                checked={this.isItemSelected(item.id)}
                onChange={this.toggleItem.bind(this, item.id)}
                type="inList"
              />
            </EuiTableRowCellCheckbox>
          );
        }

        if (column.isActionsPopover) {
          return (
            <EuiTableRowCell
              key={column.id}
              header={column.label}
              textOnly={false}
              hasActions={true}
              align="right">
              <EuiPopover
                id={`${item.id}-actions`}
                button={
                  <EuiButtonIcon
                    aria-label="Actions"
                    iconType="gear"
                    size="s"
                    color="text"
                    onClick={() => this.togglePopover(item.id)}
                  />
                }
                isOpen={this.isPopoverOpen(item.id)}
                closePopover={() => this.closePopover(item.id)}
                panelPaddingSize="none"
                anchorPosition="leftCenter">
                <EuiContextMenuPanel
                  items={[
                    <EuiContextMenuItem
                      key="A"
                      icon="pencil"
                      onClick={() => {
                        this.closePopover(item.id);
                      }}>
                      Edit
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="B"
                      icon="share"
                      onClick={() => {
                        this.closePopover(item.id);
                      }}>
                      Share
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="C"
                      icon="trash"
                      onClick={() => {
                        this.closePopover(item.id);
                      }}>
                      Delete
                    </EuiContextMenuItem>,
                  ]}
                />
              </EuiPopover>
            </EuiTableRowCell>
          );
        }

        if (column.render) {
          const titleText = item.title.truncateText
            ? item.title.value
            : item.title;
          const title = item.title.isLink ? (
            <EuiLink href="">{item.title.value}</EuiLink>
          ) : (
              titleText
            );
          child = column.render(title, item);
        } else if (column.cellProvider) {
          child = column.cellProvider(cell);
        } else if (cell.isLink) {
          child = <EuiLink href="">{cell.value}</EuiLink>;
        } else if (cell.truncateText) {
          child = cell.value;
        } else {
          child = cell;
        }

        return (
          <EuiTableRowCell
            key={column.id}
            align={column.alignment}
            truncateText={cell && cell.truncateText}
            textOnly={cell ? cell.textOnly : true}
            mobileOptions={{
              header: column.label,
              ...column.mobileOptions,
            }}>
            {child}
          </EuiTableRowCell>
        );
      });

      return (
        <EuiTableRow
          key={item.id}
          isSelected={this.isItemSelected(item.id)}
          isSelectable={true}
          hasActions={true}>
          {cells}
        </EuiTableRow>
      );
    };

    const rows = [];

    for (
      let itemIndex = this.state.firstItemIndex;
      itemIndex <= this.state.lastItemIndex;
      itemIndex++
    ) {
      const item = this.items[itemIndex];
      rows.push(renderRow(item));
    }

    return rows;
  }

  renderFooterCells() {
    const footers = [];

    const items = this.items;
    const pagination = {
      pageIndex: this.pager.getCurrentPageIndex(),
      pageSize: this.state.itemsPerPage,
      totalItemCount: this.pager.getTotalPages(),
    };

    this.columns.forEach(column => {
      const footer = this.getColumnFooter(column, { items, pagination });
      if (column.mobileOptions && column.mobileOptions.only) {
        return; // exclude columns that only exist for mobile headers
      }

      if (footer) {
        footers.push(
          <EuiTableFooterCell
            key={`footer_${column.id}`}
            align={column.alignment}>
            {footer}
          </EuiTableFooterCell>
        );
      } else {
        footers.push(
          <EuiTableFooterCell
            key={`footer_empty_${footers.length - 1}`}
            align={column.alignment}>
            {undefined}
          </EuiTableFooterCell>
        );
      }
    });
    return footers;
  }

  getColumnFooter = (column, { items, pagination }) => {
    if (column.footer === null) {
      return null;
    }

    if (column.footer) {
      // if (isFunction(column.footer)) {
      //   return column.footer({ items, pagination });
      // }
      return column.footer;
    }

    return undefined;
  };

  onSwitchChange = () => {
    this.setState({
      isSwitchChecked: !this.state.isSwitchChecked,
    });
  };

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }
  closeModal1() {
    this.setState({ isModal1Visible: false });
  }

  showModal1() {
    this.setState({ isModal1Visible: true });
  }
  render() {
    //modal
    let modal;
    let modal1;
    if (this.state.isModal1Visible) {
      modal1 = (
        <EuiOverlayMask>
          <EuiModal onClose={this.closeModal}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Overflow test</EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
              <EuiText>
                <p>
                  KING. Whats he that wishes so? My cousin, Westmorland? No, my
                  fair cousin; If we are mark&rsquo;d to die, we are enow To do
                  our country loss; and if to live, The fewer men, the greater
                  share of honour. God&rsquo;s will! I pray thee, wish not one
                  man more. By Jove, I am not covetous for gold, Nor care I who
                  doth feed upon my cost; It yearns me not if men my garments
                  wear; Such outward things dwell not in my desires. But if it
                  be a sin to covet honour, I am the most offending soul alive.
                  No, faith, my coz, wish not a man from England. God&rsquo;s
                  peace! I would not lose so great an honour As one man more
                  methinks would share from me For the best hope I have. O, do
                  not wish one more! Rather proclaim it, Westmorland, through my
                  host, That he which hath no stomach to this fight, Let him
                  depart; his passport shall be made, And crowns for convoy put
                  into his purse; We would not die in that man&rsquo;s company
                  That fears his fellowship to die with us. This day is
                  call&rsquo;d the feast of Crispian. He that outlives this day,
                  and comes safe home, Will stand a tip-toe when this day is
                  nam&rsquo;d, And rouse him at the name of Crispian. He that
                  shall live this day, and see old age, Will yearly on the vigil
                  feast his neighbours, And say &ldquo;To-morrow is Saint
                  Crispian.&rdquo; Then will he strip his sleeve and show his
                  scars, And say &ldquo;These wounds I had on Crispin&rsquo;s
                  day.&rdquo; Old men forget; yet all shall be forgot, But
                  he&rsquo;ll remember, with advantages, What feats he did that
                  day. Then shall our names, Familiar in his mouth as household
                  words— Harry the King, Bedford and Exeter, Warwick and Talbot,
                  Salisbury and Gloucester— Be in their flowing cups freshly
                  rememb&rsquo;red. This story shall the good man teach his son;
                  And Crispin Crispian shall ne&rsquo;er go by, From this day to
                  the ending of the world, But we in it shall be rememberèd— We
                  few, we happy few, we band of brothers; For he to-day that
                  sheds his blood with me Shall be my brother; be he ne&rsquo;er
                  so vile, This day shall gentle his condition; And gentlemen in
                  England now a-bed Shall think themselves accurs&rsquo;d they
                  were not here, And hold their manhoods cheap whiles any speaks
                  That fought with us upon Saint Crispin&rsquo;s day.
                  </p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty onClick={this.closeModal1}>Cancel</EuiButtonEmpty>

              <EuiButton onClick={this.closeModal1} fill>
                Save
                </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      );
    }
    const formSample = (
      <EuiForm>
        <EuiFormRow label="Accept Submission" >
          <EuiSelect
            options={[
              { value: 'theory', text: 'Accepted' },
              { value: 'Programming', text: 'Rejected' },

            ]}

          />
        </EuiFormRow>
        <EuiFormRow label="Grade" >
          <EuiSelect
            options={[
              { value: 'theory', text: 'A' },
              { value: 'Programming', text: 'B' },
              { value: 'Programming', text: 'C' },

            ]}

          />
        </EuiFormRow>
        <EuiFormRow label="Remarks" >
          <EuiFieldText id="remark" placeholder="Remarks If any"></EuiFieldText>
        </EuiFormRow>
        {/* <EuiSwitch
              //id={makeId()}
              name="popswitch"
              label="Isn't this modal form cool?"
              checked={this.state.isSwitchChecked}
              onChange={this.onSwitchChange}
            /> */}


        {/* <EuiFormRow label="A text field">
            <EuiFieldText name="popfirst" />
          </EuiFormRow>
  
          <EuiFormRow label="Range" helpText="Some help text for the range">
            <EuiRange min={0} max={100} name="poprange" />
          </EuiFormRow> */}

        {/* <EuiFormRow label="A SuperSelect field">
            <SuperSelectComplexExample />
          </EuiFormRow> */}

        <EuiSpacer />

        {/* <EuiCodeBlock language="html" paddingSize="s" isCopyable>
            {'<h1>Title</h1>'}
          </EuiCodeBlock> */}
      </EuiForm>
    );



    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiModal onClose={this.closeModal} initialFocus="[name=popswitch]">
            <EuiModalHeader>
              <EuiModalHeaderTitle>Review Assignment</EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>{formSample}</EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>

              <EuiButton onClick={this.closeModal} fill>
                Review
                </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      );
    }
    //modal end

    let optionalActionButtons;

    if (this.areAnyRowsSelected() > 0) {
      optionalActionButtons = (
        <EuiFlexItem grow={false}>
          <EuiButton color="danger">Delete selected</EuiButton>
        </EuiFlexItem>
      );
    }
    return (
      <div>

        <EuiPage>

          <EuiPageBody>
            <div>


              {/* <EuiButton
          onClick={() => window.location.assign('Addassignment')}
          iconType="createSingleMetricJob">
          Add Assignment
        </EuiButton> */}


              <EuiFlexGroup gutterSize="m">
                {optionalActionButtons}

                <EuiFlexItem>
                  <EuiFieldSearch fullWidth placeholder="Search..." />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="m" />

              <EuiTableHeaderMobile>
                <EuiFlexGroup
                  responsive={false}
                  justifyContent="spaceBetween"
                  alignItems="baseline">
                  <EuiFlexItem grow={false}>{this.renderSelectAll(true)}</EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiTableSortMobile items={this.getTableMobileSortItems()} />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiTableHeaderMobile>

              <EuiTable>
                <EuiTableHeader>{this.renderHeaderCells()}</EuiTableHeader>

                <EuiTableBody>{this.renderRows()}</EuiTableBody>

                <EuiTableFooter>{this.renderFooterCells()}</EuiTableFooter>
              </EuiTable>
              {modal}
              {modal1}
              <EuiSpacer size="m" />

              <EuiTablePagination
                activePage={this.pager.getCurrentPageIndex()}
                itemsPerPage={this.state.itemsPerPage}
                itemsPerPageOptions={[5, 10, 20]}
                pageCount={this.pager.getTotalPages()}
                onChangeItemsPerPage={this.onChangeItemsPerPage}
                onChangePage={this.onChangePage}
              />
            </div>

            {/* <FacultyDashboard/> */}
          </EuiPageBody>
        </EuiPage>
      </div>
    )
  }
}

export default ViewAssignment;




