import React, { Component } from "react";
import { connect } from "react-redux";
import { createItem } from "./states/actions";
import ApiService from "./services/api-service";

class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createItem = this.createItem.bind(this);

    this.state = {
      id: '',
      name: '',
      brand: '',
      commodityId: '',
      model: '',
      oldPrice: '',
      price: '',
      mPN: '',
      gTIN: '',
      gtinType: '',
      reservedQuantity: '',
      avalableQuantity: '',
      status: '',
      fulfilmentOption: '',
      fulfilmentMethod: '',
      sellerId: '',
      properties: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createItem() {
    ApiService.createItem(
      {
        id: this.state.id,
        name: this.state.name,
        brand: this.state.brand,
        commodityId: this.state.commodityId,
        model: this.state.model,
        oldPrice: this.state.oldPrice,
        price: this.state.price,
        mPN: this.state.mPN,
        gTIN: this.state.gTIN,
        gtinType: this.state.gtinType,
        reservedQuantity: this.state.reservedQuantity,
        avalableQuantity: this.state.avalableQuantity,
        status: this.state.status,
        fulfilmentOption: this.state.fulfilmentOption,
        fulfilmentMethod: this.state.fulfilmentMethod,
        sellerId: this.state.sellerId,
        properties: this.state.properties,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Item was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
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
                    value={this.state.brand}
                    onChange={(e) => this.handleChange({ brand: e.target.value })}
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
                    value={this.state.commodityId}
                    onChange={(e) => this.handleChange({ commodityId: e.target.value })}
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
                    value={this.state.model}
                    onChange={(e) => this.handleChange({ model: e.target.value })}
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
                <label className="col-sm-2 col-form-label" htmlFor="name">MPN</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="mPN"
                    value={this.state.mPN}
                    onChange={(e) => this.handleChange({ mPN: e.target.value })}
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
                    value={this.state.gTIN}
                    onChange={(e) => this.handleChange({ gTIN: e.target.value })}
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
                    value={this.state.reservedQuantity}
                    onChange={(e) => this.handleChange({ reservedQuantity: e.target.value })}
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
                    value={this.state.avalableQuantity}
                    onChange={(e) => this.handleChange({ avalableQuantity: e.target.value })}
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
                    value={this.state.sellerId}
                    onChange={(e) => this.handleChange({ sellerId: e.target.value })}
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
      </div>
    );
  }
}

export default connect(null, { createItem })(CreateItem);
