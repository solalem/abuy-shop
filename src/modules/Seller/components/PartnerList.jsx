import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class PartnerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPartner: null,
    };
  }

  render() {
    const { partners } = this.props;
    let count = partners? partners.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>PartnerName</td>
              <td>Date</td>
              <td>SellerId</td>
              <td>PartnerSellerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {partners && partners.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editPartnerClick(item)}
              >
              <td>{item.partnerName}</td>
              <td>{item.date}</td>
              <td>{item.sellerId}</td>
              <td>{item.partnerSellerId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removePartnerClick(item)}
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

PartnerList.propTypes = {
  editPartnerClick: PropTypes.func.isRequired,
  removePartnerClick: PropTypes.func.isRequired,
  partners: PropTypes.any.isRequired
};

export default connect(null, null)(PartnerList);
