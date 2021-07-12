import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComparison } from "./states/actions";
import ApiService from "./services/api-service";

class CreateComparison extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeVisitInfo = this.onChangeVisitInfo.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
    this.createComparison = this.createComparison.bind(this);

    this.state = {
      newComparison: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newComparison: {
          ...prevState.newComparison,
          id: id,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        newComparison: {
          ...prevState.newComparison,
          buyerId: buyerId,
        },
      };
    });
  }
  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        newComparison: {
          ...prevState.newComparison,
          date: date,
        },
      };
    });
  }
  onChangeVisitInfo(e) {
    const visitInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        newComparison: {
          ...prevState.newComparison,
          visitInfo: visitInfo,
        },
      };
    });
  }
  onChangeItems(e) {
    const items = e.target.value;

    this.setState(function (prevState) {
      return {
        newComparison: {
          ...prevState.newComparison,
          items: items,
        },
      };
    });
  }

  createComparison() {
    ApiService.createComparison(this.state.newComparison)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Comparison was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newComparison } = this.state;

    return (
        <div className="m-2">
        {newComparison ? (
          <div className="edit-form">
            <h4>New Comparison</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BuyerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="buyerId"
                    value={newComparison.buyerId}
                    onChange={this.onChangeBuyerId}
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
                    value={newComparison.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createComparison}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Comparison not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateComparison })(CreateComparison);
