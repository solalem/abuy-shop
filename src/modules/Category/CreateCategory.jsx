import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory } from "./states/actions";
import ApiService from "./services/api-service";

class CreateCategory extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createCategory = this.createCategory.bind(this);

    this.state = {
      id: '',
      name: '',
      description: '',
      isOpen: '',
      departmentId: '',
      parentId: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createCategory() {
    ApiService.createCategory(
      {
        id: this.state.id,
        name: this.state.name,
        description: this.state.description,
        isOpen: this.state.isOpen,
        departmentId: this.state.departmentId,
        parentId: this.state.parentId,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Category was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
          <div className="edit-form">
            <h4>New Category</h4>
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
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsOpen</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isOpen"
                    value={this.state.isOpen}
                    onChange={(e) => this.handleChange({ isOpen: e.target.value })}
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
                <label className="col-sm-2 col-form-label" htmlFor="name">ParentId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="parentId"
                    value={this.state.parentId}
                    onChange={(e) => this.handleChange({ parentId: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createCategory}
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

export default connect(null, { createCategory })(CreateCategory);
