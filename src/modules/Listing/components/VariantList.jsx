import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeVariant } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class VariantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVariant: null,
    };
  }

  render() {
    const { variants } = this.props.Variant;
    let count = variants? variants.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>VariationOn</td>
              <td>Variation</td>
              <td>SKU</td>
              <td>ListingId</td>
              <td>ItemId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {variants && variants.map((item, index) => (
            <tr key={index}>
                  <td>{item.variationOn}</td>
                  <td>{item.variation}</td>
                  <td>{item.sKU}</td>
                  <td>{item.listingId}</td>
                  <td>{item.itemId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editVariantClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeVariantProp(item)}
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
  editVariantClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeVariantProp: (variant) => removeVariant(variant),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(VariantList);
