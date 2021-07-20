import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class CartLineList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCartLine: null,
    };
  }

  render() {
    const { cartLines } = this.props;
    let count = cartLines? cartLines.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>ListingId</td>
              <td>Quantity</td>
              <td>UnitPrice</td>
              <td>CouponCode</td>
              <td>PromotionCode</td>
              <td>AffiliateCode</td>
              <td>CartId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {cartLines && cartLines.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editCartLineClick(item)}
              >
              <td>{item.listingId}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.couponCode}</td>
              <td>{item.promotionCode}</td>
              <td>{item.affiliateCode}</td>
              <td>{item.cartId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCartLineClick(item)}
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

CartLineList.propTypes = {
  editCartLineClick: PropTypes.func.isRequired,
  removeCartLineClick: PropTypes.func.isRequired,
  cartLines: PropTypes.any.isRequired
};

export default connect(null, null)(CartLineList);
