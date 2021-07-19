import React, { Component } from "react";
import { connect } from "react-redux";
import { createDepartment } from "./states/actions";
import ApiService from "./services/api-service";

class CreateDepartment extends Component {
  constructor(props) {
    super(props);
    //this.onChangeId = this.onChangeId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onChangeStatus = this.onChangeStatus.bind(this);
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.createDepartment = this.createDepartment.bind(this);

    this.state = {
      status: '',
      name: '',
      description: '',
      message: '',
    };
  }

  // componentDidMount() {
  // }

  // onChangeId(e) {
  //   const id = e.target.value;

  //   this.setState(function (prevState) {
  //     return {
  //       newDepartment: {
  //         ...prevState.newDepartment,
  //         id: id,
  //       },
  //     };
  //   });
  // }
  
  handleChange(changeObject) {
    this.setState(changeObject)
  }

  // onChangeStatus(e) {
  //   const status = e.target.value;

  //   this.setState(function (prevState) {
  //     return {
  //       newDepartment: {
  //         ...prevState.newDepartment,
  //         status: status,
  //       },
  //     };
  //   });
  // }
  // onChangeName(e) {
  //   const name = e.target.value;

  //   this.setState(function (prevState) {
  //     return {
  //       newDepartment: {
  //         ...prevState.newDepartment,
  //         name: name,
  //       },
  //     };
  //   });
  // }
  // onChangeDescription(e) {
  //   const description = e.target.value;

  //   this.setState(function (prevState) {
  //     return {
  //       newDepartment: {
  //         ...prevState.newDepartment,
  //         description: description,
  //       },
  //     };
  //   });
  // }

  createDepartment() {
    this.props.createDepartment(
      {
        name: this.state.name,
        description: this.state.description,
        status: this.state.status,
      })
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Department was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newDepartment } = this.state;

    return (
      <div className="m-2">
        
        <div className="edit-form">
            <h4>New Department</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Status</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="status"
                    value={this.state.status}
                    onChange={(e) => this.handleChange({ status: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Description</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="description"
                    value={this.state.description}
                    onChange={(e) => this.handleChange({ description: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createDepartment}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
      </div>
    );
  }
}

export default connect(null, { createDepartment })(CreateDepartment);
