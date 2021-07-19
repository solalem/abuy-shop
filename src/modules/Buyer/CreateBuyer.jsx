import React, { Component } from "react";
import { connect } from "react-redux";
import { createBuyer } from "./states/actions";
import ApiService from "./services/api-service";

class CreateBuyer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createBuyer = this.createBuyer.bind(this);

    this.state = {
      id: '',
      fullName: '',
      birthDate: '',
      accountId: '',
      defaultShippingAddress: '',
      status: '',
      defaultBillingInfo: '',
      mamilas: '',
      favourites: '',
      recommendations: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createBuyer() {
    ApiService.createBuyer(
      {
        id: this.state.id,
        fullName: this.state.fullName,
        birthDate: this.state.birthDate,
        accountId: this.state.accountId,
        defaultShippingAddress: this.state.defaultShippingAddress,
        status: this.state.status,
        defaultBillingInfo: this.state.defaultBillingInfo,
        mamilas: this.state.mamilas,
        favourites: this.state.favourites,
        recommendations: this.state.recommendations,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Buyer was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
          <div className="edit-form">
            <h4>New Buyer</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">FullName</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="fullName"
                    value={this.state.fullName}
                    onChange={(e) => this.handleChange({ fullName: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BirthDate</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="birthDate"
                    value={this.state.birthDate}
                    onChange={(e) => this.handleChange({ birthDate: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">AccountId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="accountId"
                    value={this.state.accountId}
                    onChange={(e) => this.handleChange({ accountId: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">DefaultShippingAddress</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="defaultShippingAddress"
                    value={this.state.defaultShippingAddress}
                    onChange={(e) => this.handleChange({ defaultShippingAddress: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createBuyer}
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

export default connect(null, { createBuyer })(CreateBuyer);
