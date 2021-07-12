import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeAffiliate } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class AffiliateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAffiliate: null,
    };
  }

  render() {
    const { affiliates } = this.props.Affiliate;
    let count = affiliates? affiliates.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>StartDate</td>
              <td>EndDate</td>
              <td>PercentDiscount</td>
              <td>AmountDiscount</td>
              <td>ListingId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {affiliates && affiliates.map((item, index) => (
            <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.percentDiscount}</td>
                  <td>{item.amountDiscount}</td>
                  <td>{item.listingId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editAffiliateClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeAffiliateProp(item)}
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
  editAffiliateClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeAffiliateProp: (affiliate) => removeAffiliate(affiliate),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(AffiliateList);
