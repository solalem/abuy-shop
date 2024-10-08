import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComment: null,
    };
  }

  render() {
    const { comments } = this.props;
    let count = comments? comments.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Body</td>
              <td>ReviewId</td>
              <td>BuyerId</td>
              <td>Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {comments && comments.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editCommentClick(item)}
              >
              <td>{item.body}</td>
              <td>{item.reviewId}</td>
              <td>{item.buyerId}</td>
              <td>{item.date}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCommentClick(item)}
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

CommentList.propTypes = {
  editCommentClick: PropTypes.func.isRequired,
  removeCommentClick: PropTypes.func.isRequired,
  comments: PropTypes.any.isRequired
};

export default connect(null, null)(CommentList);
