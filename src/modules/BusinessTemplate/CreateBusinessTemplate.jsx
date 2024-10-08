import React, { Component } from "react";
import { connect } from "react-redux";
import { createBusinessTemplate } from "./states/actions";
import ApiService from "./services/api-service";

class CreateBusinessTemplate extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createBusinessTemplate = this.createBusinessTemplate.bind(this);

    this.state = {
      id: '',
      name: '',
      departmentId: '',
      commodyIds: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createBusinessTemplate() {
    ApiService.createBusinessTemplate(
      {
        id: this.state.id,
        name: this.state.name,
        departmentId: this.state.departmentId,
        commodyIds: this.state.commodyIds,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The BusinessTemplate was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
          <div className="edit-form">
            <h4>New BusinessTemplate</h4>
            <form>
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
                <label className="col-sm-2 col-form-label" htmlFor="name">DepartmentId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="departmentId"
                    value={this.state.departmentId}
                    onChange={(e) => this.handleChange({ departmentId: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CommodyIds</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="commodyIds"
                    value={this.state.commodyIds}
                    onChange={(e) => this.handleChange({ commodyIds: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createBusinessTemplate}
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

export default connect(null, { createBusinessTemplate })(CreateBusinessTemplate);
