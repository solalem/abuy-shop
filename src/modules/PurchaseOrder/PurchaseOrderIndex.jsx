import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePurchaseOrders, findPurchaseOrdersByTitle, deletePurchaseOrder } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import PurchaseOrderDetails from "./PurchaseOrderDetails";
import PurchaseOrderList from "./components/PurchaseOrderList";
import { NavLink } from 'react-router-dom';

class PurchaseOrderIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActivePurchaseOrder = this.setActivePurchaseOrder.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removePurchaseOrder = this.removePurchaseOrder.bind(this);

    this.state = {
      currentPurchaseOrder: this.props.currentPurchaseOrder,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrievePurchaseOrders();
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

  setActivePurchaseOrder(PurchaseOrder, index) {
    this.setState({
      current: PurchaseOrder,
      currentIndex: index,
    });
  }

  removePurchaseOrder(item) {
    this.props
      .deletePurchaseOrder(item)
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

    this.props.findPurchaseOrdersByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { purchaseOrders } = this.props;
    let count = purchaseOrders.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/purchase-orders/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {purchaseOrders && purchaseOrders.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActivePurchaseOrder(item, index)}
                  key={index}
                >
                  <h6>{item.name}</h6>
                  <span>More Description Here</span>
                </li>
              ))}
              { count === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <PurchaseOrderDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <PurchaseOrderList purchaseOrders={this.purchaseOrders} removePurchaseOrderClick={() => {}} editPurchaseOrderClick={(i) => {}} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchaseOrders: state.purchaseOrders.purchaseOrders,
    currentPurchaseOrder: state.purchaseOrders.currentPurchaseOrder,
  };
};

export default connect(mapStateToProps, { retrievePurchaseOrders, findPurchaseOrdersByTitle, deletePurchaseOrder })(PurchaseOrderIndex);
