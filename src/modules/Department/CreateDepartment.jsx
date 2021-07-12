import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDepartment } from "./states/actions";
import ApiService from "./services/api-service";

class CreateDepartment extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.createDepartment = this.createDepartment.bind(this);

    this.state = {
      newDepartment: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newDepartment: {
          ...prevState.newDepartment,
          id: id,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        newDepartment: {
          ...prevState.newDepartment,
          status: status,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newDepartment: {
          ...prevState.newDepartment,
          name: name,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        newDepartment: {
          ...prevState.newDepartment,
          description: description,
        },
      };
    });
  }

  createDepartment() {
    ApiService.createDepartment(this.state.newDepartment)
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
        {newDepartment ? (
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
                    value={newDepartment.status}
                    onChange={this.onChangeStatus}
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
                    value={newDepartment.name}
                    onChange={this.onChangeName}
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
                    value={newDepartment.description}
                    onChange={this.onChangeDescription}
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
        ) : (
          <div>
            <br />
            <p>Department not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateDepartment })(CreateDepartment);
