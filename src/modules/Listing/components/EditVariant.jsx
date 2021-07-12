import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVariant } from "../states/actions";

class EditVariant extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeVariationOn = this.onChangeVariationOn.bind(this);
    this.onChangeVariation = this.onChangeVariation.bind(this);
    this.onChangeSKU = this.onChangeSKU.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);
    this.onChangeItemId = this.onChangeItemId.bind(this);

    let variant = this.props.variant ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentVariant: variant,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentVariant: {
          ...prevState.currentVariant,
          id: id,
        },
      };
    });
  }
  onChangeVariationOn(e) {
    const variationOn = e.target.value;

    this.setState(function (prevState) {
      return {
        currentVariant: {
          ...prevState.currentVariant,
          variationOn: variationOn,
        },
      };
    });
  }
  onChangeVariation(e) {
    const variation = e.target.value;

    this.setState(function (prevState) {
      return {
        currentVariant: {
          ...prevState.currentVariant,
          variation: variation,
        },
      };
    });
  }
  onChangeSKU(e) {
    const sKU = e.target.value;

    this.setState(function (prevState) {
      return {
        currentVariant: {
          ...prevState.currentVariant,
          sKU: sKU,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentVariant: {
          ...prevState.currentVariant,
          listingId: listingId,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentVariant: {
          ...prevState.currentVariant,
          itemId: itemId,
        },
      };
    });
  }

  render() {
    const { currentVariant } = this.state;

    return (
        <div>
        {currentVariant ? (
          <div className="edit-form">
            <h4>Variant</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">VariationOn</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="variationOn"
                    value={currentVariant.variationOn}
                    onChange={this.onChangeVariationOn}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Variation</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="variation"
                    value={currentVariant.variation}
                    onChange={this.onChangeVariation}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">SKU</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="sKU"
                    value={currentVariant.sKU}
                    onChange={this.onChangeSKU}
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
                    value={currentVariant.listingId}
                    onChange={this.onChangeListingId}
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
                    value={currentVariant.itemId}
                    onChange={this.onChangeItemId}
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
            <p>Variant is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateVariant })(EditVariant);
