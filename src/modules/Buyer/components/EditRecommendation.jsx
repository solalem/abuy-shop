import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecommendation } from "../states/actions";

class EditRecommendation extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);

    let recommendation = this.props.recommendation ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentRecommendation: recommendation,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecommendation: {
          ...prevState.currentRecommendation,
          id: id,
        },
      };
    });
  }
  onChangeScore(e) {
    const score = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecommendation: {
          ...prevState.currentRecommendation,
          score: score,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecommendation: {
          ...prevState.currentRecommendation,
          listingId: listingId,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecommendation: {
          ...prevState.currentRecommendation,
          buyerId: buyerId,
        },
      };
    });
  }

  render() {
    const { currentRecommendation } = this.state;

    return (
        <div>
        {currentRecommendation ? (
          <div className="edit-form">
            <h4>Recommendation</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Score</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="score"
                    value={currentRecommendation.score}
                    onChange={this.onChangeScore}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ListingId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="listingId"
                    value={currentRecommendation.listingId}
                    onChange={this.onChangeListingId}
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
                    value={currentRecommendation.buyerId}
                    onChange={this.onChangeBuyerId}
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
            <p>Recommendation is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateRecommendation })(EditRecommendation);
