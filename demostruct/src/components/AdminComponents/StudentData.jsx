import React, { Component, Fragment } from "react";
import ReactFileReader from "react-file-reader";
import DataTable from "./DataTable";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiFieldText,
  EuiFieldPassword,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle
} from "@elastic/eui";

const data = [
  {
    id: 1,
    firstName: "Nawal",
    lastName: "Kishor",
    Email: "nawal2733@gmail.com",
    age: 26
  },
  {
    id: 2,
    firstName: "Nawal",
    lastName: "Kishor",
    Email: "nawal2733@gmail.com",
    age: 26
  },
  {
    id: 3,
    firstName: "Nawal",
    lastName: "Kishor",
    Email: "nawal2733@gmail.com",
    age: 26
  }
];
const fieldName = ["id", "firstName", "lastName", "Email", "age", "actions"];

const actions = [
  {
    name: "Clone",
    description: "Clone this person",
    icon: "copy",
    type: "icon"
    // onClick: this.cloneUser
  },
  {
    name: "Delete",
    description: "Delete this person",
    icon: "trash",
    type: "icon",
    color: "danger"
    // onClick: this.deleteUser
  }
];

class StudentData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      files: {},
      large: true
    };

    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  deleteUser = user => {
    store.deleteUsers(user.id);
    this.setState({ selectedItems: [] });
  };

  cloneUser = user => {
    store.cloneUser(user.id);
    this.setState({ selectedItems: [] });
  };

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  onChange = files => {
    this.setState({
      files: files
    });
  };
  renderFiles() {
    if (this.state.files.length > 0) {
      return (
        <ul>
          {Object.keys(this.state.files).map((item, i) => (
            <li key={i}>
              <strong>{this.state.files[item].name}</strong> (
              {this.state.files[item].size} bytes)
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p>Add some files to see a demo of retrieving from the FileList</p>
      );
    }
  }

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      console.log(reader.result);
      let result = reader.result;
    };
    reader.readAsText(files[0]);
  };

  render() {
    let modal;

    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiModal onClose={this.closeModal}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Add</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <h4>Add via CSV!!</h4>
              <Fragment>
                <EuiFlexGroup>
                  <EuiFlexItem grow={2}>
                    <ReactFileReader
                      handleFiles={this.handleFiles}
                      fileTypes={".csv"}
                    >
                      {/* <button className="btn">Upload your CSV</button> */}
                      <EuiButton
                        className="btn"
                        size="s"
                        fill
                        // onClick={() => window.alert("Button clicked")}
                      >
                        Upload your CSV
                      </EuiButton>
                    </ReactFileReader>

                    {/* <EuiFilePicker
                      id="asdf2"
                      multiple
                      initialPromptText="Select or drag and drop multiple files"
                      onChange={files => {
                        this.onChange(files);
                      }}
                      display={this.state.large ? "large" : "default"}
                    /> */}
                    <EuiSpacer />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    {/* <EuiText>
                      <h3>Files attached</h3>
                      {this.renderFiles()}
                    </EuiText> */}
                  </EuiFlexItem>
                </EuiFlexGroup>
              </Fragment>

              <hr />

              <h4>Add Manualy!!</h4>
              <div>
                <EuiFieldText
                  placeholder="Username"
                  value={this.state.value}
                  onChange={this.onChange}
                  aria-label="Use aria labels when no actual label is in use"
                />
                <EuiSpacer />
                <EuiFieldText
                  placeholder="Email"
                  value={this.state.value}
                  onChange={this.onChange}
                  aria-label="Use aria labels when no actual label is in use"
                />
                <EuiSpacer />
                <EuiFieldPassword
                  placeholder="Password"
                  value={this.state.value}
                  onChange={this.onChange}
                  aria-label="Use aria labels when no actual label is in use"
                />
                <EuiSpacer />

                <EuiButton
                  size="s"
                  fill
                  onClick={() => window.alert("Button clicked")}
                >
                  Upload
                </EuiButton>
              </div>
            </EuiModalBody>
            <EuiModalFooter>
              <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>

              <EuiButton onClick={this.closeModal} fill>
                Save
              </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      );
    }
    return (
      <div className="">
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Student Data</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection>
            <EuiButton size="s" onClick={this.showModal}>
              Add
            </EuiButton>
            {modal}
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContent>
          <EuiPageContentBody>
            <DataTable fieldName={fieldName} data={data} />
          </EuiPageContentBody>
        </EuiPageContent>
      </div>
    );
  }
}
export default StudentData;
