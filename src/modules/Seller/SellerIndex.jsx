import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveSellers, findSellersByTitle, deleteSeller } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import SellerDetails from "./SellerDetails";
import SellerList from "./components/SellerList";
import { NavLink } from 'react-router-dom';

class SellerIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveSeller = this.setActiveSeller.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeSeller = this.removeSeller.bind(this);

    this.state = {
      currentSeller: this.props.currentSeller,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveSellers();
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

  setActiveSeller(Seller, index) {
    this.setState({
      current: Seller,
      currentIndex: index,
    });
  }

  removeSeller(item) {
    this.props
      .deleteSeller(item)
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

    this.props.findSellersByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { sellers } = this.props;
    let count = sellers.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/sellers/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {sellers && sellers.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveSeller(item, index)}
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
              <SellerDetails currentSeller={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <SellerList sellers={this.props.sellers} removeSellerClick={() => {}} editSellerClick={(item, index) => this.setActiveSeller(item, index)} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sellers: state.sellers.sellers,
    currentSeller: state.sellers.currentSeller,
  };
};

export default connect(mapStateToProps, { retrieveSellers, findSellersByTitle, deleteSeller })(SellerIndex);
