import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem } from "./states/actions";
import ApiService from "./services/api-service";

class CreateItem extends Component {
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
    this.createItem = this.createItem.bind(this);

    this.state = {
      newItem: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          name: name,
        },
      };
    });
  }
  onChangeBrand(e) {
    const brand = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          brand: brand,
        },
      };
    });
  }
  onChangeCommodityId(e) {
    const commodityId = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          commodityId: commodityId,
        },
      };
    });
  }
  onChangeModel(e) {
    const model = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          model: model,
        },
      };
    });
  }
  onChangeOldPrice(e) {
    const oldPrice = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          oldPrice: oldPrice,
        },
      };
    });
  }
  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          price: price,
        },
      };
    });
  }
  onChangeMPN(e) {
    const mPN = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          mPN: mPN,
        },
      };
    });
  }
  onChangeGTIN(e) {
    const gTIN = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          gTIN: gTIN,
        },
      };
    });
  }
  onChangeGtinType(e) {
    const gtinType = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          gtinType: gtinType,
        },
      };
    });
  }
  onChangeReservedQuantity(e) {
    const reservedQuantity = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          reservedQuantity: reservedQuantity,
        },
      };
    });
  }
  onChangeAvalableQuantity(e) {
    const avalableQuantity = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          avalableQuantity: avalableQuantity,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          status: status,
        },
      };
    });
  }
  onChangeFulfilmentOption(e) {
    const fulfilmentOption = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          fulfilmentOption: fulfilmentOption,
        },
      };
    });
  }
  onChangeFulfilmentMethod(e) {
    const fulfilmentMethod = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          fulfilmentMethod: fulfilmentMethod,
        },
      };
    });
  }
  onChangeSellerId(e) {
    const sellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          sellerId: sellerId,
        },
      };
    });
  }
  onChangeProperties(e) {
    const properties = e.target.value;

    this.setState(function (prevState) {
      return {
        newItem: {
          ...prevState.newItem,
          properties: properties,
        },
      };
    });
  }

  createItem() {
    ApiService.createItem(this.state.newItem)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Item was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newItem } = this.state;

    return (
        <div className="m-2">
        {newItem ? (
          <div className="edit-form">
            <h4>New Item</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={newItem.name}
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
                    value={newItem.brand}
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
                    value={newItem.commodityId}
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
                    value={newItem.model}
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
                    value={newItem.oldPrice}
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
                    value={newItem.price}
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
                    value={newItem.mPN}
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
                    value={newItem.gTIN}
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
                    value={newItem.reservedQuantity}
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
                    value={newItem.avalableQuantity}
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
                    value={newItem.sellerId}
                    onChange={this.onChangeSellerId}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createItem}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Item not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateItem })(CreateItem);
