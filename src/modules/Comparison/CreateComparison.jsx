import React, { Component } from "react";
import { connect } from "react-redux";
import { createComparison } from "./states/actions";
import ApiService from "./services/api-service";

class CreateComparison extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createComparison = this.createComparison.bind(this);

    this.state = {
      id: '',
      buyerId: '',
      date: '',
      visitInfo: '',
      items: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createComparison() {
    ApiService.createComparison(
      {
        id: this.state.id,
        buyerId: this.state.buyerId,
        date: this.state.date,
        visitInfo: this.state.visitInfo,
        items: this.state.items,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Comparison was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.buyerId}
                    onChange={(e) => this.handleChange({ buyerId: e.target.value })}
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
                    value={this.state.date}
                    onChange={(e) => this.handleChange({ date: e.target.value })}
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
      </div>
    );
  }
}

export default connect(null, { createComparison })(CreateComparison);
