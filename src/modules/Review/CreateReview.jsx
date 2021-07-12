import React, { Component } from "react";
import { connect } from "react-redux";
import { updateReview } from "./states/actions";
import ApiService from "./services/api-service";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeIsApproved = this.onChangeIsApproved.bind(this);
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemCode = this.onChangeItemCode.bind(this);
    this.onChangeReviewerId = this.onChangeReviewerId.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.createReview = this.createReview.bind(this);

    this.state = {
      newReview: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          id: id,
        },
      };
    });
  }
  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          title: title,
        },
      };
    });
  }
  onChangeBody(e) {
    const body = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          body: body,
        },
      };
    });
  }
  onChangeRating(e) {
    const rating = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          rating: rating,
        },
      };
    });
  }
  onChangeIsApproved(e) {
    const isApproved = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          isApproved: isApproved,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          itemId: itemId,
        },
      };
    });
  }
  onChangeItemCode(e) {
    const itemCode = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          itemCode: itemCode,
        },
      };
    });
  }
  onChangeReviewerId(e) {
    const reviewerId = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          reviewerId: reviewerId,
        },
      };
    });
  }
  onChangeComments(e) {
    const comments = e.target.value;

    this.setState(function (prevState) {
      return {
        newReview: {
          ...prevState.newReview,
          comments: comments,
        },
      };
    });
  }

  createReview() {
    ApiService.createReview(this.state.newReview)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Review was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newReview } = this.state;

    return (
        <div className="m-2">
        {newReview ? (
          <div className="edit-form">
            <h4>New Review</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Title</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="title"
                    value={newReview.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Body</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="body"
                    value={newReview.body}
                    onChange={this.onChangeBody}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Rating</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    value={newReview.rating}
                    onChange={this.onChangeRating}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsApproved</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isApproved"
                    value={newReview.isApproved}
                    onChange={this.onChangeIsApproved}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemId"
                    value={newReview.itemId}
                    onChange={this.onChangeItemId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemCode</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemCode"
                    value={newReview.itemCode}
                    onChange={this.onChangeItemCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ReviewerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="reviewerId"
                    value={newReview.reviewerId}
                    onChange={this.onChangeReviewerId}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createReview}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Review not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateReview })(CreateReview);
