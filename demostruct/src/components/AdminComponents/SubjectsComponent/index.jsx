import React, { Component } from "react";
import DataTableComponent from '../dataTableComponent'

class SubjectComponent extends Component { 
  render() {
    return (
      <div className="studentTable">
        <DataTableComponent />
      </div>
    );
  }
}

export default SubjectComponent;
