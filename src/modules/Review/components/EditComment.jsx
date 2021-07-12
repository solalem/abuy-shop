import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment } from "../states/actions";

class EditComment extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeReviewId = this.onChangeReviewId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    let comment = this.props.comment ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentComment: comment,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComment: {
          ...prevState.currentComment,
          id: id,
        },
      };
    });
  }
  onChangeBody(e) {
    const body = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComment: {
          ...prevState.currentComment,
          body: body,
        },
      };
    });
  }
  onChangeReviewId(e) {
    const reviewId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComment: {
          ...prevState.currentComment,
          reviewId: reviewId,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComment: {
          ...prevState.currentComment,
          buyerId: buyerId,
        },
      };
    });
  }
  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComment: {
          ...prevState.currentComment,
          date: date,
        },
      };
    });
  }

  render() {
    const { currentComment } = this.state;

    return (
        <div>
        {currentComment ? (
          <div className="edit-form">
            <h4>Comment</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Body</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="body"
                    value={currentComment.body}
                    onChange={this.onChangeBody}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ReviewId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="reviewId"
                    value={currentComment.reviewId}
                    onChange={this.onChangeReviewId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BuyerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="buyerId"
                    value={currentComment.buyerId}
                    onChange={this.onChangeBuyerId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Date</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={currentComment.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={this.updateContent}
              >
                Update
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Comment is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateComment })(EditComment);
