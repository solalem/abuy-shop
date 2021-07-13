import React, { Component } from "react";
import { connect } from "react-redux";
import { updateListing, deleteListing } from "./states/actions";
import ListingsService from "./services/api-service";
import VariantList from "./components/VariantList";
import EditVariant from "./components/EditVariant";
import ImageList from "./components/ImageList";
import EditImage from "./components/EditImage";
import CouponList from "./components/CouponList";
import EditCoupon from "./components/EditCoupon";
import DiscountList from "./components/DiscountList";
import EditDiscount from "./components/EditDiscount";
import AffiliateList from "./components/AffiliateList";
import EditAffiliate from "./components/EditAffiliate";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class ListingDetails extends Component {
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
    this.getListing = this.getListing.bind(this);
    this.updateListing = this.updateListing.bind(this);
    this.removeListing = this.removeListing.bind(this);
    
    this.state = {
      currentListing: this.props.currentListing,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentListing && this.props.match)
    //   this.getListing(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          name: name,
        },
      };
    });
  }
  onChangeCategory(e) {
    const category = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          category: category,
        },
      };
    });
  }
  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          price: price,
        },
      };
    });
  }
  onChangeOldPrice(e) {
    const oldPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          oldPrice: oldPrice,
        },
      };
    });
  }
  onChangeItemsQuantity(e) {
    const itemsQuantity = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          itemsQuantity: itemsQuantity,
        },
      };
    });
  }
  onChangePackaging(e) {
    const packaging = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          packaging: packaging,
        },
      };
    });
  }
  onChangeDelivery(e) {
    const delivery = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          delivery: delivery,
        },
      };
    });
  }
  onChangeTerms(e) {
    const terms = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          terms: terms,
        },
      };
    });
  }
  onChangeReturnPolicy(e) {
    const returnPolicy = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          returnPolicy: returnPolicy,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          status: status,
        },
      };
    });
  }
  onChangeDefaultPaymentMethod(e) {
    const defaultPaymentMethod = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          defaultPaymentMethod: defaultPaymentMethod,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          itemId: itemId,
        },
      };
    });
  }
  onChangeVariants(e) {
    const variants = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          variants: variants,
        },
      };
    });
  }
  onChangeImages(e) {
    const images = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          images: images,
        },
      };
    });
  }
  onChangeCoupons(e) {
    const coupons = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          coupons: coupons,
        },
      };
    });
  }
  onChangeDiscounts(e) {
    const discounts = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          discounts: discounts,
        },
      };
    });
  }
  onChangeAffiliates(e) {
    const affiliates = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListing: {
          ...prevState.currentListing,
          affiliates: affiliates,
        },
      };
    });
  }

  getListing(id) {
    ListingsService.get(id)
      .then((response) => {
        this.setState({
          currentListing: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateListing() {
    this.props
      .updateListing(this.state.currentListing.id, this.state.currentListing)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Listing was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeListing() {
    this.props
      .deleteListing(this.state.currentListing.id)
      .then(() => {
        this.props.history.push("/listings");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  openAddDialog = (modal) => {
    this.setState({ openedModal: modal });
  };

  openEditDialog = (modal) => {
    this.setState({ openedModal: modal });
  };

  closeDialog = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const { currentListing } = this.state;

    return (
      <div>
      {currentListing ? (
        <div>
          <div className="edit-form">
            <h5>Listing Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentListing.name}
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
                    value={currentListing.category}
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
                    value={currentListing.price}
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
                    value={currentListing.oldPrice}
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
                    value={currentListing.itemsQuantity}
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
                    value={currentListing.packaging}
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
                    value={currentListing.delivery}
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
                    value={currentListing.terms}
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
                    value={currentListing.returnPolicy}
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
                    value={currentListing.itemId}
                    onChange={this.onChangeItemId}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateListing}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeListing}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Variants</Tab>
              <Tab>Images</Tab>
              <Tab>Coupons</Tab>
              <Tab>Discounts</Tab>
              <Tab>Affiliates</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("variant")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'variant' ? (
              <Modal 
                showModal={this.state.openedModal === 'variant'} 
                closeModalClick={this.closeDialog}>
                <EditVariant />
              </Modal>
              ): null}

              <VariantList Listing={currentListing} editVariantClick={(i) => this.openEditDialog('variant')} />
            </TabPanel>
            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("image")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'image' ? (
              <Modal 
                showModal={this.state.openedModal === 'image'} 
                closeModalClick={this.closeDialog}>
                <EditImage />
              </Modal>
              ): null}

              <ImageList Listing={currentListing} editImageClick={(i) => this.openEditDialog('image')} />
            </TabPanel>
            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("coupon")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'coupon' ? (
              <Modal 
                showModal={this.state.openedModal === 'coupon'} 
                closeModalClick={this.closeDialog}>
                <EditCoupon />
              </Modal>
              ): null}

              <CouponList Listing={currentListing} editCouponClick={(i) => this.openEditDialog('coupon')} />
            </TabPanel>
            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("discount")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'discount' ? (
              <Modal 
                showModal={this.state.openedModal === 'discount'} 
                closeModalClick={this.closeDialog}>
                <EditDiscount />
              </Modal>
              ): null}

              <DiscountList Listing={currentListing} editDiscountClick={(i) => this.openEditDialog('discount')} />
            </TabPanel>
            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("affiliate")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'affiliate' ? (
              <Modal 
                showModal={this.state.openedModal === 'affiliate'} 
                closeModalClick={this.closeDialog}>
                <EditAffiliate />
              </Modal>
              ): null}

              <AffiliateList Listing={currentListing} editAffiliateClick={(i) => this.openEditDialog('affiliate')} />
            </TabPanel>

            <TabPanel>
              <p>More content</p>
            </TabPanel>
          </Tabs>
        </div>

        ) : (
          <div>
            <br />
            <p>Not Data Found</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings,
  };
};

export default connect(mapStateToProps, { updateListing, deleteListing })(ListingDetails);
