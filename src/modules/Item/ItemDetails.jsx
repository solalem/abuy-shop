import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "./states/actions";
import ItemsService from "./services/api-service";
import ItemPropertyList from "./components/ItemPropertyList";
import EditItemProperty from "./components/EditItemProperty";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeCommodityId = this.onChangeCommodityId.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeOldPrice = this.onChangeOldPrice.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeMPN = this.onChangeMPN.bind(this);
    this.onChangeGTIN = this.onChangeGTIN.bind(this);
    this.onChangeGtinType = this.onChangeGtinType.bind(this);
    this.onChangeReservedQuantity = this.onChangeReservedQuantity.bind(this);
    this.onChangeAvalableQuantity = this.onChangeAvalableQuantity.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeFulfilmentOption = this.onChangeFulfilmentOption.bind(this);
    this.onChangeFulfilmentMethod = this.onChangeFulfilmentMethod.bind(this);
    this.onChangeSellerId = this.onChangeSellerId.bind(this);
    this.onChangeProperties = this.onChangeProperties.bind(this);
    this.getItem = this.getItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    
    this.state = {
      currentItem: this.props.currentItem,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentItem && this.props.match)
    //   this.getItem(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          name: name,
        },
      };
    });
  }
  onChangeBrand(e) {
    const brand = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          brand: brand,
        },
      };
    });
  }
  onChangeCommodityId(e) {
    const commodityId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          commodityId: commodityId,
        },
      };
    });
  }
  onChangeModel(e) {
    const model = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          model: model,
        },
      };
    });
  }
  onChangeOldPrice(e) {
    const oldPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          oldPrice: oldPrice,
        },
      };
    });
  }
  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          price: price,
        },
      };
    });
  }
  onChangeMPN(e) {
    const mPN = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          mPN: mPN,
        },
      };
    });
  }
  onChangeGTIN(e) {
    const gTIN = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          gTIN: gTIN,
        },
      };
    });
  }
  onChangeGtinType(e) {
    const gtinType = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          gtinType: gtinType,
        },
      };
    });
  }
  onChangeReservedQuantity(e) {
    const reservedQuantity = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          reservedQuantity: reservedQuantity,
        },
      };
    });
  }
  onChangeAvalableQuantity(e) {
    const avalableQuantity = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          avalableQuantity: avalableQuantity,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          status: status,
        },
      };
    });
  }
  onChangeFulfilmentOption(e) {
    const fulfilmentOption = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          fulfilmentOption: fulfilmentOption,
        },
      };
    });
  }
  onChangeFulfilmentMethod(e) {
    const fulfilmentMethod = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          fulfilmentMethod: fulfilmentMethod,
        },
      };
    });
  }
  onChangeSellerId(e) {
    const sellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          sellerId: sellerId,
        },
      };
    });
  }
  onChangeProperties(e) {
    const properties = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          properties: properties,
        },
      };
    });
  }

  getItem(id) {
    ItemsService.get(id)
      .then((response) => {
        this.setState({
          currentItem: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateItem() {
    this.props
      .updateItem(this.state.currentItem.id, this.state.currentItem)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Item was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeItem() {
    this.props
      .deleteItem(this.state.currentItem.id)
      .then(() => {
        this.props.history.push("/items");
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
    const { currentItem } = this.state;

    return (
      <div>
      {currentItem ? (
        <div>
          <div className="edit-form">
            <h5>Item Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentItem.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Brand</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="brand"
                    value={currentItem.brand}
                    onChange={this.onChangeBrand}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CommodityId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="commodityId"
                    value={currentItem.commodityId}
                    onChange={this.onChangeCommodityId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Model</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="model"
                    value={currentItem.model}
                    onChange={this.onChangeModel}
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
                    value={currentItem.oldPrice}
                    onChange={this.onChangeOldPrice}
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
                    value={currentItem.price}
                    onChange={this.onChangePrice}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">MPN</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="mPN"
                    value={currentItem.mPN}
                    onChange={this.onChangeMPN}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">GTIN</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="gTIN"
                    value={currentItem.gTIN}
                    onChange={this.onChangeGTIN}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ReservedQuantity</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="reservedQuantity"
                    value={currentItem.reservedQuantity}
                    onChange={this.onChangeReservedQuantity}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">AvalableQuantity</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="avalableQuantity"
                    value={currentItem.avalableQuantity}
                    onChange={this.onChangeAvalableQuantity}
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
                    value={currentItem.sellerId}
                    onChange={this.onChangeSellerId}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateItem}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeItem}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>ItemProperties</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchString={this.state.attributesSearchString}>
                <button 
                onClick={() => this.openAddDialog("attribute")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'attribute' ? (
              <Modal 
                showModal={this.state.openedModal === 'attribute'} 
                closeModalClick={this.closeDialog}>
                <EditItemProperty />
              </Modal>
              ): null}

              <ItemPropertyList Item={currentItem} editItemPropertyClick={(attribute) => this.openEditDialog('attribute')} />
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
    items: state.items.items,
  };
};

export default connect(mapStateToProps, { updateItem, deleteItem })(ItemDetails);
