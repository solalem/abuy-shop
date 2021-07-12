import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removePartner } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class PartnerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPartner: null,
    };
  }

  render() {
    const { partners } = this.props.Partner;
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
            <tr key={index}>
                  <td>{item.partnerName}</td>
                  <td>{item.date}</td>
                  <td>{item.sellerId}</td>
                  <td>{item.partnerSellerId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editPartnerClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removePartnerProp(item)}
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
  editPartnerClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removePartnerProp: (partner) => removePartner(partner),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(PartnerList);
