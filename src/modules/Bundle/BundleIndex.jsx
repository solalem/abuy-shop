import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveBundles, findBundlesByTitle, deleteBundle } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import BundleDetails from "./BundleDetails";
import BundleList from "./components/BundleList";
import { NavLink } from 'react-router-dom';

class BundleIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveBundle = this.setActiveBundle.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeBundle = this.removeBundle.bind(this);

    this.state = {
      currentBundle: this.props.currentBundle,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveBundles();
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

  setActiveBundle(Bundle, index) {
    this.setState({
      current: Bundle,
      currentIndex: index,
    });
  }

  removeBundle(item) {
    this.props
      .deleteBundle(item)
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

    this.props.findBundlesByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { bundles } = this.props;
    let count = bundles.length;

    return (
      <>
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
          <NavLink to={'/bundles/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {bundles && bundles.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveBundle(item, index)}
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
              <BundleDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <BundleList bundles={this.bundles} removeBundleClick={() => {}} editBundleClick={(i) => {}} />

          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bundles: state.bundles.bundles,
    currentBundle: state.bundles.currentBundle,
  };
};

export default connect(mapStateToProps, { retrieveBundles, findBundlesByTitle, deleteBundle })(BundleIndex);
