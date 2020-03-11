import React, { Component } from "react";

import {
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
  EuiPageContentBody,
  EuiSelect,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiText,
  EuiTitle
} from "@elastic/eui";

import {
  LEFT_ALIGNMENT,
  RIGHT_ALIGNMENT,
  Pager,
  SortableProperties
} from "@elastic/eui/lib/services";

// import { isFunction } from '../../../../../src/services/predicate';

class DataTableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemIdToSelectedMap: {},
      itemIdToOpenActionsPopoverMap: {},
      sortedColumn: "StudentId",
      itemsPerPage: 10,
      isFlyoutVisible: false
    };

    this.closeFlyout = this.closeFlyout.bind(this);
    this.showFlyout = this.showFlyout.bind(this);

    this.items = [
      {
        id: 0,
        StudentId: "D17ce163",
        Name: "Rohan",
        type: "user",
        dateCreated: "Tue Dec 28 2016",
        magnitude: 1,
        health: <EuiHealth color="success">Healthy</EuiHealth>
      }
    ];

    this.sortableProperties = new SortableProperties(
      [
        {
          name: "StudentId",
          getValue: item => item.StudentId.toLowerCase(),
          isAscending: true
        },
        {
          name: "dateCreated",
          getValue: item => item.dateCreated.toLowerCase(),
          isAscending: true
        },
        {
          name: "magnitude",
          getValue: item => item.magnitude.toLowerCase(),
          isAscending: true
        }
      ],
      this.state.sortedColumn
    );

    this.columns = [
      {
        id: "checkbox",
        isCheckbox: true,
        textOnly: false,
        width: "32px"
      },
      {
        id: "type",
        label: "",
        alignment: LEFT_ALIGNMENT,
        width: "24px",
        cellProvider: cell => <EuiIcon type={cell} size="m" />,
        mobileOptions: {
          show: false
        }
      },
      {
        id: "StudentId",
        label: "StudentId",
        footer: <em>StudentId</em>,
        alignment: LEFT_ALIGNMENT,
        isSortable: true,
        mobileOptions: {
          show: false
        }
      },
      {
        id: "StudentId_type",
        label: "StudentId",
        mobileOptions: {
          only: true,
          header: false,
          enlarge: true,
          fullWidth: true
        },
        render: (StudentId, item) => (
          <span>
            <EuiIcon
              type={item.type}
              size="m"
              style={{ verticalAlign: "text-top" }}
            />{" "}
            {StudentId}
          </span>
        )
      },
      {
        id: "health",
        label: "Health",
        footer: "",
        alignment: LEFT_ALIGNMENT
      },
      {
        id: "dateCreated",
        label: "Date created",
        footer: "Date created",
        alignment: LEFT_ALIGNMENT,
        isSortable: true
      },
      {
        id: "magnitude",
        label: "Orders of magnitude",
        footer: ({ items, pagination }) => {
          const { pageIndex, pageSize } = pagination;
          const startIndex = pageIndex * pageSize;
          const pageOfItems = items.slice(
            startIndex,
            Math.min(startIndex + pageSize, items.length)
          );
          return (
            <strong>
              Total: {pageOfItems.reduce((acc, cur) => acc + cur.magnitude, 0)}
            </strong>
          );
        },
        alignment: RIGHT_ALIGNMENT,
        isSortable: true
      },
      {
        id: "actions",
        label: "",
        alignment: RIGHT_ALIGNMENT,
        isActionsPopover: true,
        width: "50px"
      }
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
      lastItemIndex: this.pager.getLastItemIndex()
    });
  };

  onChangePage = pageIndex => {
    this.pager.goToPageIndex(pageIndex);
    this.setState({
      firstItemIndex: this.pager.getFirstItemIndex(),
      lastItemIndex: this.pager.getLastItemIndex()
    });
  };

  onSort = prop => {
    this.sortableProperties.sortOn(prop);

    this.setState({
      sortedColumn: prop
    });
  };

  toggleItem = itemId => {
    this.setState(previousState => {
      const newItemIdToSelectedMap = {
        ...previousState.itemIdToSelectedMap,
        [itemId]: !previousState.itemIdToSelectedMap[itemId]
      };

      return {
        itemIdToSelectedMap: newItemIdToSelectedMap
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
      itemIdToSelectedMap: newItemIdToSelectedMap
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
    console.log(this.state.itemIdToSelectedMap);
    return (
      // Object.keys(this.state.itemIdToSelectedMap).findIndex(id => {
      //   return this.state.itemIdToSelectedMap[id];
      // }) !== -1

      3
    );
  };

  togglePopover = itemId => {
    this.setState(previousState => {
      const newItemIdToOpenActionsPopoverMap = {
        ...previousState.itemIdToOpenActionsPopoverMap,
        [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId]
      };

      return {
        itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap
      };
    });
  };

  closePopover = itemId => {
    // only update the state if this item's popover is open
    if (this.isPopoverOpen(itemId)) {
      this.setState(previousState => {
        const newItemIdToOpenActionsPopoverMap = {
          ...previousState.itemIdToOpenActionsPopoverMap,
          [itemId]: false
        };

        return {
          itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap
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
        label={mobile ? "Select all" : null}
        checked={this.areAllItemsSelected()}
        onChange={this.toggleAll.bind(this)}
        type={mobile ? null : "inList"}
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
        isSortAscending: this.sortableProperties.isAscendingByName(column.id)
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
            mobileOptions={column.mobileOptions}
          >
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
              align="right"
            >
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
                anchorPosition="leftCenter"
              >
                <EuiContextMenuPanel
                  items={[
                    <EuiContextMenuItem
                      key="A"
                      icon="pencil"
                      onClick={() => {
                        this.closePopover(item.id);
                      }}
                    >
                      Edit
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="B"
                      icon="share"
                      onClick={() => {
                        this.closePopover(item.id);
                      }}
                    >
                      Share
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="C"
                      icon="trash"
                      onClick={() => {
                        this.closePopover(item.id);
                      }}
                    >
                      Delete
                    </EuiContextMenuItem>
                  ]}
                />
              </EuiPopover>
            </EuiTableRowCell>
          );
        }

        if (column.render) {
          const StudentIdText = item.StudentId.truncateText
            ? item.StudentId.value
            : item.StudentId;
          const StudentId = item.StudentId.isLink ? (
            <EuiLink href="">{item.StudentId.value}</EuiLink>
          ) : (
            StudentIdText
          );
          child = column.render(StudentId, item);
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
              ...column.mobileOptions
            }}
          >
            {child}
          </EuiTableRowCell>
        );
      });

      return (
        <EuiTableRow
          key={item.id}
          isSelected={this.isItemSelected(item.id)}
          isSelectable={true}
          hasActions={true}
        >
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
      totalItemCount: this.pager.getTotalPages()
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
            align={column.alignment}
          >
            {footer}
          </EuiTableFooterCell>
        );
      } else {
        footers.push(
          <EuiTableFooterCell
            key={`footer_empty_${footers.length - 1}`}
            align={column.alignment}
          >
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

    //     if (column.footer) {
    //       if (isFunction(column.footer)) {
    //         return column.footer({ items, pagination });
    //       }
    //       return column.footer;
    //     }

    //     return undefined;
  };

  closeFlyout() {
    this.setState({ isFlyoutVisible: false });
  }

  showFlyout() {
    this.setState({ isFlyoutVisible: true });
  }
  render() {
    let optionalActionButtons;
    let flyout;

    console.log(this.areAnyRowsSelected());

    if (this.areAnyRowsSelected() > 0) {
      optionalActionButtons = (
        <EuiFlexItem grow={false}>
          <EuiButton color="danger">Delete selected</EuiButton>
        </EuiFlexItem>
      );

      if (this.state.isFlyoutVisible) {
        flyout = (
          <EuiFlyout
            ownFocus
            onClose={this.closeFlyout}
            size="s"
            aria-labelledby="flyoutSmallTitle"
          >
            <EuiFlyoutHeader hasBorder>
              <EuiTitle size="s">
                <h2 id="flyoutSmallTitle">A small flyout</h2>
              </EuiTitle>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
              <EuiText>
                <p>
                  In small flyouts, it is ok to reduce the header size to{" "}
                  <code>s</code>.
                </p>
              </EuiText>
            </EuiFlyoutBody>
          </EuiFlyout>
        );
      }
      return (
        <div className="studentTable">
          <div className="header">
            <h1>Student Table</h1>
            <div>
              {/* <EuiButton size='s' fill className='add'>Add</EuiButton> */}
              <EuiButton onClick={this.showFlyout}>Show small flyout</EuiButton>
              {flyout}
              <div className="dropdown">
                <EuiSelect
                  options={[
                    { value: "option_one", text: "Option one" },
                    { value: "option_two", text: "Option two" },
                    { value: "option_three", text: "Option three" }
                  ]}
                  compressed
                />
              </div>
              <div className="dropdown">
                <EuiSelect
                  options={[
                    { value: "option_one", text: "Option one" },
                    { value: "option_two", text: "Option two" },
                    { value: "option_three", text: "Option three" }
                  ]}
                  compressed
                />
              </div>
            </div>
          </div>

          <EuiPageContentBody>
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
                alignItems="baseline"
              >
                <EuiFlexItem grow={false}>
                  {this.renderSelectAll(true)}
                </EuiFlexItem>
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

            <EuiSpacer size="m" />

            <EuiTablePagination
              activePage={this.pager.getCurrentPageIndex()}
              itemsPerPage={this.state.itemsPerPage}
              itemsPerPageOptions={[5, 10, 20]}
              pageCount={this.pager.getTotalPages()}
              onChangeItemsPerPage={this.onChangeItemsPerPage}
              onChangePage={this.onChangePage}
            />
          </EuiPageContentBody>
        </div>
      );
    }
  }
}
export default DataTableComponent;
