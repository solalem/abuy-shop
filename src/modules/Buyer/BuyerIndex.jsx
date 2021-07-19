import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveBuyers, findBuyersByTitle, deleteBuyer } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import BuyerDetails from "./BuyerDetails";
import BuyerList from "./components/BuyerList";
import { NavLink } from 'react-router-dom';

class BuyerIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveBuyer = this.setActiveBuyer.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeBuyer = this.removeBuyer.bind(this);

    this.state = {
      currentBuyer: this.props.currentBuyer,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveBuyers();
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

  setActiveBuyer(Buyer, index) {
    this.setState({
      current: Buyer,
      currentIndex: index,
    });
  }

  removeBuyer(item) {
    this.props
      .deleteBuyer(item)
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

    this.props.findBuyersByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { buyers } = this.props;
    let count = buyers.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/buyers/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {buyers && buyers.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveBuyer(item, index)}
                  key={index}
                >
                  <h6>{item.fullName}</h6>
                  <span>More Description Here</span>
                </li>
              ))}
              { count === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <BuyerDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <BuyerList buyers={this.props.buyers} removeBuyerClick={() => {}} editBuyerClick={(i) => {}} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buyers: state.buyers.buyers,
    currentBuyer: state.buyers.currentBuyer,
  };
};

export default connect(mapStateToProps, { retrieveBuyers, findBuyersByTitle, deleteBuyer })(BuyerIndex);
