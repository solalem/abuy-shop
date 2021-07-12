import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePartner } from "../states/actions";

class EditPartner extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePartnerName = this.onChangePartnerName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeSellerId = this.onChangeSellerId.bind(this);
    this.onChangePartnerSellerId = this.onChangePartnerSellerId.bind(this);

    let partner = this.props.partner ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentPartner: partner,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPartner: {
          ...prevState.currentPartner,
          id: id,
        },
      };
    });
  }
  onChangePartnerName(e) {
    const partnerName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPartner: {
          ...prevState.currentPartner,
          partnerName: partnerName,
        },
      };
    });
  }
  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPartner: {
          ...prevState.currentPartner,
          date: date,
        },
      };
    });
  }
  onChangeSellerId(e) {
    const sellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPartner: {
          ...prevState.currentPartner,
          sellerId: sellerId,
        },
      };
    });
  }
  onChangePartnerSellerId(e) {
    const partnerSellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPartner: {
          ...prevState.currentPartner,
          partnerSellerId: partnerSellerId,
        },
      };
    });
  }

  render() {
    const { currentPartner } = this.state;

    return (
        <div>
        {currentPartner ? (
          <div className="edit-form">
            <h4>Partner</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">PartnerName</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="partnerName"
                    value={currentPartner.partnerName}
                    onChange={this.onChangePartnerName}
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
                    value={currentPartner.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">SellerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="sellerId"
                    value={currentPartner.sellerId}
                    onChange={this.onChangeSellerId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">PartnerSellerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="partnerSellerId"
                    value={currentPartner.partnerSellerId}
                    onChange={this.onChangePartnerSellerId}
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
            <p>Partner is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updatePartner })(EditPartner);
