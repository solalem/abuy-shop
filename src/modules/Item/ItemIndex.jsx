import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveItems, findItemsByTitle, deleteItem } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ItemDetails from "./ItemDetails";
import ItemList from "./components/ItemList";
import { NavLink } from 'react-router-dom';

class ItemIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      currentItem: this.props.currentItem,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveItems();
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

  setActiveItem(Item, index) {
    this.setState({
      current: Item,
      currentIndex: index,
    });
  }

  removeItem(item) {
    this.props
      .deleteItem(item)
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
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
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
            <ItemList items={this.items} removeItemClick={() => {}} editItemClick={(i) => {}} />

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

export default connect(mapStateToProps, { retrieveItems, findItemsByTitle, deleteItem })(ItemIndex);
