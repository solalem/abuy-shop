import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
    const { itemProperties } = this.props;
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
                  onClick={() => this.props.removeItemPropertyClick(item)}
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

ItemPropertyList.propTypes = {
  editItemPropertyClick: PropTypes.func.isRequired,
  removeItemPropertyClick: PropTypes.func.isRequired,
  itemProperties: PropTypes.any.isRequired
};

export default connect(null, null)(ItemPropertyList);
