import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class ComparisonItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComparisonItem: null,
    };
  }

  render() {
    const { comparisonItems } = this.props;
    let count = comparisonItems? comparisonItems.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>ListingId</td>
              <td>ComparisonId</td>
              <td>Price</td>
              <td>Specifications</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {comparisonItems && comparisonItems.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editComparisonItemClick(item)}
              >
              <td>{item.listingId}</td>
              <td>{item.comparisonId}</td>
              <td>{item.price}</td>
              <td>{item.specifications}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeComparisonItemClick(item)}
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

ComparisonItemList.propTypes = {
  editComparisonItemClick: PropTypes.func.isRequired,
  removeComparisonItemClick: PropTypes.func.isRequired,
  comparisonItems: PropTypes.any.isRequired
};

export default connect(null, null)(ComparisonItemList);
