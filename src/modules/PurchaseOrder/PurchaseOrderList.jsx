import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePurchaseOrders, findPurchaseOrdersByTitle, deletePurchaseOrder } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import PurchaseOrderDetails from "./PurchaseOrderDetails";
import { NavLink } from 'react-router-dom';

class PurchaseOrdersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActivePurchaseOrder = this.setActivePurchaseOrder.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllPurchaseOrders = this.removeAllPurchaseOrders.bind(this);

    this.state = {
      currentPurchaseOrder: this.props.currentPurchaseOrder,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrievePurchaseOrders();
  }

  onChangeSearchTitle(e) {
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

  removeAllPurchaseOrders() {
    this.props
      .deletePurchaseOrder()
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
        <Search searchString={searchTitle}>
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
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Date</td>
                  <td>StoreId</td>
                  <td>ShippingAddress</td>
                  <td>BillingInfo</td>
                  <td>Gross</td>
                  <td>Tax</td>
                  <td>Net</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {purchaseOrders && purchaseOrders.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActivePurchaseOrder(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.date}</td>
                  <td>{item.storeId}</td>
                  <td>{item.shippingAddress}</td>
                  <td>{item.billingInfo}</td>
                  <td>{item.gross}</td>
                  <td>{item.tax}</td>
                  <td>{item.net}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removePurchaseOrder}
                    >
                      <i className="fa fa-trash" />
                      ?
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
            { count === 0 &&
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
    purchaseOrders: state.purchaseOrders.purchaseOrders,
    currentPurchaseOrder: state.purchaseOrders.currentPurchaseOrder,
  };
};

export default connect(mapStateToProps, { retrievePurchaseOrders, findPurchaseOrdersByTitle, deletePurchaseOrder })(PurchaseOrdersList);
