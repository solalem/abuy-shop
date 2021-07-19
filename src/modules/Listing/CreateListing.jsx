import React, { Component } from "react";
import { connect } from "react-redux";
import { createListing } from "./states/actions";
import ApiService from "./services/api-service";

class CreateListing extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createListing = this.createListing.bind(this);

    this.state = {
      id: '',
      name: '',
      category: '',
      price: '',
      oldPrice: '',
      itemsQuantity: '',
      packaging: '',
      delivery: '',
      terms: '',
      returnPolicy: '',
      status: '',
      defaultPaymentMethod: '',
      itemId: '',
      variants: '',
      images: '',
      coupons: '',
      discounts: '',
      affiliates: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createListing() {
    ApiService.createListing(
      {
        id: this.state.id,
        name: this.state.name,
        category: this.state.category,
        price: this.state.price,
        oldPrice: this.state.oldPrice,
        itemsQuantity: this.state.itemsQuantity,
        packaging: this.state.packaging,
        delivery: this.state.delivery,
        terms: this.state.terms,
        returnPolicy: this.state.returnPolicy,
        status: this.state.status,
        defaultPaymentMethod: this.state.defaultPaymentMethod,
        itemId: this.state.itemId,
        variants: this.state.variants,
        images: this.state.images,
        coupons: this.state.coupons,
        discounts: this.state.discounts,
        affiliates: this.state.affiliates,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Listing was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
          <div className="edit-form">
            <h4>New Listing</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Category</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="category"
                    value={this.state.category}
                    onChange={(e) => this.handleChange({ category: e.target.value })}
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
                    value={this.state.price}
                    onChange={(e) => this.handleChange({ price: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">OldPrice</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="oldPrice"
                    value={this.state.oldPrice}
                    onChange={(e) => this.handleChange({ oldPrice: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemsQuantity</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="itemsQuantity"
                    value={this.state.itemsQuantity}
                    onChange={(e) => this.handleChange({ itemsQuantity: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Packaging</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="packaging"
                    value={this.state.packaging}
                    onChange={(e) => this.handleChange({ packaging: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Delivery</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="delivery"
                    value={this.state.delivery}
                    onChange={(e) => this.handleChange({ delivery: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Terms</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="terms"
                    value={this.state.terms}
                    onChange={(e) => this.handleChange({ terms: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ReturnPolicy</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="returnPolicy"
                    value={this.state.returnPolicy}
                    onChange={(e) => this.handleChange({ returnPolicy: e.target.value })}
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
                    value={this.state.itemId}
                    onChange={(e) => this.handleChange({ itemId: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createListing}
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

export default connect(null, { createListing })(CreateListing);
