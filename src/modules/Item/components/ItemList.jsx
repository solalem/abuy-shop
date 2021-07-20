import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: null,
    };
  }

  render() {
    const { items } = this.props;
    let count = items? items.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Brand</td>
              <td>CommodityId</td>
              <td>Model</td>
              <td>OldPrice</td>
              <td>Price</td>
              <td>MPN</td>
              <td>GTIN</td>
              <td>ReservedQuantity</td>
              <td>AvalableQuantity</td>
              <td>SellerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {items && items.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editItemClick(item)}
              >
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.commodityId}</td>
              <td>{item.model}</td>
              <td>{item.oldPrice}</td>
              <td>{item.price}</td>
              <td>{item.mPN}</td>
              <td>{item.gTIN}</td>
              <td>{item.reservedQuantity}</td>
              <td>{item.avalableQuantity}</td>
              <td>{item.sellerId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeItemClick(item)}
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

ItemList.propTypes = {
  editItemClick: PropTypes.func.isRequired,
  removeItemClick: PropTypes.func.isRequired,
  items: PropTypes.any.isRequired
};

export default connect(null, null)(ItemList);
