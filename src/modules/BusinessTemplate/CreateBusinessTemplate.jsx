import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBusinessTemplate } from "./states/actions";
import ApiService from "./services/api-service";

class CreateBusinessTemplate extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeCommodyIds = this.onChangeCommodyIds.bind(this);
    this.createBusinessTemplate = this.createBusinessTemplate.bind(this);

    this.state = {
      newBusinessTemplate: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newBusinessTemplate: {
          ...prevState.newBusinessTemplate,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newBusinessTemplate: {
          ...prevState.newBusinessTemplate,
          name: name,
        },
      };
    });
  }
  onChangeDepartmentId(e) {
    const departmentId = e.target.value;

    this.setState(function (prevState) {
      return {
        newBusinessTemplate: {
          ...prevState.newBusinessTemplate,
          departmentId: departmentId,
        },
      };
    });
  }
  onChangeCommodyIds(e) {
    const commodyIds = e.target.value;

    this.setState(function (prevState) {
      return {
        newBusinessTemplate: {
          ...prevState.newBusinessTemplate,
          commodyIds: commodyIds,
        },
      };
    });
  }

  createBusinessTemplate() {
    ApiService.createBusinessTemplate(this.state.newBusinessTemplate)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The BusinessTemplate was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newBusinessTemplate } = this.state;

    return (
        <div className="m-2">
        {newBusinessTemplate ? (
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
                    value={newBusinessTemplate.name}
                    onChange={this.onChangeName}
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
                    value={newBusinessTemplate.departmentId}
                    onChange={this.onChangeDepartmentId}
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
                    value={newBusinessTemplate.commodyIds}
                    onChange={this.onChangeCommodyIds}
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
        ) : (
          <div>
            <br />
            <p>BusinessTemplate not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateBusinessTemplate })(CreateBusinessTemplate);
