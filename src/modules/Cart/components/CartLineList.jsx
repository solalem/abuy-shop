import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeCartLine } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class CartLineList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCartLine: null,
    };
  }

  render() {
    const { cartLines } = this.props.CartLine;
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
            <tr key={index}>
                  <td>{item.listingId}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.couponCode}</td>
                  <td>{item.promotionCode}</td>
                  <td>{item.affiliateCode}</td>
                  <td>{item.cartId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editCartLineClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCartLineProp(item)}
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
  editCartLineClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeCartLineProp: (cartLine) => removeCartLine(cartLine),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(CartLineList);
