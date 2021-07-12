import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveComparisons, findComparisonsByTitle, deleteComparison } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ComparisonDetails from "./ComparisonDetails";
import { NavLink } from 'react-router-dom';

class ComparisonsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveComparison = this.setActiveComparison.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllComparisons = this.removeAllComparisons.bind(this);

    this.state = {
      currentComparison: this.props.currentComparison,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveComparisons();
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

  setActiveComparison(Comparison, index) {
    this.setState({
      current: Comparison,
      currentIndex: index,
    });
  }

  removeAllComparisons() {
    this.props
      .deleteComparison()
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

    this.props.findComparisonsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { comparisons } = this.props;
    let count = comparisons.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/comparisons/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {comparisons && comparisons.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveComparison(item, index)}
                  key={index}
                >
                  <h6>{item.id}</h6>
                  <span>More Description Here</span>
                </li>
              ))}
              { count === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <ComparisonDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>BuyerId</td>
                  <td>Date</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {comparisons && comparisons.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveComparison(item, index)}
                  key={index}
                >
                  <td>{item.buyerId}</td>
                  <td>{item.date}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeComparison}
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
    comparisons: state.comparisons.comparisons,
    currentComparison: state.comparisons.currentComparison,
  };
};

export default connect(mapStateToProps, { retrieveComparisons, findComparisonsByTitle, deleteComparison })(ComparisonsList);
