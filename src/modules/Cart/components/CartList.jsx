import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class CartList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCart: null,
    };
  }

  render() {
    const { carts } = this.props;
    let count = carts? carts.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>BuyerId</td>
              <td>CreatedOn</td>
              <td>IsSaved</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {carts && carts.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editCartClick(item)}
              >
              <td>{item.buyerId}</td>
              <td>{item.createdOn}</td>
              <td>{item.isSaved}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCartClick(item)}
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

CartList.propTypes = {
  editCartClick: PropTypes.func.isRequired,
  removeCartClick: PropTypes.func.isRequired,
  carts: PropTypes.any.isRequired
};

export default connect(null, null)(CartList);
