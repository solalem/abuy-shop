import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSeller, deleteSeller } from "./states/actions";
import SellersService from "./services/api-service";
import ItemList from "../Item/components/ItemList";
import BundleList from "../Bundle/components/BundleList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class SellerDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.getSeller = this.getSeller.bind(this);
    this.updateSeller = this.updateSeller.bind(this);
    this.removeSeller = this.removeSeller.bind(this);
    
    this.state = {
      currentSeller: this.props.currentSeller,
      openedModal: null,
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
  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSeller: {
          ...prevState.currentSeller,
          email: email,
        },
      };
    });
  }
  onChangePhone(e) {
    const phone = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSeller: {
          ...prevState.currentSeller,
          phone: phone,
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
                <label className="col-sm-2 col-form-label" htmlFor="name">Email</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="email"
                    value={currentSeller.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Phone</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="phone"
                    value={currentSeller.phone}
                    onChange={this.onChangePhone}
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
              <Tab>Items</Tab>
              <Tab>Bundles</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search />
              
              <ItemList />
            </TabPanel>
            <TabPanel>
              <Search />
              
              <BundleList />
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
    sellers: state.sellers.sellers,
  };
};

export default connect(mapStateToProps, { updateSeller, deleteSeller })(SellerDetails);
