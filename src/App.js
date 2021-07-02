import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toogleSideBar } from "./store/states/actions";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Home/Home";
//import CheckoutModule from "./modules/checkout/index";
import ProductModule from "./modules/products/index";
//import Sidebar from "./Home/components/Sidebar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout
          storeCartCount={this.props.storeCartItemsCount}
          //showModal={this.props.showModalProp}
          //closeModalProp={this.props.closeModalProp}
          modalMessage={this.props.modalMessageProp}
          showSideBar={this.props.showSideNavigationProp}
          toggleSideBar={this.props.toggleSideBarProp}
        >
          <Switch>
            <Route path={"/"} exact component={Home} />
            
            {ProductModule.routeProps.map((route,i) => ( 
              <Route key={ "product" + i } path={route.path} exact component={route.component} />
            ))}
            
            <Route
              path={"/product/:productSlug"}
              render={(props) => (
                <ProductModule.ProductDetail
                  key={props.match.params.productSlug}
                  {...props}
                />
              )}
            />
            {/*always redirect to index*/}
            <Redirect to={"/"} />
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //storeCartItemsCount: state.checkout.cartTotal,
    //showModalProp: state.main.productMaxShowModal,
    modalMessageProp: state.main.modalMessage,
    showSideNavigationProp: state.main.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //closeModalProp: () => dispatch(closeMaxProductModal()),
    toggleSideBarProp: () => dispatch(toogleSideBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
