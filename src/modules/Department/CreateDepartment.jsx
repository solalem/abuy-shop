import React, { Component } from "react";
import { connect } from "react-redux";
import { createDepartment } from "./states/actions";
import ApiService from "./services/api-service";

class CreateDepartment extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createDepartment = this.createDepartment.bind(this);

    this.state = {
      id: '',
      status: '',
      name: '',
      description: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createDepartment() {
    ApiService.createDepartment(
      {
        id: this.state.id,
        status: this.state.status,
        name: this.state.name,
        description: this.state.description,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Department was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

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
