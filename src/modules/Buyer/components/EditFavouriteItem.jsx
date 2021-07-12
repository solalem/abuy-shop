import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFavouriteItem } from "../states/actions";

class EditFavouriteItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeAddedOn = this.onChangeAddedOn.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);

    let favouriteItem = this.props.favouriteItem ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentFavouriteItem: favouriteItem,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentFavouriteItem: {
          ...prevState.currentFavouriteItem,
          id: id,
        },
      };
    });
  }
  onChangeAddedOn(e) {
    const addedOn = e.target.value;

    this.setState(function (prevState) {
      return {
        currentFavouriteItem: {
          ...prevState.currentFavouriteItem,
          addedOn: addedOn,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentFavouriteItem: {
          ...prevState.currentFavouriteItem,
          listingId: listingId,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentFavouriteItem: {
          ...prevState.currentFavouriteItem,
          buyerId: buyerId,
        },
      };
    });
  }

  render() {
    const { currentFavouriteItem } = this.state;

    return (
        <div>
        {currentFavouriteItem ? (
          <div className="edit-form">
            <h4>FavouriteItem</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">AddedOn</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="addedOn"
                    value={currentFavouriteItem.addedOn}
                    onChange={this.onChangeAddedOn}
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
                    value={currentFavouriteItem.listingId}
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
                    value={currentFavouriteItem.buyerId}
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
            <p>FavouriteItem is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateFavouriteItem })(EditFavouriteItem);
