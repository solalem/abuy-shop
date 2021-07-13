import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class MamilaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMamila: null,
    };
  }

  render() {
    const { mamilas } = this.props;
    let count = mamilas? mamilas.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>On</td>
              <td>SellerName</td>
              <td>SellerId</td>
              <td>BuyerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {mamilas && mamilas.map((item, index) => (
            <tr key={index}>
              <td>{item.on}</td>
              <td>{item.sellerName}</td>
              <td>{item.sellerId}</td>
              <td>{item.buyerId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editMamilaClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeMamilaClick(item)}
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

MamilaList.propTypes = {
  editMamilaClick: PropTypes.func.isRequired,
  removeMamilaClick: PropTypes.func.isRequired,
  mamilas: PropTypes.any.isRequired
};

export default connect(null, null)(MamilaList);
