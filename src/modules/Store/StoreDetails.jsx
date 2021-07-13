import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStore, deleteStore } from "./states/actions";
import StoresService from "./services/api-service";
import BussinessHourList from "./components/BussinessHourList";
import EditBussinessHour from "./components/EditBussinessHour";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class StoreDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGebeya = this.onChangeGebeya.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeStoreSetting = this.onChangeStoreSetting.bind(this);
    this.onChangeOpenedOn = this.onChangeOpenedOn.bind(this);
    this.onChangeOwnerId = this.onChangeOwnerId.bind(this);
    this.onChangeBussinessHours = this.onChangeBussinessHours.bind(this);
    this.getStore = this.getStore.bind(this);
    this.updateStore = this.updateStore.bind(this);
    this.removeStore = this.removeStore.bind(this);
    
    this.state = {
      currentStore: this.props.currentStore,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentStore && this.props.match)
    //   this.getStore(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          name: name,
        },
      };
    });
  }
  onChangeGebeya(e) {
    const gebeya = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          gebeya: gebeya,
        },
      };
    });
  }
  onChangeAddress(e) {
    const address = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          address: address,
        },
      };
    });
  }
  onChangeLatitude(e) {
    const latitude = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          latitude: latitude,
        },
      };
    });
  }
  onChangeLongitude(e) {
    const longitude = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          longitude: longitude,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          status: status,
        },
      };
    });
  }
  onChangeStoreSetting(e) {
    const storeSetting = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          storeSetting: storeSetting,
        },
      };
    });
  }
  onChangeOpenedOn(e) {
    const openedOn = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          openedOn: openedOn,
        },
      };
    });
  }
  onChangeOwnerId(e) {
    const ownerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          ownerId: ownerId,
        },
      };
    });
  }
  onChangeBussinessHours(e) {
    const bussinessHours = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStore: {
          ...prevState.currentStore,
          bussinessHours: bussinessHours,
        },
      };
    });
  }

  getStore(id) {
    StoresService.get(id)
      .then((response) => {
        this.setState({
          currentStore: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStore() {
    this.props
      .updateStore(this.state.currentStore.id, this.state.currentStore)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Store was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeStore() {
    this.props
      .deleteStore(this.state.currentStore.id)
      .then(() => {
        this.props.history.push("/stores");
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
    const { currentStore } = this.state;

    return (
      <div>
      {currentStore ? (
        <div>
          <div className="edit-form">
            <h5>Store Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentStore.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Gebeya</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="gebeya"
                    value={currentStore.gebeya}
                    onChange={this.onChangeGebeya}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Address</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="address"
                    value={currentStore.address}
                    onChange={this.onChangeAddress}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Latitude</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="latitude"
                    value={currentStore.latitude}
                    onChange={this.onChangeLatitude}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Longitude</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="longitude"
                    value={currentStore.longitude}
                    onChange={this.onChangeLongitude}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">OpenedOn</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="openedOn"
                    value={currentStore.openedOn}
                    onChange={this.onChangeOpenedOn}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">OwnerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="ownerId"
                    value={currentStore.ownerId}
                    onChange={this.onChangeOwnerId}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateStore}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeStore}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>BussinessHours</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("bussinessHour")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'bussinessHour' ? (
              <Modal 
                showModal={this.state.openedModal === 'bussinessHour'} 
                closeModalClick={this.closeDialog}>
                <EditBussinessHour />
              </Modal>
              ): null}

              <BussinessHourList Store={currentStore} editBussinessHourClick={(i) => this.openEditDialog('bussinessHour')} />
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
    stores: state.stores.stores,
  };
};

export default connect(mapStateToProps, { updateStore, deleteStore })(StoreDetails);
