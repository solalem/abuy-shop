import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class SellerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSeller: null,
    };
  }

  render() {
    const { sellers } = this.props;
    let count = sellers? sellers.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {sellers && sellers.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editSellerClick(item)}
              >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeSellerClick(item)}
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

SellerList.propTypes = {
  editSellerClick: PropTypes.func.isRequired,
  removeSellerClick: PropTypes.func.isRequired,
  sellers: PropTypes.any.isRequired
};

export default connect(null, null)(SellerList);
