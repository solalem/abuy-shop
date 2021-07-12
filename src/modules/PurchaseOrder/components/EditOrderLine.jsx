import React, { Component } from "react";
import { connect } from "react-redux";
import { updateOrderLine } from "../states/actions";

class EditOrderLine extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemCode = this.onChangeItemCode.bind(this);
    this.onChangeOrderId = this.onChangeOrderId.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
    this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);

    let orderLine = this.props.orderLine ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentOrderLine: orderLine,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          id: id,
        },
      };
    });
  }
  onChangeItemName(e) {
    const itemName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          itemName: itemName,
        },
      };
    });
  }
  onChangeItemCode(e) {
    const itemCode = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          itemCode: itemCode,
        },
      };
    });
  }
  onChangeOrderId(e) {
    const orderId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          orderId: orderId,
        },
      };
    });
  }
  onChangeQuantity(e) {
    const quantity = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          quantity: quantity,
        },
      };
    });
  }
  onChangeUnitPrice(e) {
    const unitPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          unitPrice: unitPrice,
        },
      };
    });
  }
  onChangeTotalPrice(e) {
    const totalPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrderLine: {
          ...prevState.currentOrderLine,
          totalPrice: totalPrice,
        },
      };
    });
  }

  render() {
    const { currentOrderLine } = this.state;

    return (
        <div>
        {currentOrderLine ? (
          <div className="edit-form">
            <h4>OrderLine</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemName</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemName"
                    value={currentOrderLine.itemName}
                    onChange={this.onChangeItemName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemCode</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemCode"
                    value={currentOrderLine.itemCode}
                    onChange={this.onChangeItemCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">OrderId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="orderId"
                    value={currentOrderLine.orderId}
                    onChange={this.onChangeOrderId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Quantity</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    value={currentOrderLine.quantity}
                    onChange={this.onChangeQuantity}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">UnitPrice</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="unitPrice"
                    value={currentOrderLine.unitPrice}
                    onChange={this.onChangeUnitPrice}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">TotalPrice</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="totalPrice"
                    value={currentOrderLine.totalPrice}
                    onChange={this.onChangeTotalPrice}
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
            <p>OrderLine is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateOrderLine })(EditOrderLine);
