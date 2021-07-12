import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeRecommendation } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class RecommendationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecommendation: null,
    };
  }

  render() {
    const { recommendations } = this.props.Recommendation;
    let count = recommendations? recommendations.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Score</td>
              <td>ListingId</td>
              <td>BuyerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {recommendations && recommendations.map((item, index) => (
            <tr key={index}>
                  <td>{item.score}</td>
                  <td>{item.listingId}</td>
                  <td>{item.buyerId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editRecommendationClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeRecommendationProp(item)}
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
  editRecommendationClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeRecommendationProp: (recommendation) => removeRecommendation(recommendation),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(RecommendationList);
