import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBusinessTemplate, deleteBusinessTemplate } from "./states/actions";
import BusinessTemplatesService from "./services/api-service";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class BusinessTemplateDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeCommodyIds = this.onChangeCommodyIds.bind(this);
    this.getBusinessTemplate = this.getBusinessTemplate.bind(this);
    this.updateBusinessTemplate = this.updateBusinessTemplate.bind(this);
    this.removeBusinessTemplate = this.removeBusinessTemplate.bind(this);
    
    this.state = {
      currentBusinessTemplate: this.props.currentBusinessTemplate,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentBusinessTemplate && this.props.match)
    //   this.getBusinessTemplate(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBusinessTemplate: {
          ...prevState.currentBusinessTemplate,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBusinessTemplate: {
          ...prevState.currentBusinessTemplate,
          name: name,
        },
      };
    });
  }
  onChangeDepartmentId(e) {
    const departmentId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBusinessTemplate: {
          ...prevState.currentBusinessTemplate,
          departmentId: departmentId,
        },
      };
    });
  }
  onChangeCommodyIds(e) {
    const commodyIds = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBusinessTemplate: {
          ...prevState.currentBusinessTemplate,
          commodyIds: commodyIds,
        },
      };
    });
  }

  getBusinessTemplate(id) {
    BusinessTemplatesService.get(id)
      .then((response) => {
        this.setState({
          currentBusinessTemplate: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateBusinessTemplate() {
    this.props
      .updateBusinessTemplate(this.state.currentBusinessTemplate.id, this.state.currentBusinessTemplate)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The BusinessTemplate was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeBusinessTemplate() {
    this.props
      .deleteBusinessTemplate(this.state.currentBusinessTemplate.id)
      .then(() => {
        this.props.history.push("/business-templates");
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
    const { currentBusinessTemplate } = this.state;

    return (
      <div>
      {currentBusinessTemplate ? (
        <div>
          <div className="edit-form">
            <h5>BusinessTemplate Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentBusinessTemplate.name}
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
                    value={currentBusinessTemplate.departmentId}
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
                    value={currentBusinessTemplate.commodyIds}
                    onChange={this.onChangeCommodyIds}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateBusinessTemplate}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeBusinessTemplate}
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
    businessTemplates: state.businessTemplates.businessTemplates,
  };
};

export default connect(mapStateToProps, { updateBusinessTemplate, deleteBusinessTemplate })(BusinessTemplateDetails);
