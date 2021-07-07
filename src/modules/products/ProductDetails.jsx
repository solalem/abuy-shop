import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProduct, deleteProduct } from "./states/productsActions";
import ProductsService from "./services/products.service";
import AttributeList from "./components/AttributeList";
import EditAttribute from "./components/EditAttribute";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSlug = this.onChangeSlug.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    
    this.state = {
      currentProduct: this.props.currentProduct,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentProduct && this.props.match)
    //   this.getProduct(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          name: name,
        },
      };
    });
  }

  onChangeSlug(e) {
    const slug = e.target.value;

    this.setState((prevState) => ({
      currentProduct: {
        ...prevState.currentProduct,
        slug: slug,
      },
    }));
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState((prevState) => ({
      currentProduct: {
        ...prevState.currentProduct,
        price: price,
      },
    }));
  }

  getProduct(id) {
    ProductsService.get(id)
      .then((response) => {
        this.setState({
          currentProduct: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateProduct() {
    this.props
      .updateProduct(this.state.currentProduct.id, this.state.currentProduct)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The product was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeProduct() {
    this.props
      .deleteProduct(this.state.currentProduct.id)
      .then(() => {
        this.props.history.push("/products");
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
    const { currentProduct } = this.state;

    return (
      <div>
      {currentProduct ? (
        <div>
          <div className="edit-form">
            <h5>Product Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={currentProduct.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="slug">Slug</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    value={currentProduct.slug}
                    onChange={this.onChangeSlug}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label"  htmlFor="name">Price:</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={currentProduct.price}
                    onChange={this.onChangePrice}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateProduct}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeProduct}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Attributes</Tab>
              <Tab>Title 2</Tab>
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
                <EditAttribute />
              </Modal>
              ): null}

              <AttributeList product={currentProduct} editAttributeClick={(attribute) => this.openEditDialog('attribute')} />
            </TabPanel>
            <TabPanel>
              <p>Any content 2</p>
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
    products: state.products.products,
    //currentProduct: state.products.currentProduct,
  };
};

export default connect(mapStateToProps, { updateProduct, deleteProduct })(ProductDetails);

