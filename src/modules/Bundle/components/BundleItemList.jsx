import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeBundleItem } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class BundleItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBundleItem: null,
    };
  }

  render() {
    const { bundleItems } = this.props.BundleItem;
    let count = bundleItems? bundleItems.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>ItemId</td>
              <td>BundleId</td>
              <td>Amount</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {bundleItems && bundleItems.map((item, index) => (
            <tr key={index}>
                  <td>{item.itemId}</td>
                  <td>{item.bundleId}</td>
                  <td>{item.amount}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editBundleItemClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeBundleItemProp(item)}
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
  editBundleItemClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeBundleItemProp: (bundleItem) => removeBundleItem(bundleItem),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(BundleItemList);
