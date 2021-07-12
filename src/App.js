import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toogleSideBar } from "./store/states/actions";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Home";
        
import DepartmentModule from "./modules/Department/index";
        
import CategoryModule from "./modules/Category/index";
        
import CommodityModule from "./modules/Commodity/index";
        
import BusinessTemplateModule from "./modules/BusinessTemplate/index";
        
import SellerModule from "./modules/Seller/index";
        
import ItemModule from "./modules/Item/index";
        
import BundleModule from "./modules/Bundle/index";
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
            
        
            {DepartmentModule.routeProps.map((route,i) => ( 
              <Route key={ "Department" + i } path={route.path} exact component={route.component} />
            ))}
        
            {CategoryModule.routeProps.map((route,i) => ( 
              <Route key={ "Category" + i } path={route.path} exact component={route.component} />
            ))}
        
            {CommodityModule.routeProps.map((route,i) => ( 
              <Route key={ "Commodity" + i } path={route.path} exact component={route.component} />
            ))}
        
            {BusinessTemplateModule.routeProps.map((route,i) => ( 
              <Route key={ "BusinessTemplate" + i } path={route.path} exact component={route.component} />
            ))}
        
            {SellerModule.routeProps.map((route,i) => ( 
              <Route key={ "Seller" + i } path={route.path} exact component={route.component} />
            ))}
        
            {ItemModule.routeProps.map((route,i) => ( 
              <Route key={ "Item" + i } path={route.path} exact component={route.component} />
            ))}
        
            {BundleModule.routeProps.map((route,i) => ( 
              <Route key={ "Bundle" + i } path={route.path} exact component={route.component} />
            ))}
            
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
    modalMessageProp: state.main.modalMessage,
    showSideNavigationProp: state.main.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideBarProp: () => dispatch(toogleSideBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
