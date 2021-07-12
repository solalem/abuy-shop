import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCategory, deleteCategory } from "./states/actions";
import CategoriesService from "./services/api-service";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class CategoryDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeIsOpen = this.onChangeIsOpen.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeParentId = this.onChangeParentId.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    
    this.state = {
      currentCategory: this.props.currentCategory,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentCategory && this.props.match)
    //   this.getCategory(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          name: name,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          description: description,
        },
      };
    });
  }
  onChangeIsOpen(e) {
    const isOpen = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          isOpen: isOpen,
        },
      };
    });
  }
  onChangeDepartmentId(e) {
    const departmentId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          departmentId: departmentId,
        },
      };
    });
  }
  onChangeParentId(e) {
    const parentId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          parentId: parentId,
        },
      };
    });
  }

  getCategory(id) {
    CategoriesService.get(id)
      .then((response) => {
        this.setState({
          currentCategory: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateCategory() {
    this.props
      .updateCategory(this.state.currentCategory.id, this.state.currentCategory)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Category was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeCategory() {
    this.props
      .deleteCategory(this.state.currentCategory.id)
      .then(() => {
        this.props.history.push("/categories");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  openAddDialog = (modal) => {
    this.setState({ openedModal: modal });
  };

  openEditDialog = (modal) => {
    this.setState({ openedModal: modal });
  };

  closeDialog = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const { currentCategory } = this.state;

    return (
      <div>
      {currentCategory ? (
        <div>
          <div className="edit-form">
            <h5>Category Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentCategory.name}
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
                    value={currentCategory.description}
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
                    value={currentCategory.isOpen}
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
                    value={currentCategory.departmentId}
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
                    value={currentCategory.parentId}
                    onChange={this.onChangeParentId}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateCategory}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeCategory}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <p>More content</p>
            </TabPanel>
          </Tabs>
        </div>

        ) : (
          <div>
            <br />
            <p>Not Data Found</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps, { updateCategory, deleteCategory })(CategoryDetails);
