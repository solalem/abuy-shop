import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveStores, findStoresByTitle, deleteStore } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import StoreDetails from "./StoreDetails";
import StoreList from "./components/StoreList";
import { NavLink } from 'react-router-dom';

class StoreIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveStore = this.setActiveStore.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeStore = this.removeStore.bind(this);

    this.state = {
      currentStore: this.props.currentStore,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveStores();
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

  setActiveStore(Store, index) {
    this.setState({
      current: Store,
      currentIndex: index,
    });
  }

  removeStore(item) {
    this.props
      .deleteStore(item)
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

    this.props.findStoresByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { stores } = this.props;
    let count = stores.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/stores/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {stores && stores.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveStore(item, index)}
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
              <StoreDetails currentStore={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <StoreList stores={this.props.stores} removeStoreClick={() => {}} editStoreClick={(item, index) => this.setActiveStore(item, index)} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stores: state.stores.stores,
    currentStore: state.stores.currentStore,
  };
};

export default connect(mapStateToProps, { retrieveStores, findStoresByTitle, deleteStore })(StoreIndex);
