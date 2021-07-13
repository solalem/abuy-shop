import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class CouponList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCoupon: null,
    };
  }

  render() {
    const { coupons } = this.props;
    let count = coupons? coupons.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Code</td>
              <td>StartDate</td>
              <td>EndDate</td>
              <td>PercentDiscount</td>
              <td>AmountDiscount</td>
              <td>ListingId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {coupons && coupons.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.percentDiscount}</td>
              <td>{item.amountDiscount}</td>
              <td>{item.listingId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editCouponClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCouponClick(item)}
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

CouponList.propTypes = {
  editCouponClick: PropTypes.func.isRequired,
  removeCouponClick: PropTypes.func.isRequired,
  coupons: PropTypes.any.isRequired
};

export default connect(null, null)(CouponList);
