import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart, deleteCart } from "./states/actions";
import CartsService from "./services/api-service";
import CartLineList from "./components/CartLineList";
import EditCartLine from "./components/EditCartLine";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);
    this.onChangeCreatedOn = this.onChangeCreatedOn.bind(this);
    this.onChangeIsSaved = this.onChangeIsSaved.bind(this);
    this.onChangeLineItems = this.onChangeLineItems.bind(this);
    this.onChangeVisitInfo = this.onChangeVisitInfo.bind(this);
    this.getCart = this.getCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    
    this.state = {
      currentCart: this.props.currentCart,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentCart && this.props.match)
    //   this.getCart(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCart: {
          ...prevState.currentCart,
          id: id,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCart: {
          ...prevState.currentCart,
          buyerId: buyerId,
        },
      };
    });
  }
  onChangeCreatedOn(e) {
    const createdOn = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCart: {
          ...prevState.currentCart,
          createdOn: createdOn,
        },
      };
    });
  }
  onChangeIsSaved(e) {
    const isSaved = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCart: {
          ...prevState.currentCart,
          isSaved: isSaved,
        },
      };
    });
  }
  onChangeLineItems(e) {
    const lineItems = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCart: {
          ...prevState.currentCart,
          lineItems: lineItems,
        },
      };
    });
  }
  onChangeVisitInfo(e) {
    const visitInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCart: {
          ...prevState.currentCart,
          visitInfo: visitInfo,
        },
      };
    });
  }

  getCart(id) {
    CartsService.get(id)
      .then((response) => {
        this.setState({
          currentCart: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateCart() {
    this.props
      .updateCart(this.state.currentCart.id, this.state.currentCart)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Cart was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeCart() {
    this.props
      .deleteCart(this.state.currentCart.id)
      .then(() => {
        this.props.history.push("/carts");
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
    const { currentCart } = this.state;

    return (
      <div>
      {currentCart ? (
        <div>
          <div className="edit-form">
            <h5>Cart Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BuyerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="buyerId"
                    value={currentCart.buyerId}
                    onChange={this.onChangeBuyerId}
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
                    value={currentCart.createdOn}
                    onChange={this.onChangeCreatedOn}
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
                    value={currentCart.isSaved}
                    onChange={this.onChangeIsSaved}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateCart}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeCart}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>CartLines</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("cartLine")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'cartLine' ? (
              <Modal 
                showModal={this.state.openedModal === 'cartLine'} 
                closeModalClick={this.closeDialog}>
                <EditCartLine />
              </Modal>
              ): null}

              <CartLineList Cart={currentCart} editCartLineClick={(i) => this.openEditDialog('cartLine')} />
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
    carts: state.carts.carts,
  };
};

export default connect(mapStateToProps, { updateCart, deleteCart })(CartDetails);
