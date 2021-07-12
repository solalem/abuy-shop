import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAffiliate } from "../states/actions";

class EditAffiliate extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangePercentDiscount = this.onChangePercentDiscount.bind(this);
    this.onChangeAmountDiscount = this.onChangeAmountDiscount.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);

    let affiliate = this.props.affiliate ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentAffiliate: affiliate,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          name: name,
        },
      };
    });
  }
  onChangeStartDate(e) {
    const startDate = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          startDate: startDate,
        },
      };
    });
  }
  onChangeEndDate(e) {
    const endDate = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          endDate: endDate,
        },
      };
    });
  }
  onChangePercentDiscount(e) {
    const percentDiscount = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          percentDiscount: percentDiscount,
        },
      };
    });
  }
  onChangeAmountDiscount(e) {
    const amountDiscount = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          amountDiscount: amountDiscount,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAffiliate: {
          ...prevState.currentAffiliate,
          listingId: listingId,
        },
      };
    });
  }

  render() {
    const { currentAffiliate } = this.state;

    return (
        <div>
        {currentAffiliate ? (
          <div className="edit-form">
            <h4>Affiliate</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentAffiliate.name}
                    onChange={this.onChangeName}
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
                    value={currentAffiliate.startDate}
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
                    value={currentAffiliate.endDate}
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
                    value={currentAffiliate.percentDiscount}
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
                    value={currentAffiliate.amountDiscount}
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
                    value={currentAffiliate.listingId}
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
            <p>Affiliate is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateAffiliate })(EditAffiliate);
