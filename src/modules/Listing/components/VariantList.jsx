import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class VariantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVariant: null,
    };
  }

  render() {
    const { variants } = this.props;
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
            <tr 
              key={index}
              onClick={() => this.props.editVariantClick(item)}
              >
              <td>{item.variationOn}</td>
              <td>{item.variation}</td>
              <td>{item.sKU}</td>
              <td>{item.listingId}</td>
              <td>{item.itemId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeVariantClick(item)}
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

VariantList.propTypes = {
  editVariantClick: PropTypes.func.isRequired,
  removeVariantClick: PropTypes.func.isRequired,
  variants: PropTypes.any.isRequired
};

export default connect(null, null)(VariantList);
