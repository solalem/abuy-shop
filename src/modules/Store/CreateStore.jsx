import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStore } from "./states/actions";
import ApiService from "./services/api-service";

class CreateStore extends Component {
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
    this.createStore = this.createStore.bind(this);

    this.state = {
      newStore: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          name: name,
        },
      };
    });
  }
  onChangeGebeya(e) {
    const gebeya = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          gebeya: gebeya,
        },
      };
    });
  }
  onChangeAddress(e) {
    const address = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          address: address,
        },
      };
    });
  }
  onChangeLatitude(e) {
    const latitude = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          latitude: latitude,
        },
      };
    });
  }
  onChangeLongitude(e) {
    const longitude = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          longitude: longitude,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          status: status,
        },
      };
    });
  }
  onChangeStoreSetting(e) {
    const storeSetting = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          storeSetting: storeSetting,
        },
      };
    });
  }
  onChangeOpenedOn(e) {
    const openedOn = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          openedOn: openedOn,
        },
      };
    });
  }
  onChangeOwnerId(e) {
    const ownerId = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          ownerId: ownerId,
        },
      };
    });
  }
  onChangeBussinessHours(e) {
    const bussinessHours = e.target.value;

    this.setState(function (prevState) {
      return {
        newStore: {
          ...prevState.newStore,
          bussinessHours: bussinessHours,
        },
      };
    });
  }

  createStore() {
    ApiService.createStore(this.state.newStore)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Store was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newStore } = this.state;

    return (
        <div className="m-2">
        {newStore ? (
          <div className="edit-form">
            <h4>New Store</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={newStore.name}
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
                    value={newStore.gebeya}
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
                    value={newStore.address}
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
                    value={newStore.latitude}
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
                    value={newStore.longitude}
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
                    value={newStore.openedOn}
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
                    value={newStore.ownerId}
                    onChange={this.onChangeOwnerId}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createStore}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Store not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateStore })(CreateStore);
