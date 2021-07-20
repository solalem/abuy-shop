import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class CommodityList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCommodity: null,
    };
  }

  render() {
    const { commodities } = this.props;
    let count = commodities? commodities.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>CategoryId</td>
              <td>Title</td>
              <td>Description</td>
              <td>Code</td>
              <td>IsActive</td>
              <td>Model</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {commodities && commodities.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editCommodityClick(item)}
              >
              <td>{item.categoryId}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.code}</td>
              <td>{item.isActive}</td>
              <td>{item.model}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCommodityClick(item)}
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

CommodityList.propTypes = {
  editCommodityClick: PropTypes.func.isRequired,
  removeCommodityClick: PropTypes.func.isRequired,
  commodities: PropTypes.any.isRequired
};

export default connect(null, null)(CommodityList);
