import React, { Component } from "react";
import { connect } from "react-redux";
import { updateMamila } from "../states/actions";

class EditMamila extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeOn = this.onChangeOn.bind(this);
    this.onChangeSellerName = this.onChangeSellerName.bind(this);
    this.onChangeSellerId = this.onChangeSellerId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);

    let mamila = this.props.mamila ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentMamila: mamila,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentMamila: {
          ...prevState.currentMamila,
          id: id,
        },
      };
    });
  }
  onChangeOn(e) {
    const on = e.target.value;

    this.setState(function (prevState) {
      return {
        currentMamila: {
          ...prevState.currentMamila,
          on: on,
        },
      };
    });
  }
  onChangeSellerName(e) {
    const sellerName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentMamila: {
          ...prevState.currentMamila,
          sellerName: sellerName,
        },
      };
    });
  }
  onChangeSellerId(e) {
    const sellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentMamila: {
          ...prevState.currentMamila,
          sellerId: sellerId,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentMamila: {
          ...prevState.currentMamila,
          buyerId: buyerId,
        },
      };
    });
  }

  render() {
    const { currentMamila } = this.state;

    return (
        <div>
        {currentMamila ? (
          <div className="edit-form">
            <h4>Mamila</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">On</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="on"
                    value={currentMamila.on}
                    onChange={this.onChangeOn}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">SellerName</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="sellerName"
                    value={currentMamila.sellerName}
                    onChange={this.onChangeSellerName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">SellerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="sellerId"
                    value={currentMamila.sellerId}
                    onChange={this.onChangeSellerId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BuyerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="buyerId"
                    value={currentMamila.buyerId}
                    onChange={this.onChangeBuyerId}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={this.updateContent}
              >
                Update
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Mamila is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateMamila })(EditMamila);
