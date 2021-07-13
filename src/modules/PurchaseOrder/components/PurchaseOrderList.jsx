import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class PurchaseOrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPurchaseOrder: null,
    };
  }

  render() {
    const { purchaseOrders } = this.props;
    let count = purchaseOrders? purchaseOrders.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Date</td>
              <td>StoreId</td>
              <td>ShippingAddress</td>
              <td>BillingInfo</td>
              <td>Gross</td>
              <td>Tax</td>
              <td>Net</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {purchaseOrders && purchaseOrders.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.storeId}</td>
              <td>{item.shippingAddress}</td>
              <td>{item.billingInfo}</td>
              <td>{item.gross}</td>
              <td>{item.tax}</td>
              <td>{item.net}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editPurchaseOrderClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removePurchaseOrderClick(item)}
                >
                  <i className="fa fa-trash" />
                  ?
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        { count === 0 &&
          <NoData />
        }
      </div>
    );
  }
}

PurchaseOrderList.propTypes = {
  editPurchaseOrderClick: PropTypes.func.isRequired,
  removePurchaseOrderClick: PropTypes.func.isRequired,
  purchaseOrders: PropTypes.any.isRequired
};

export default connect(null, null)(PurchaseOrderList);
