import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComparisonItem } from "../states/actions";

class EditComparisonItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);
    this.onChangeComparisonId = this.onChangeComparisonId.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeSpecifications = this.onChangeSpecifications.bind(this);

    let comparisonItem = this.props.comparisonItem ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentComparisonItem: comparisonItem,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparisonItem: {
          ...prevState.currentComparisonItem,
          id: id,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparisonItem: {
          ...prevState.currentComparisonItem,
          listingId: listingId,
        },
      };
    });
  }
  onChangeComparisonId(e) {
    const comparisonId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparisonItem: {
          ...prevState.currentComparisonItem,
          comparisonId: comparisonId,
        },
      };
    });
  }
  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparisonItem: {
          ...prevState.currentComparisonItem,
          price: price,
        },
      };
    });
  }
  onChangeSpecifications(e) {
    const specifications = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparisonItem: {
          ...prevState.currentComparisonItem,
          specifications: specifications,
        },
      };
    });
  }

  render() {
    const { currentComparisonItem } = this.state;

    return (
        <div>
        {currentComparisonItem ? (
          <div className="edit-form">
            <h4>ComparisonItem</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ListingId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="listingId"
                    value={currentComparisonItem.listingId}
                    onChange={this.onChangeListingId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ComparisonId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="comparisonId"
                    value={currentComparisonItem.comparisonId}
                    onChange={this.onChangeComparisonId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Price</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={currentComparisonItem.price}
                    onChange={this.onChangePrice}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Specifications</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="specifications"
                    value={currentComparisonItem.specifications}
                    onChange={this.onChangeSpecifications}
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
            <p>ComparisonItem is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateComparisonItem })(EditComparisonItem);
