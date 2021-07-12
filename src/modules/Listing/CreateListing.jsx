import React, { Component } from "react";
import { connect } from "react-redux";
import { updateListing } from "./states/actions";
import ApiService from "./services/api-service";

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeOldPrice = this.onChangeOldPrice.bind(this);
    this.onChangeItemsQuantity = this.onChangeItemsQuantity.bind(this);
    this.onChangePackaging = this.onChangePackaging.bind(this);
    this.onChangeDelivery = this.onChangeDelivery.bind(this);
    this.onChangeTerms = this.onChangeTerms.bind(this);
    this.onChangeReturnPolicy = this.onChangeReturnPolicy.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDefaultPaymentMethod = this.onChangeDefaultPaymentMethod.bind(this);
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeVariants = this.onChangeVariants.bind(this);
    this.onChangeImages = this.onChangeImages.bind(this);
    this.onChangeCoupons = this.onChangeCoupons.bind(this);
    this.onChangeDiscounts = this.onChangeDiscounts.bind(this);
    this.onChangeAffiliates = this.onChangeAffiliates.bind(this);
    this.createListing = this.createListing.bind(this);

    this.state = {
      newListing: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          name: name,
        },
      };
    });
  }
  onChangeCategory(e) {
    const category = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          category: category,
        },
      };
    });
  }
  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          price: price,
        },
      };
    });
  }
  onChangeOldPrice(e) {
    const oldPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          oldPrice: oldPrice,
        },
      };
    });
  }
  onChangeItemsQuantity(e) {
    const itemsQuantity = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          itemsQuantity: itemsQuantity,
        },
      };
    });
  }
  onChangePackaging(e) {
    const packaging = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          packaging: packaging,
        },
      };
    });
  }
  onChangeDelivery(e) {
    const delivery = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          delivery: delivery,
        },
      };
    });
  }
  onChangeTerms(e) {
    const terms = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          terms: terms,
        },
      };
    });
  }
  onChangeReturnPolicy(e) {
    const returnPolicy = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          returnPolicy: returnPolicy,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          status: status,
        },
      };
    });
  }
  onChangeDefaultPaymentMethod(e) {
    const defaultPaymentMethod = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          defaultPaymentMethod: defaultPaymentMethod,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          itemId: itemId,
        },
      };
    });
  }
  onChangeVariants(e) {
    const variants = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          variants: variants,
        },
      };
    });
  }
  onChangeImages(e) {
    const images = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          images: images,
        },
      };
    });
  }
  onChangeCoupons(e) {
    const coupons = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          coupons: coupons,
        },
      };
    });
  }
  onChangeDiscounts(e) {
    const discounts = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          discounts: discounts,
        },
      };
    });
  }
  onChangeAffiliates(e) {
    const affiliates = e.target.value;

    this.setState(function (prevState) {
      return {
        newListing: {
          ...prevState.newListing,
          affiliates: affiliates,
        },
      };
    });
  }

  createListing() {
    ApiService.createListing(this.state.newListing)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Listing was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newListing } = this.state;

    return (
        <div className="m-2">
        {newListing ? (
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
                    value={newListing.name}
                    onChange={this.onChangeName}
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
                    value={newListing.category}
                    onChange={this.onChangeCategory}
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
                    value={newListing.price}
                    onChange={this.onChangePrice}
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
                    value={newListing.oldPrice}
                    onChange={this.onChangeOldPrice}
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
                    value={newListing.itemsQuantity}
                    onChange={this.onChangeItemsQuantity}
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
                    value={newListing.packaging}
                    onChange={this.onChangePackaging}
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
                    value={newListing.delivery}
                    onChange={this.onChangeDelivery}
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
                    value={newListing.terms}
                    onChange={this.onChangeTerms}
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
                    value={newListing.returnPolicy}
                    onChange={this.onChangeReturnPolicy}
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
                    value={newListing.itemId}
                    onChange={this.onChangeItemId}
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
        ) : (
          <div>
            <br />
            <p>Listing not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateListing })(CreateListing);
