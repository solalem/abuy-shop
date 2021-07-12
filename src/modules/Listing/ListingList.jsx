import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveListings, findListingsByTitle, deleteListing } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ListingDetails from "./ListingDetails";
import { NavLink } from 'react-router-dom';

class ListingsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveListing = this.setActiveListing.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllListings = this.removeAllListings.bind(this);

    this.state = {
      currentListing: this.props.currentListing,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveListings();
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

  setActiveListing(Listing, index) {
    this.setState({
      current: Listing,
      currentIndex: index,
    });
  }

  removeAllListings() {
    this.props
      .deleteListing()
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

    this.props.findListingsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { listings } = this.props;
    let count = listings.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/listings/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {listings && listings.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveListing(item, index)}
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
              <ListingDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>OldPrice</td>
                  <td>ItemsQuantity</td>
                  <td>Packaging</td>
                  <td>Delivery</td>
                  <td>Terms</td>
                  <td>ReturnPolicy</td>
                  <td>ItemId</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {listings && listings.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveListing(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.oldPrice}</td>
                  <td>{item.itemsQuantity}</td>
                  <td>{item.packaging}</td>
                  <td>{item.delivery}</td>
                  <td>{item.terms}</td>
                  <td>{item.returnPolicy}</td>
                  <td>{item.itemId}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeListing}
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
    listings: state.listings.listings,
    currentListing: state.listings.currentListing,
  };
};

export default connect(mapStateToProps, { retrieveListings, findListingsByTitle, deleteListing })(ListingsList);
