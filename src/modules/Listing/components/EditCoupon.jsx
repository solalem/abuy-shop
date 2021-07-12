import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCoupon } from "../states/actions";

class EditCoupon extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangePercentDiscount = this.onChangePercentDiscount.bind(this);
    this.onChangeAmountDiscount = this.onChangeAmountDiscount.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);

    let coupon = this.props.coupon ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentCoupon: coupon,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          id: id,
        },
      };
    });
  }
  onChangeCode(e) {
    const code = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          code: code,
        },
      };
    });
  }
  onChangeStartDate(e) {
    const startDate = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          startDate: startDate,
        },
      };
    });
  }
  onChangeEndDate(e) {
    const endDate = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          endDate: endDate,
        },
      };
    });
  }
  onChangePercentDiscount(e) {
    const percentDiscount = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          percentDiscount: percentDiscount,
        },
      };
    });
  }
  onChangeAmountDiscount(e) {
    const amountDiscount = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          amountDiscount: amountDiscount,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCoupon: {
          ...prevState.currentCoupon,
          listingId: listingId,
        },
      };
    });
  }

  render() {
    const { currentCoupon } = this.state;

    return (
        <div>
        {currentCoupon ? (
          <div className="edit-form">
            <h4>Coupon</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Code</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="code"
                    value={currentCoupon.code}
                    onChange={this.onChangeCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">StartDate</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    value={currentCoupon.startDate}
                    onChange={this.onChangeStartDate}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">EndDate</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    value={currentCoupon.endDate}
                    onChange={this.onChangeEndDate}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">PercentDiscount</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="percentDiscount"
                    value={currentCoupon.percentDiscount}
                    onChange={this.onChangePercentDiscount}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">AmountDiscount</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="amountDiscount"
                    value={currentCoupon.amountDiscount}
                    onChange={this.onChangeAmountDiscount}
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
                    value={currentCoupon.listingId}
                    onChange={this.onChangeListingId}
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
            <p>Coupon is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateCoupon })(EditCoupon);
