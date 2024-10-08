import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class OrderLineList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrderLine: null,
    };
  }

  render() {
    const { orderLines } = this.props;
    let count = orderLines? orderLines.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>ItemName</td>
              <td>ItemCode</td>
              <td>PurchaseOrderId</td>
              <td>Quantity</td>
              <td>UnitPrice</td>
              <td>TotalPrice</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {orderLines && orderLines.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editOrderLineClick(item)}
              >
              <td>{item.itemName}</td>
              <td>{item.itemCode}</td>
              <td>{item.purchaseOrderId}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.totalPrice}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeOrderLineClick(item)}
                >
                  <FaTrash />
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

OrderLineList.propTypes = {
  editOrderLineClick: PropTypes.func.isRequired,
  removeOrderLineClick: PropTypes.func.isRequired,
  orderLines: PropTypes.any.isRequired
};

export default connect(null, null)(OrderLineList);
