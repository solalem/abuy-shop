import React, { Component } from "react";
import { connect } from "react-redux";
import { createReview } from "./states/actions";
import ApiService from "./services/api-service";

class CreateReview extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createReview = this.createReview.bind(this);

    this.state = {
      id: '',
      title: '',
      body: '',
      rating: '',
      isApproved: '',
      itemId: '',
      itemCode: '',
      reviewerId: '',
      comments: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createReview() {
    ApiService.createReview(
      {
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
        rating: this.state.rating,
        isApproved: this.state.isApproved,
        itemId: this.state.itemId,
        itemCode: this.state.itemCode,
        reviewerId: this.state.reviewerId,
        comments: this.state.comments,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Review was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.title}
                    onChange={(e) => this.handleChange({ title: e.target.value })}
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
                    value={this.state.body}
                    onChange={(e) => this.handleChange({ body: e.target.value })}
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
                    value={this.state.rating}
                    onChange={(e) => this.handleChange({ rating: e.target.value })}
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
                    value={this.state.isApproved}
                    onChange={(e) => this.handleChange({ isApproved: e.target.value })}
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
                    value={this.state.itemId}
                    onChange={(e) => this.handleChange({ itemId: e.target.value })}
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
                    value={this.state.itemCode}
                    onChange={(e) => this.handleChange({ itemCode: e.target.value })}
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
                    value={this.state.reviewerId}
                    onChange={(e) => this.handleChange({ reviewerId: e.target.value })}
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
      </div>
    );
  }
}

export default connect(null, { createReview })(CreateReview);
