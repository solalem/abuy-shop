import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComparison, deleteComparison } from "./states/actions";
import ComparisonsService from "./services/api-service";
import ComparisonItemList from "./components/ComparisonItemList";
import EditComparisonItem from "./components/EditComparisonItem";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class ComparisonDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeBuyerId = this.onChangeBuyerId.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeVisitInfo = this.onChangeVisitInfo.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
    this.getComparison = this.getComparison.bind(this);
    this.updateComparison = this.updateComparison.bind(this);
    this.removeComparison = this.removeComparison.bind(this);
    
    this.state = {
      currentComparison: this.props.currentComparison,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentComparison && this.props.match)
    //   this.getComparison(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparison: {
          ...prevState.currentComparison,
          id: id,
        },
      };
    });
  }
  onChangeBuyerId(e) {
    const buyerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparison: {
          ...prevState.currentComparison,
          buyerId: buyerId,
        },
      };
    });
  }
  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparison: {
          ...prevState.currentComparison,
          date: date,
        },
      };
    });
  }
  onChangeVisitInfo(e) {
    const visitInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparison: {
          ...prevState.currentComparison,
          visitInfo: visitInfo,
        },
      };
    });
  }
  onChangeItems(e) {
    const items = e.target.value;

    this.setState(function (prevState) {
      return {
        currentComparison: {
          ...prevState.currentComparison,
          items: items,
        },
      };
    });
  }

  getComparison(id) {
    ComparisonsService.get(id)
      .then((response) => {
        this.setState({
          currentComparison: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateComparison() {
    this.props
      .updateComparison(this.state.currentComparison.id, this.state.currentComparison)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Comparison was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeComparison() {
    this.props
      .deleteComparison(this.state.currentComparison.id)
      .then(() => {
        this.props.history.push("/comparisons");
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
    const { currentComparison } = this.state;

    return (
      <div>
      {currentComparison ? (
        <div>
          <div className="edit-form">
            <h5>Comparison Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BuyerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="buyerId"
                    value={currentComparison.buyerId}
                    onChange={this.onChangeBuyerId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Date</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={currentComparison.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateComparison}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeComparison}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>ComparisonItems</Tab>
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
                <EditComparisonItem />
              </Modal>
              ): null}

              <ComparisonItemList Comparison={currentComparison} editComparisonItemClick={(attribute) => this.openEditDialog('attribute')} />
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
    comparisons: state.comparisons.comparisons,
  };
};

export default connect(mapStateToProps, { updateComparison, deleteComparison })(ComparisonDetails);
