import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeOrderLine } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class OrderLineList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrderLine: null,
    };
  }

  render() {
    const { orderLines } = this.props.OrderLine;
    let count = orderLines? orderLines.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>ItemName</td>
              <td>ItemCode</td>
              <td>OrderId</td>
              <td>Quantity</td>
              <td>UnitPrice</td>
              <td>TotalPrice</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {orderLines && orderLines.map((item, index) => (
            <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.itemCode}</td>
                  <td>{item.orderId}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.totalPrice}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editOrderLineClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeOrderLineProp(item)}
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

Modal.propTypes = {
  editOrderLineClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeOrderLineProp: (orderLine) => removeOrderLine(orderLine),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(OrderLineList);
