import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeComment } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComment: null,
    };
  }

  render() {
    const { comments } = this.props.Comment;
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
            <tr key={index}>
                  <td>{item.body}</td>
                  <td>{item.reviewId}</td>
                  <td>{item.buyerId}</td>
                  <td>{item.date}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editCommentClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCommentProp(item)}
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
  editCommentClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeCommentProp: (comment) => removeComment(comment),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(CommentList);
