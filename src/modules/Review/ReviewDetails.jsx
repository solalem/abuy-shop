import React, { Component } from "react";
import { connect } from "react-redux";
import { updateReview, deleteReview } from "./states/actions";
import ReviewsService from "./services/api-service";
import CommentList from "./components/CommentList";
import EditComment from "./components/EditComment";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class ReviewDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeIsApproved = this.onChangeIsApproved.bind(this);
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemCode = this.onChangeItemCode.bind(this);
    this.onChangeReviewerId = this.onChangeReviewerId.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.getReview = this.getReview.bind(this);
    this.updateReview = this.updateReview.bind(this);
    this.removeReview = this.removeReview.bind(this);
    
    this.state = {
      currentReview: this.props.currentReview,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentReview && this.props.match)
    //   this.getReview(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          id: id,
        },
      };
    });
  }
  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          title: title,
        },
      };
    });
  }
  onChangeBody(e) {
    const body = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          body: body,
        },
      };
    });
  }
  onChangeRating(e) {
    const rating = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          rating: rating,
        },
      };
    });
  }
  onChangeIsApproved(e) {
    const isApproved = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          isApproved: isApproved,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          itemId: itemId,
        },
      };
    });
  }
  onChangeItemCode(e) {
    const itemCode = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          itemCode: itemCode,
        },
      };
    });
  }
  onChangeReviewerId(e) {
    const reviewerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          reviewerId: reviewerId,
        },
      };
    });
  }
  onChangeComments(e) {
    const comments = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          comments: comments,
        },
      };
    });
  }

  getReview(id) {
    ReviewsService.get(id)
      .then((response) => {
        this.setState({
          currentReview: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateReview() {
    this.props
      .updateReview(this.state.currentReview.id, this.state.currentReview)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Review was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeReview() {
    this.props
      .deleteReview(this.state.currentReview.id)
      .then(() => {
        this.props.history.push("/reviews");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  openAddDialog = (modal) => {
    this.setState({ openedModal: modal });
  };

  openEditDialog = (modal) => {
    this.setState({ openedModal: modal });
  };

  closeDialog = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const { currentReview } = this.state;

    return (
      <div>
      {currentReview ? (
        <div>
          <div className="edit-form">
            <h5>Review Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Title</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="title"
                    value={currentReview.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Body</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="body"
                    value={currentReview.body}
                    onChange={this.onChangeBody}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Rating</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    value={currentReview.rating}
                    onChange={this.onChangeRating}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsApproved</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isApproved"
                    value={currentReview.isApproved}
                    onChange={this.onChangeIsApproved}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemId"
                    value={currentReview.itemId}
                    onChange={this.onChangeItemId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemCode</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemCode"
                    value={currentReview.itemCode}
                    onChange={this.onChangeItemCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ReviewerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="reviewerId"
                    value={currentReview.reviewerId}
                    onChange={this.onChangeReviewerId}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateReview}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeReview}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Comments</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchString={this.state.attributesSearchString}>
                <button 
                onClick={() => this.openAddDialog("attribute")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'attribute' ? (
              <Modal 
                showModal={this.state.openedModal === 'attribute'} 
                closeModalClick={this.closeDialog}>
                <EditComment />
              </Modal>
              ): null}

              <CommentList Review={currentReview} editCommentClick={(attribute) => this.openEditDialog('attribute')} />
            </TabPanel>
            <TabPanel>
              <p>More content</p>
            </TabPanel>
          </Tabs>
        </div>

        ) : (
          <div>
            <br />
            <p>Not Data Found</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
  };
};

export default connect(mapStateToProps, { updateReview, deleteReview })(ReviewDetails);
