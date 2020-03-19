import React, { Component } from "react";
import { EuiBasicTable } from "@elastic/eui";

class DataTable extends Component {
  state = {
    data: this.props
  };
  render() {
    const fieldname = this.state.data.fieldName;
    const store = this.state.data.data;

    const columns = [];
    fieldname.forEach(name => {
      columns.push({ field: name, name: name });
    });

    const items = store.filter((user, index) => index < 10);
    console.log({ items });

    const getRowProps = item => {
      const { id } = item;
      return {
        "data-test-subj": `row-${id}`,
        className: "customRowClass",
        onClick: () => console.log(`Clicked row ${id}`)
      };
    };

    const getCellProps = (item, column) => {
      const { id } = item;
      const { field } = column;
      return {
        className: "customCellClass",
        "data-test-subj": `cell-${id}-${field}`,
        textOnly: true
      };
    };

    return (
      <div>
        <EuiBasicTable
          items={items}
          rowHeader="firstName"
          columns={columns}
          rowProps={getRowProps}
          cellProps={getCellProps}
        />
      </div>
    );
  }
}

export default DataTable;
