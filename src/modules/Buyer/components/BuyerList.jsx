import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class BuyerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBuyer: null,
    };
  }

  render() {
    const { buyers } = this.props;
    let count = buyers? buyers.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>FullName</td>
              <td>BirthDate</td>
              <td>AccountId</td>
              <td>DefaultShippingAddress</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {buyers && buyers.map((item, index) => (
            <tr key={index}>
              <td>{item.fullName}</td>
              <td>{item.birthDate}</td>
              <td>{item.accountId}</td>
              <td>{item.defaultShippingAddress}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editBuyerClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeBuyerClick(item)}
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

BuyerList.propTypes = {
  editBuyerClick: PropTypes.func.isRequired,
  removeBuyerClick: PropTypes.func.isRequired,
  buyers: PropTypes.any.isRequired
};

export default connect(null, null)(BuyerList);
