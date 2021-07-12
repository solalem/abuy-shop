import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveBundles, findBundlesByTitle, deleteBundle } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import BundleDetails from "./BundleDetails";
import { NavLink } from 'react-router-dom';

class BundlesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveBundle = this.setActiveBundle.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllBundles = this.removeAllBundles.bind(this);

    this.state = {
      currentBundle: this.props.currentBundle,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveBundles();
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

  setActiveBundle(Bundle, index) {
    this.setState({
      current: Bundle,
      currentIndex: index,
    });
  }

  removeAllBundles() {
    this.props
      .deleteBundle()
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
        <Search searchString={searchTitle}>
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
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Description</td>
                  <td>SellerId</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {bundles && bundles.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveBundle(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.sellerId}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeBundle}
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
    bundles: state.bundles.bundles,
    currentBundle: state.bundles.currentBundle,
  };
};

export default connect(mapStateToProps, { retrieveBundles, findBundlesByTitle, deleteBundle })(BundlesList);
