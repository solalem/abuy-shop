import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveStores, findStoresByTitle, deleteStore } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import StoreDetails from "./StoreDetails";
import { NavLink } from 'react-router-dom';

class StoresList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveStore = this.setActiveStore.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllStores = this.removeAllStores.bind(this);

    this.state = {
      currentStore: this.props.currentStore,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveStores();
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

  setActiveStore(Store, index) {
    this.setState({
      current: Store,
      currentIndex: index,
    });
  }

  removeAllStores() {
    this.props
      .deleteStore()
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
        <Search searchString={searchTitle}>
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
              <StoreDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Gebeya</td>
                  <td>Address</td>
                  <td>Latitude</td>
                  <td>Longitude</td>
                  <td>OpenedOn</td>
                  <td>OwnerId</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {stores && stores.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveStore(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.gebeya}</td>
                  <td>{item.address}</td>
                  <td>{item.latitude}</td>
                  <td>{item.longitude}</td>
                  <td>{item.openedOn}</td>
                  <td>{item.ownerId}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeStore}
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
    stores: state.stores.stores,
    currentStore: state.stores.currentStore,
  };
};

export default connect(mapStateToProps, { retrieveStores, findStoresByTitle, deleteStore })(StoresList);
