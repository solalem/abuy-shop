import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentReview: null,
    };
  }

  render() {
    const { reviews } = this.props;
    let count = reviews? reviews.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Title</td>
              <td>Body</td>
              <td>Rating</td>
              <td>IsApproved</td>
              <td>ItemId</td>
              <td>ItemCode</td>
              <td>ReviewerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {reviews && reviews.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editReviewClick(item)}
              >
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.rating}</td>
              <td>{item.isApproved}</td>
              <td>{item.itemId}</td>
              <td>{item.itemCode}</td>
              <td>{item.reviewerId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeReviewClick(item)}
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

ReviewList.propTypes = {
  editReviewClick: PropTypes.func.isRequired,
  removeReviewClick: PropTypes.func.isRequired,
  reviews: PropTypes.any.isRequired
};

export default connect(null, null)(ReviewList);
