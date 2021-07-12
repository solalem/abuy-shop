import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeComparisonItem } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class ComparisonItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComparisonItem: null,
    };
  }

  render() {
    const { comparisonItems } = this.props.ComparisonItem;
    let count = comparisonItems? comparisonItems.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>ListingId</td>
              <td>ComparisionId</td>
              <td>Price</td>
              <td>Specifications</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {comparisonItems && comparisonItems.map((item, index) => (
            <tr key={index}>
                  <td>{item.listingId}</td>
                  <td>{item.comparisionId}</td>
                  <td>{item.price}</td>
                  <td>{item.specifications}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editComparisonItemClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeComparisonItemProp(item)}
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
  editComparisonItemClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeComparisonItemProp: (comparisonItem) => removeComparisonItem(comparisonItem),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(ComparisonItemList);
