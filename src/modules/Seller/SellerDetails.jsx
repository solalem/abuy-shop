import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSeller, deleteSeller } from "./states/actions";
import SellersService from "./services/api-service";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class SellerDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeCommodyIds = this.onChangeCommodyIds.bind(this);
    this.getSeller = this.getSeller.bind(this);
    this.updateSeller = this.updateSeller.bind(this);
    this.removeSeller = this.removeSeller.bind(this);
    
    this.state = {
      currentSeller: this.props.currentSeller,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentSeller && this.props.match)
    //   this.getSeller(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSeller: {
          ...prevState.currentSeller,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSeller: {
          ...prevState.currentSeller,
          name: name,
        },
      };
    });
  }
  onChangeDepartmentId(e) {
    const departmentId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSeller: {
          ...prevState.currentSeller,
          departmentId: departmentId,
        },
      };
    });
  }
  onChangeCommodyIds(e) {
    const commodyIds = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSeller: {
          ...prevState.currentSeller,
          commodyIds: commodyIds,
        },
      };
    });
  }

  getSeller(id) {
    SellersService.get(id)
      .then((response) => {
        this.setState({
          currentSeller: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateSeller() {
    this.props
      .updateSeller(this.state.currentSeller.id, this.state.currentSeller)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Seller was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeSeller() {
    this.props
      .deleteSeller(this.state.currentSeller.id)
      .then(() => {
        this.props.history.push("/sellers");
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
    const { currentSeller } = this.state;

    return (
      <div>
      {currentSeller ? (
        <div>
          <div className="edit-form">
            <h5>Seller Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentSeller.name}
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
                    value={currentSeller.departmentId}
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
                    value={currentSeller.commodyIds}
                    onChange={this.onChangeCommodyIds}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateSeller}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeSeller}
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
    sellers: state.sellers.sellers,
  };
};

export default connect(mapStateToProps, { updateSeller, deleteSeller })(SellerDetails);
