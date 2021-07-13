import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
    const { recommendations } = this.props;
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
                  onClick={() => this.props.removeRecommendationClick(item)}
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

RecommendationList.propTypes = {
  editRecommendationClick: PropTypes.func.isRequired,
  removeRecommendationClick: PropTypes.func.isRequired,
  recommendations: PropTypes.any.isRequired
};

export default connect(null, null)(RecommendationList);
