import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveCommodities, findCommoditiesByTitle, deleteCommodity } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import CommodityDetails from "./CommodityDetails";
import CommodityList from "./components/CommodityList";
import { NavLink } from 'react-router-dom';

class CommodityIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveCommodity = this.setActiveCommodity.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeCommodity = this.removeCommodity.bind(this);

    this.state = {
      currentCommodity: this.props.currentCommodity,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveCommodities();
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

  setActiveCommodity(Commodity, index) {
    this.setState({
      current: Commodity,
      currentIndex: index,
    });
  }

  removeCommodity(item) {
    this.props
      .deleteCommodity(item)
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

    this.props.findCommoditiesByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { commodities } = this.props;
    let count = commodities.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/commodities/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {commodities && commodities.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveCommodity(item, index)}
                  key={index}
                >
                  <h6>{item.title}</h6>
                  <span>More Description Here</span>
                </li>
              ))}
              { count === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <CommodityDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <CommodityList commodities={this.props.commodities} removeCommodityClick={() => {}} editCommodityClick={(i) => {}} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    commodities: state.commodities.commodities,
    currentCommodity: state.commodities.currentCommodity,
  };
};

export default connect(mapStateToProps, { retrieveCommodities, findCommoditiesByTitle, deleteCommodity })(CommodityIndex);
