import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class DiscountList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDiscount: null,
    };
  }

  render() {
    const { discounts } = this.props;
    let count = discounts? discounts.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>StartDate</td>
              <td>EndDate</td>
              <td>PercentDiscount</td>
              <td>AmountDiscount</td>
              <td>ListingId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {discounts && discounts.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editDiscountClick(item)}
              >
              <td>{item.name}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.percentDiscount}</td>
              <td>{item.amountDiscount}</td>
              <td>{item.listingId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeDiscountClick(item)}
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

DiscountList.propTypes = {
  editDiscountClick: PropTypes.func.isRequired,
  removeDiscountClick: PropTypes.func.isRequired,
  discounts: PropTypes.any.isRequired
};

export default connect(null, null)(DiscountList);
