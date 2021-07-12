import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeItemProperty } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class ItemPropertyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItemProperty: null,
    };
  }

  render() {
    const { itemProperties } = this.props.ItemProperty;
    let count = itemProperties? itemProperties.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Attribute</td>
              <td>Value</td>
              <td>ItemId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {itemProperties && itemProperties.map((item, index) => (
            <tr key={index}>
                  <td>{item.attribute}</td>
                  <td>{item.value}</td>
                  <td>{item.itemId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editItemPropertyClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeItemPropertyProp(item)}
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
  editItemPropertyClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeItemPropertyProp: (itemProperty) => removeItemProperty(itemProperty),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(ItemPropertyList);
