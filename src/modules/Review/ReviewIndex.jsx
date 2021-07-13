import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveReviews, findReviewsByTitle, deleteReview } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import ReviewDetails from "./ReviewDetails";
import ReviewList from "./components/ReviewList";
import { NavLink } from 'react-router-dom';

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveReview = this.setActiveReview.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeReview = this.removeReview.bind(this);

    this.state = {
      currentReview: this.props.currentReview,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveReviews();
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

  setActiveReview(Review, index) {
    this.setState({
      current: Review,
      currentIndex: index,
    });
  }

  removeReview(item) {
    this.props
      .deleteReview(item)
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
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
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
            <ReviewList reviews={this.reviews} removeReviewClick={() => {}} editReviewClick={(i) => {}} />

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

export default connect(mapStateToProps, { retrieveReviews, findReviewsByTitle, deleteReview })(ReviewIndex);
