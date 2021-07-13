import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePurchaseOrder, deletePurchaseOrder } from "./states/actions";
import PurchaseOrdersService from "./services/api-service";
import OrderLineList from "./components/OrderLineList";
import EditOrderLine from "./components/EditOrderLine";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class PurchaseOrderDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStoreId = this.onChangeStoreId.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeShippingAddress = this.onChangeShippingAddress.bind(this);
    this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
    this.onChangeDeliveryOption = this.onChangeDeliveryOption.bind(this);
    this.onChangeBillingInfo = this.onChangeBillingInfo.bind(this);
    this.onChangeGross = this.onChangeGross.bind(this);
    this.onChangeTax = this.onChangeTax.bind(this);
    this.onChangeNet = this.onChangeNet.bind(this);
    this.onChangeLineItems = this.onChangeLineItems.bind(this);
    this.getPurchaseOrder = this.getPurchaseOrder.bind(this);
    this.updatePurchaseOrder = this.updatePurchaseOrder.bind(this);
    this.removePurchaseOrder = this.removePurchaseOrder.bind(this);
    
    this.state = {
      currentPurchaseOrder: this.props.currentPurchaseOrder,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentPurchaseOrder && this.props.match)
    //   this.getPurchaseOrder(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          name: name,
        },
      };
    });
  }
  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          email: email,
        },
      };
    });
  }
  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          date: date,
        },
      };
    });
  }
  onChangeStoreId(e) {
    const storeId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          storeId: storeId,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          status: status,
        },
      };
    });
  }
  onChangeShippingAddress(e) {
    const shippingAddress = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          shippingAddress: shippingAddress,
        },
      };
    });
  }
  onChangePaymentMethod(e) {
    const paymentMethod = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          paymentMethod: paymentMethod,
        },
      };
    });
  }
  onChangeDeliveryOption(e) {
    const deliveryOption = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          deliveryOption: deliveryOption,
        },
      };
    });
  }
  onChangeBillingInfo(e) {
    const billingInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          billingInfo: billingInfo,
        },
      };
    });
  }
  onChangeGross(e) {
    const gross = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          gross: gross,
        },
      };
    });
  }
  onChangeTax(e) {
    const tax = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          tax: tax,
        },
      };
    });
  }
  onChangeNet(e) {
    const net = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          net: net,
        },
      };
    });
  }
  onChangeLineItems(e) {
    const lineItems = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPurchaseOrder: {
          ...prevState.currentPurchaseOrder,
          lineItems: lineItems,
        },
      };
    });
  }

  getPurchaseOrder(id) {
    PurchaseOrdersService.get(id)
      .then((response) => {
        this.setState({
          currentPurchaseOrder: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePurchaseOrder() {
    this.props
      .updatePurchaseOrder(this.state.currentPurchaseOrder.id, this.state.currentPurchaseOrder)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The PurchaseOrder was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removePurchaseOrder() {
    this.props
      .deletePurchaseOrder(this.state.currentPurchaseOrder.id)
      .then(() => {
        this.props.history.push("/purchase-orders");
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
    const { currentPurchaseOrder } = this.state;

    return (
      <div>
      {currentPurchaseOrder ? (
        <div>
          <div className="edit-form">
            <h5>PurchaseOrder Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentPurchaseOrder.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Email</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="email"
                    value={currentPurchaseOrder.email}
                    onChange={this.onChangeEmail}
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
                    value={currentPurchaseOrder.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">StoreId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="storeId"
                    value={currentPurchaseOrder.storeId}
                    onChange={this.onChangeStoreId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ShippingAddress</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="shippingAddress"
                    value={currentPurchaseOrder.shippingAddress}
                    onChange={this.onChangeShippingAddress}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BillingInfo</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="billingInfo"
                    value={currentPurchaseOrder.billingInfo}
                    onChange={this.onChangeBillingInfo}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Gross</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="gross"
                    value={currentPurchaseOrder.gross}
                    onChange={this.onChangeGross}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Tax</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="tax"
                    value={currentPurchaseOrder.tax}
                    onChange={this.onChangeTax}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Net</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="net"
                    value={currentPurchaseOrder.net}
                    onChange={this.onChangeNet}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updatePurchaseOrder}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removePurchaseOrder}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>OrderLines</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("orderLine")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'orderLine' ? (
              <Modal 
                showModal={this.state.openedModal === 'orderLine'} 
                closeModalClick={this.closeDialog}>
                <EditOrderLine />
              </Modal>
              ): null}

              <OrderLineList PurchaseOrder={currentPurchaseOrder} editOrderLineClick={(i) => this.openEditDialog('orderLine')} />
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
    purchaseOrders: state.purchaseOrders.purchaseOrders,
  };
};

export default connect(mapStateToProps, { updatePurchaseOrder, deletePurchaseOrder })(PurchaseOrderDetails);
