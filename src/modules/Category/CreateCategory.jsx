import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCategory } from "./states/actions";
import ApiService from "./services/api-service";

class CreateCategory extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeIsOpen = this.onChangeIsOpen.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeParentId = this.onChangeParentId.bind(this);
    this.createCategory = this.createCategory.bind(this);

    this.state = {
      newCategory: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newCategory: {
          ...prevState.newCategory,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newCategory: {
          ...prevState.newCategory,
          name: name,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        newCategory: {
          ...prevState.newCategory,
          description: description,
        },
      };
    });
  }
  onChangeIsOpen(e) {
    const isOpen = e.target.value;

    this.setState(function (prevState) {
      return {
        newCategory: {
          ...prevState.newCategory,
          isOpen: isOpen,
        },
      };
    });
  }
  onChangeDepartmentId(e) {
    const departmentId = e.target.value;

    this.setState(function (prevState) {
      return {
        newCategory: {
          ...prevState.newCategory,
          departmentId: departmentId,
        },
      };
    });
  }
  onChangeParentId(e) {
    const parentId = e.target.value;

    this.setState(function (prevState) {
      return {
        newCategory: {
          ...prevState.newCategory,
          parentId: parentId,
        },
      };
    });
  }

  createCategory() {
    ApiService.createCategory(this.state.newCategory)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Category was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newCategory } = this.state;

    return (
        <div className="m-2">
        {newCategory ? (
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
                    value={newCategory.name}
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
                    value={newCategory.description}
                    onChange={this.onChangeDescription}
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
                    value={newCategory.isOpen}
                    onChange={this.onChangeIsOpen}
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
                    value={newCategory.departmentId}
                    onChange={this.onChangeDepartmentId}
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
                    value={newCategory.parentId}
                    onChange={this.onChangeParentId}
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
        ) : (
          <div>
            <br />
            <p>Category not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateCategory })(CreateCategory);
