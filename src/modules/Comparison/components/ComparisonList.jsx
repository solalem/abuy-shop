import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class ComparisonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComparison: null,
    };
  }

  render() {
    const { comparisons } = this.props;
    let count = comparisons? comparisons.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>BuyerId</td>
              <td>Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {comparisons && comparisons.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editComparisonClick(item)}
              >
              <td>{item.buyerId}</td>
              <td>{item.date}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeComparisonClick(item)}
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

ComparisonList.propTypes = {
  editComparisonClick: PropTypes.func.isRequired,
  removeComparisonClick: PropTypes.func.isRequired,
  comparisons: PropTypes.any.isRequired
};

export default connect(null, null)(ComparisonList);
