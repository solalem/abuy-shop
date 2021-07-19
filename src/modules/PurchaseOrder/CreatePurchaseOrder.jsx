import React, { Component } from "react";
import { connect } from "react-redux";
import { createPurchaseOrder } from "./states/actions";
import ApiService from "./services/api-service";

class CreatePurchaseOrder extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createPurchaseOrder = this.createPurchaseOrder.bind(this);

    this.state = {
      id: '',
      name: '',
      email: '',
      date: '',
      storeId: '',
      status: '',
      shippingAddress: '',
      paymentMethod: '',
      deliveryOption: '',
      billingInfo: '',
      gross: '',
      tax: '',
      net: '',
      lineItems: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createPurchaseOrder() {
    ApiService.createPurchaseOrder(
      {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        date: this.state.date,
        storeId: this.state.storeId,
        status: this.state.status,
        shippingAddress: this.state.shippingAddress,
        paymentMethod: this.state.paymentMethod,
        deliveryOption: this.state.deliveryOption,
        billingInfo: this.state.billingInfo,
        gross: this.state.gross,
        tax: this.state.tax,
        net: this.state.net,
        lineItems: this.state.lineItems,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The PurchaseOrder was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
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
                    value={this.state.email}
                    onChange={(e) => this.handleChange({ email: e.target.value })}
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
                    value={this.state.date}
                    onChange={(e) => this.handleChange({ date: e.target.value })}
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
                    value={this.state.storeId}
                    onChange={(e) => this.handleChange({ storeId: e.target.value })}
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
                    value={this.state.shippingAddress}
                    onChange={(e) => this.handleChange({ shippingAddress: e.target.value })}
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
                    value={this.state.billingInfo}
                    onChange={(e) => this.handleChange({ billingInfo: e.target.value })}
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
                    value={this.state.gross}
                    onChange={(e) => this.handleChange({ gross: e.target.value })}
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
                    value={this.state.tax}
                    onChange={(e) => this.handleChange({ tax: e.target.value })}
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
                    value={this.state.net}
                    onChange={(e) => this.handleChange({ net: e.target.value })}
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
      </div>
    );
  }
}

export default connect(null, { createPurchaseOrder })(CreatePurchaseOrder);
