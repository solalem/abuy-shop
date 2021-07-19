import React, { Component } from "react";
import { connect } from "react-redux";
import { createCart } from "./states/actions";
import ApiService from "./services/api-service";

class CreateCart extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createCart = this.createCart.bind(this);

    this.state = {
      id: '',
      buyerId: '',
      createdOn: '',
      isSaved: '',
      lineItems: '',
      visitInfo: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createCart() {
    ApiService.createCart(
      {
        id: this.state.id,
        buyerId: this.state.buyerId,
        createdOn: this.state.createdOn,
        isSaved: this.state.isSaved,
        lineItems: this.state.lineItems,
        visitInfo: this.state.visitInfo,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Cart was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
          <div className="edit-form">
            <h4>New Cart</h4>
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
                <label className="col-sm-2 col-form-label" htmlFor="name">CreatedOn</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="createdOn"
                    value={this.state.createdOn}
                    onChange={(e) => this.handleChange({ createdOn: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsSaved</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isSaved"
                    value={this.state.isSaved}
                    onChange={(e) => this.handleChange({ isSaved: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createCart}
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

export default connect(null, { createCart })(CreateCart);
