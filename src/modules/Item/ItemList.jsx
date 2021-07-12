import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveItems, findItemsByTitle, deleteItem } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ItemDetails from "./ItemDetails";
import { NavLink } from 'react-router-dom';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);

    this.state = {
      currentItem: this.props.currentItem,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveItems();
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

  setActiveItem(Item, index) {
    this.setState({
      current: Item,
      currentIndex: index,
    });
  }

  removeAllItems() {
    this.props
      .deleteItem()
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

    this.props.findItemsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { items } = this.props;
    let count = items.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/items/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {items && items.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveItem(item, index)}
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
              <ItemDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Brand</td>
                  <td>CommodityId</td>
                  <td>Model</td>
                  <td>OldPrice</td>
                  <td>Price</td>
                  <td>MPN</td>
                  <td>GTIN</td>
                  <td>ReservedQuantity</td>
                  <td>AvalableQuantity</td>
                  <td>SellerId</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {items && items.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveItem(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.commodityId}</td>
                  <td>{item.model}</td>
                  <td>{item.oldPrice}</td>
                  <td>{item.price}</td>
                  <td>{item.mPN}</td>
                  <td>{item.gTIN}</td>
                  <td>{item.reservedQuantity}</td>
                  <td>{item.avalableQuantity}</td>
                  <td>{item.sellerId}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeItem}
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
    items: state.items.items,
    currentItem: state.items.currentItem,
  };
};

export default connect(mapStateToProps, { retrieveItems, findItemsByTitle, deleteItem })(ItemsList);
