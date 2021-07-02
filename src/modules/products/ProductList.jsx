import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveProducts, findProductsByTitle, deleteProduct } from "./states/productsActions";
import Search from "../../shared/UI/Search";
import NoData from "../../shared/UI/NoData";
import ProductDetails from "./ProductDetails";
import { NavLink } from 'react-router-dom';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);

    this.state = {
      currentProduct: this.props.currentProduct,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveProducts();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentProduct: null,
      currentIndex: -1,
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index,
    });
  }

  removeAllProducts() {
    this.props
      .deleteProduct()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findProductsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, currentProduct, currentIndex } = this.state;
    const { products } = this.props;
    let productsCount = products.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/products/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { currentProduct ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {products && products.map((product, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  <h6>{product.name}</h6>
                  <span>{product.category}</span>
                </li>
              ))}
              { productsCount === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <ProductDetails currentProduct={currentProduct} 
              key={currentProduct.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Category</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {products && products.map((product, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeProduct}
                    >
                      <i className="fa fa-trash" />
                      ✖
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
            { productsCount === 0 &&
              <NoData />
            }
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    currentProduct: state.products.currentProduct,
  };
};

export default connect(mapStateToProps, { retrieveProducts, findProductsByTitle, deleteProduct })(ProductsList);