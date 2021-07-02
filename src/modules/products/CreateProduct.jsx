import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProduct } from "./states/productsActions";
import ProductsService from "./services/products.service";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSlug = this.onChangeSlug.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.createProduct = this.createProduct.bind(this);

    this.state = {
      newProduct: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newProduct: {
          ...prevState.newProduct,
          name: name,
        },
      };
    });
  }

  onChangeSlug(e) {
    const slug = e.target.value;

    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        slug: slug,
      },
    }));
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        price: price,
      },
    }));
  }

  createProduct() {
    ProductsService.createProduct(this.state.newProduct)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The product was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newProduct } = this.state;

    return (
        <div className="m-2">
        {newProduct ? (
          <div className="edit-form">
            <h4>New Product</h4>
            <form>
              <div className="row gx-0 mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={newProduct.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row gx-0 mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="slug">Slug</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    value={newProduct.slug}
                    onChange={this.onChangeSlug}
                  />
                </div>
              </div>
              <div className="row gx-0 mb-3">
                <label className="col-sm-2 col-form-label"  htmlFor="name">Price:</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={newProduct.price}
                    onChange={this.onChangePrice}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createProduct}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Product not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateProduct })(CreateProduct);
