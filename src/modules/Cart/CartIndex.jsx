import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveCarts, findCartsByTitle, deleteCart } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import CartDetails from "./CartDetails";
import CartList from "./components/CartList";
import { NavLink } from 'react-router-dom';

class CartIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveCart = this.setActiveCart.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeCart = this.removeCart.bind(this);

    this.state = {
      currentCart: this.props.currentCart,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveCarts();
  }

  onChangeSearchString(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      current: null,
      currentIndex: -1,
    });
  }

  setActiveCart(Cart, index) {
    this.setState({
      current: Cart,
      currentIndex: index,
    });
  }

  removeCart(item) {
    this.props
      .deleteCart(item)
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

    this.props.findCartsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { carts } = this.props;
    let count = carts.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/carts/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {carts && carts.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveCart(item, index)}
                  key={index}
                >
                  <h6>{item.id}</h6>
                  <span>More Description Here</span>
                </li>
              ))}
              { count === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <CartDetails currentCart={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <CartList carts={this.props.carts} removeCartClick={() => {}} editCartClick={(item, index) => this.setActiveCart(item, index)} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.carts.carts,
    currentCart: state.carts.currentCart,
  };
};

export default connect(mapStateToProps, { retrieveCarts, findCartsByTitle, deleteCart })(CartIndex);
