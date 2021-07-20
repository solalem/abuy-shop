import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class CommodityAttributeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCommodityAttribute: null,
    };
  }

  render() {
    const { commodityAttributes } = this.props;
    let count = commodityAttributes? commodityAttributes.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Attribute</td>
              <td>DefaultValue</td>
              <td>CommodityId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {commodityAttributes && commodityAttributes.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editCommodityAttributeClick(item)}
              >
              <td>{item.attribute}</td>
              <td>{item.defaultValue}</td>
              <td>{item.commodityId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCommodityAttributeClick(item)}
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

CommodityAttributeList.propTypes = {
  editCommodityAttributeClick: PropTypes.func.isRequired,
  removeCommodityAttributeClick: PropTypes.func.isRequired,
  commodityAttributes: PropTypes.any.isRequired
};

export default connect(null, null)(CommodityAttributeList);
