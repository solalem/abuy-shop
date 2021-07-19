import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveListings, findListingsByTitle, deleteListing } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ListingDetails from "./ListingDetails";
import ListingList from "./components/ListingList";
import { NavLink } from 'react-router-dom';

class ListingIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveListing = this.setActiveListing.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeListing = this.removeListing.bind(this);

    this.state = {
      currentListing: this.props.currentListing,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveListings();
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

  setActiveListing(Listing, index) {
    this.setState({
      current: Listing,
      currentIndex: index,
    });
  }

  removeListing(item) {
    this.props
      .deleteListing(item)
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
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
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
            <ListingList listings={this.props.listings} removeListingClick={() => {}} editListingClick={(i) => {}} />

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

export default connect(mapStateToProps, { retrieveListings, findListingsByTitle, deleteListing })(ListingIndex);
