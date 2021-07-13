import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDepartment, deleteDepartment } from "./states/actions";
import DepartmentsService from "./services/api-service";
import CategoryList from "../Category/components/CategoryList";
import BusinessTemplateList from "../BusinessTemplate/components/BusinessTemplateList";
import SellerList from "../Seller/components/SellerList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class DepartmentDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getDepartment = this.getDepartment.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
    this.removeDepartment = this.removeDepartment.bind(this);
    
    this.state = {
      currentDepartment: this.props.currentDepartment,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentDepartment && this.props.match)
    //   this.getDepartment(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDepartment: {
          ...prevState.currentDepartment,
          id: id,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDepartment: {
          ...prevState.currentDepartment,
          status: status,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDepartment: {
          ...prevState.currentDepartment,
          name: name,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDepartment: {
          ...prevState.currentDepartment,
          description: description,
        },
      };
    });
  }

  getDepartment(id) {
    DepartmentsService.get(id)
      .then((response) => {
        this.setState({
          currentDepartment: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateDepartment() {
    this.props
      .updateDepartment(this.state.currentDepartment.id, this.state.currentDepartment)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Department was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeDepartment() {
    this.props
      .deleteDepartment(this.state.currentDepartment.id)
      .then(() => {
        this.props.history.push("/departments");
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
    const { currentDepartment } = this.state;

    return (
      <div>
      {currentDepartment ? (
        <div>
          <div className="edit-form">
            <h5>Department Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Status</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="status"
                    value={currentDepartment.status}
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
                    value={currentDepartment.name}
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
                    value={currentDepartment.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateDepartment}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeDepartment}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Categories</Tab>
              <Tab>BusinessTemplates</Tab>
              <Tab>Sellers</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search />
              
              <CategoryList />
            </TabPanel>
            <TabPanel>
              <Search />
              
              <BusinessTemplateList />
            </TabPanel>
            <TabPanel>
              <Search />
              
              <SellerList />
            </TabPanel>

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
    departments: state.departments.departments,
  };
};

export default connect(mapStateToProps, { updateDepartment, deleteDepartment })(DepartmentDetails);
