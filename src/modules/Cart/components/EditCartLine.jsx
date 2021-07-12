import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCartLine } from "../states/actions";

class EditCartLine extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
    this.onChangeCouponCode = this.onChangeCouponCode.bind(this);
    this.onChangePromotionCode = this.onChangePromotionCode.bind(this);
    this.onChangeAffiliateCode = this.onChangeAffiliateCode.bind(this);
    this.onChangeCartId = this.onChangeCartId.bind(this);

    let cartLine = this.props.cartLine ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentCartLine: cartLine,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          id: id,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          listingId: listingId,
        },
      };
    });
  }
  onChangeQuantity(e) {
    const quantity = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          quantity: quantity,
        },
      };
    });
  }
  onChangeUnitPrice(e) {
    const unitPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          unitPrice: unitPrice,
        },
      };
    });
  }
  onChangeCouponCode(e) {
    const couponCode = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          couponCode: couponCode,
        },
      };
    });
  }
  onChangePromotionCode(e) {
    const promotionCode = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          promotionCode: promotionCode,
        },
      };
    });
  }
  onChangeAffiliateCode(e) {
    const affiliateCode = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          affiliateCode: affiliateCode,
        },
      };
    });
  }
  onChangeCartId(e) {
    const cartId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCartLine: {
          ...prevState.currentCartLine,
          cartId: cartId,
        },
      };
    });
  }

  render() {
    const { currentCartLine } = this.state;

    return (
        <div>
        {currentCartLine ? (
          <div className="edit-form">
            <h4>CartLine</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ListingId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="listingId"
                    value={currentCartLine.listingId}
                    onChange={this.onChangeListingId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Quantity</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    value={currentCartLine.quantity}
                    onChange={this.onChangeQuantity}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">UnitPrice</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="unitPrice"
                    value={currentCartLine.unitPrice}
                    onChange={this.onChangeUnitPrice}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CouponCode</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="couponCode"
                    value={currentCartLine.couponCode}
                    onChange={this.onChangeCouponCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">PromotionCode</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="promotionCode"
                    value={currentCartLine.promotionCode}
                    onChange={this.onChangePromotionCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">AffiliateCode</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="affiliateCode"
                    value={currentCartLine.affiliateCode}
                    onChange={this.onChangeAffiliateCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CartId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="cartId"
                    value={currentCartLine.cartId}
                    onChange={this.onChangeCartId}
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
            <p>CartLine is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateCartLine })(EditCartLine);
