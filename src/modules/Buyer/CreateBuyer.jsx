import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBuyer } from "./states/actions";
import ApiService from "./services/api-service";

class CreateBuyer extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeAccountId = this.onChangeAccountId.bind(this);
    this.onChangeDefaultShippingAddress = this.onChangeDefaultShippingAddress.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDefaultBillingInfo = this.onChangeDefaultBillingInfo.bind(this);
    this.onChangeMamilas = this.onChangeMamilas.bind(this);
    this.onChangeFavourites = this.onChangeFavourites.bind(this);
    this.onChangeRecommendations = this.onChangeRecommendations.bind(this);
    this.createBuyer = this.createBuyer.bind(this);

    this.state = {
      newBuyer: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          id: id,
        },
      };
    });
  }
  onChangeFullName(e) {
    const fullName = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          fullName: fullName,
        },
      };
    });
  }
  onChangeBirthDate(e) {
    const birthDate = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          birthDate: birthDate,
        },
      };
    });
  }
  onChangeAccountId(e) {
    const accountId = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          accountId: accountId,
        },
      };
    });
  }
  onChangeDefaultShippingAddress(e) {
    const defaultShippingAddress = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          defaultShippingAddress: defaultShippingAddress,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          status: status,
        },
      };
    });
  }
  onChangeDefaultBillingInfo(e) {
    const defaultBillingInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          defaultBillingInfo: defaultBillingInfo,
        },
      };
    });
  }
  onChangeMamilas(e) {
    const mamilas = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          mamilas: mamilas,
        },
      };
    });
  }
  onChangeFavourites(e) {
    const favourites = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          favourites: favourites,
        },
      };
    });
  }
  onChangeRecommendations(e) {
    const recommendations = e.target.value;

    this.setState(function (prevState) {
      return {
        newBuyer: {
          ...prevState.newBuyer,
          recommendations: recommendations,
        },
      };
    });
  }

  createBuyer() {
    ApiService.createBuyer(this.state.newBuyer)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Buyer was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newBuyer } = this.state;

    return (
        <div className="m-2">
        {newBuyer ? (
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
                    value={newBuyer.fullName}
                    onChange={this.onChangeFullName}
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
                    value={newBuyer.birthDate}
                    onChange={this.onChangeBirthDate}
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
                    value={newBuyer.accountId}
                    onChange={this.onChangeAccountId}
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
                    value={newBuyer.defaultShippingAddress}
                    onChange={this.onChangeDefaultShippingAddress}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Mamilas</label>
                <div className="col-sm-10">
                  <input
                    type="Mamila[]"
                    className="form-control"
                    id="mamilas"
                    value={newBuyer.mamilas}
                    onChange={this.onChangeMamilas}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Favourites</label>
                <div className="col-sm-10">
                  <input
                    type="FavouriteItem[]"
                    className="form-control"
                    id="favourites"
                    value={newBuyer.favourites}
                    onChange={this.onChangeFavourites}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Recommendations</label>
                <div className="col-sm-10">
                  <input
                    type="Recommendation[]"
                    className="form-control"
                    id="recommendations"
                    value={newBuyer.recommendations}
                    onChange={this.onChangeRecommendations}
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
        ) : (
          <div>
            <br />
            <p>Buyer not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateBuyer })(CreateBuyer);
