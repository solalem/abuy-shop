import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "./states/actions";
import ApiService from "./services/api-service";

class CreateCart extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);
    this.onChangeCreatedOn = this.onChangeCreatedOn.bind(this);
    this.onChangeIsSaved = this.onChangeIsSaved.bind(this);
    this.onChangeLineItems = this.onChangeLineItems.bind(this);
    this.onChangeVisitInfo = this.onChangeVisitInfo.bind(this);
    this.createCart = this.createCart.bind(this);

    this.state = {
      newCart: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newCart: {
          ...prevState.newCart,
          id: id,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        newCart: {
          ...prevState.newCart,
          buyerId: buyerId,
        },
      };
    });
  }
  onChangeCreatedOn(e) {
    const createdOn = e.target.value;

    this.setState(function (prevState) {
      return {
        newCart: {
          ...prevState.newCart,
          createdOn: createdOn,
        },
      };
    });
  }
  onChangeIsSaved(e) {
    const isSaved = e.target.value;

    this.setState(function (prevState) {
      return {
        newCart: {
          ...prevState.newCart,
          isSaved: isSaved,
        },
      };
    });
  }
  onChangeLineItems(e) {
    const lineItems = e.target.value;

    this.setState(function (prevState) {
      return {
        newCart: {
          ...prevState.newCart,
          lineItems: lineItems,
        },
      };
    });
  }
  onChangeVisitInfo(e) {
    const visitInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        newCart: {
          ...prevState.newCart,
          visitInfo: visitInfo,
        },
      };
    });
  }

  createCart() {
    ApiService.createCart(this.state.newCart)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Cart was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newCart } = this.state;

    return (
        <div className="m-2">
        {newCart ? (
          <div className="edit-form">
            <h4>New Cart</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BuyerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="buyerId"
                    value={newCart.buyerId}
                    onChange={this.onChangeBuyerId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CreatedOn</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="createdOn"
                    value={newCart.createdOn}
                    onChange={this.onChangeCreatedOn}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsSaved</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isSaved"
                    value={newCart.isSaved}
                    onChange={this.onChangeIsSaved}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createCart}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Cart not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateCart })(CreateCart);
