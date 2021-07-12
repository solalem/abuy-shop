import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePurchaseOrder } from "./states/actions";
import ApiService from "./services/api-service";

class CreatePurchaseOrder extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStoreId = this.onChangeStoreId.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeShippingAddress = this.onChangeShippingAddress.bind(this);
    this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
    this.onChangeDeliveryOption = this.onChangeDeliveryOption.bind(this);
    this.onChangeBillingInfo = this.onChangeBillingInfo.bind(this);
    this.onChangeGross = this.onChangeGross.bind(this);
    this.onChangeTax = this.onChangeTax.bind(this);
    this.onChangeNet = this.onChangeNet.bind(this);
    this.onChangeLineItems = this.onChangeLineItems.bind(this);
    this.createPurchaseOrder = this.createPurchaseOrder.bind(this);

    this.state = {
      newPurchaseOrder: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          name: name,
        },
      };
    });
  }
  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          email: email,
        },
      };
    });
  }
  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          date: date,
        },
      };
    });
  }
  onChangeStoreId(e) {
    const storeId = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          storeId: storeId,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          status: status,
        },
      };
    });
  }
  onChangeShippingAddress(e) {
    const shippingAddress = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          shippingAddress: shippingAddress,
        },
      };
    });
  }
  onChangePaymentMethod(e) {
    const paymentMethod = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          paymentMethod: paymentMethod,
        },
      };
    });
  }
  onChangeDeliveryOption(e) {
    const deliveryOption = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          deliveryOption: deliveryOption,
        },
      };
    });
  }
  onChangeBillingInfo(e) {
    const billingInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          billingInfo: billingInfo,
        },
      };
    });
  }
  onChangeGross(e) {
    const gross = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          gross: gross,
        },
      };
    });
  }
  onChangeTax(e) {
    const tax = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          tax: tax,
        },
      };
    });
  }
  onChangeNet(e) {
    const net = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          net: net,
        },
      };
    });
  }
  onChangeLineItems(e) {
    const lineItems = e.target.value;

    this.setState(function (prevState) {
      return {
        newPurchaseOrder: {
          ...prevState.newPurchaseOrder,
          lineItems: lineItems,
        },
      };
    });
  }

  createPurchaseOrder() {
    ApiService.createPurchaseOrder(this.state.newPurchaseOrder)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The PurchaseOrder was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newPurchaseOrder } = this.state;

    return (
        <div className="m-2">
        {newPurchaseOrder ? (
          <div className="edit-form">
            <h4>New PurchaseOrder</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={newPurchaseOrder.name}
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
                    value={newPurchaseOrder.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Date</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={newPurchaseOrder.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">StoreId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="storeId"
                    value={newPurchaseOrder.storeId}
                    onChange={this.onChangeStoreId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ShippingAddress</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="shippingAddress"
                    value={newPurchaseOrder.shippingAddress}
                    onChange={this.onChangeShippingAddress}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BillingInfo</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="billingInfo"
                    value={newPurchaseOrder.billingInfo}
                    onChange={this.onChangeBillingInfo}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Gross</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="gross"
                    value={newPurchaseOrder.gross}
                    onChange={this.onChangeGross}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Tax</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="tax"
                    value={newPurchaseOrder.tax}
                    onChange={this.onChangeTax}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Net</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="net"
                    value={newPurchaseOrder.net}
                    onChange={this.onChangeNet}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createPurchaseOrder}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>PurchaseOrder not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updatePurchaseOrder })(CreatePurchaseOrder);
