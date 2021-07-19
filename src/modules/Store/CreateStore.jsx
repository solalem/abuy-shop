import React, { Component } from "react";
import { connect } from "react-redux";
import { createStore } from "./states/actions";
import ApiService from "./services/api-service";

class CreateStore extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createStore = this.createStore.bind(this);

    this.state = {
      id: '',
      name: '',
      gebeya: '',
      address: '',
      latitude: '',
      longitude: '',
      status: '',
      storeSetting: '',
      openedOn: '',
      ownerId: '',
      bussinessHours: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createStore() {
    ApiService.createStore(
      {
        id: this.state.id,
        name: this.state.name,
        gebeya: this.state.gebeya,
        address: this.state.address,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        status: this.state.status,
        storeSetting: this.state.storeSetting,
        openedOn: this.state.openedOn,
        ownerId: this.state.ownerId,
        bussinessHours: this.state.bussinessHours,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Store was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
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
                    value={this.state.gebeya}
                    onChange={(e) => this.handleChange({ gebeya: e.target.value })}
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
                    value={this.state.address}
                    onChange={(e) => this.handleChange({ address: e.target.value })}
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
                    value={this.state.latitude}
                    onChange={(e) => this.handleChange({ latitude: e.target.value })}
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
                    value={this.state.longitude}
                    onChange={(e) => this.handleChange({ longitude: e.target.value })}
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
                    value={this.state.openedOn}
                    onChange={(e) => this.handleChange({ openedOn: e.target.value })}
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
                    value={this.state.ownerId}
                    onChange={(e) => this.handleChange({ ownerId: e.target.value })}
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
      </div>
    );
  }
}

export default connect(null, { createStore })(CreateStore);
