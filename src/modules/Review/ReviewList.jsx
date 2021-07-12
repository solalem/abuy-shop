import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveReviews, findReviewsByTitle, deleteReview } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ReviewDetails from "./ReviewDetails";
import { NavLink } from 'react-router-dom';

class ReviewsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveReview = this.setActiveReview.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllReviews = this.removeAllReviews.bind(this);

    this.state = {
      currentReview: this.props.currentReview,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveReviews();
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

  setActiveReview(Review, index) {
    this.setState({
      current: Review,
      currentIndex: index,
    });
  }

  removeAllReviews() {
    this.props
      .deleteReview()
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

    this.props.findReviewsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { reviews } = this.props;
    let count = reviews.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/reviews/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {reviews && reviews.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveReview(item, index)}
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
              <ReviewDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Body</td>
                  <td>Rating</td>
                  <td>IsApproved</td>
                  <td>ItemId</td>
                  <td>ItemCode</td>
                  <td>ReviewerId</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {reviews && reviews.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveReview(item, index)}
                  key={index}
                >
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.rating}</td>
                  <td>{item.isApproved}</td>
                  <td>{item.itemId}</td>
                  <td>{item.itemCode}</td>
                  <td>{item.reviewerId}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeReview}
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
    reviews: state.reviews.reviews,
    currentReview: state.reviews.currentReview,
  };
};

export default connect(mapStateToProps, { retrieveReviews, findReviewsByTitle, deleteReview })(ReviewsList);
