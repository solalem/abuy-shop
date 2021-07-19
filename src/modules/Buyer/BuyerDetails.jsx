import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBuyer, deleteBuyer } from "./states/actions";
import BuyersService from "./services/api-service";
import MamilaList from "./components/MamilaList";
import EditMamila from "./components/EditMamila";
import FavouriteItemList from "./components/FavouriteItemList";
import EditFavouriteItem from "./components/EditFavouriteItem";
import RecommendationList from "./components/RecommendationList";
import EditRecommendation from "./components/EditRecommendation";
import CartList from "../Cart/components/CartList";
import ComparisonList from "../Comparison/components/ComparisonList";
import ReviewList from "../Review/components/ReviewList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class BuyerDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeAccountId = this.onChangeAccountId.bind(this);
    this.onChangeDefaultShippingAddress = this.onChangeDefaultShippingAddress.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDefaultBillingInfo = this.onChangeDefaultBillingInfo.bind(this);
    this.onChangeMamilas = this.onChangeMamilas.bind(this);
    this.onChangeFavourites = this.onChangeFavourites.bind(this);
    this.onChangeRecommendations = this.onChangeRecommendations.bind(this);
    this.getBuyer = this.getBuyer.bind(this);
    this.updateBuyer = this.updateBuyer.bind(this);
    this.removeBuyer = this.removeBuyer.bind(this);
    
    this.state = {
      currentBuyer: this.props.currentBuyer,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentBuyer && this.props.match)
    //   this.getBuyer(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          id: id,
        },
      };
    });
  }
  onChangeFullName(e) {
    const fullName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          fullName: fullName,
        },
      };
    });
  }
  onChangeBirthDate(e) {
    const birthDate = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          birthDate: birthDate,
        },
      };
    });
  }
  onChangeAccountId(e) {
    const accountId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          accountId: accountId,
        },
      };
    });
  }
  onChangeDefaultShippingAddress(e) {
    const defaultShippingAddress = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          defaultShippingAddress: defaultShippingAddress,
        },
      };
    });
  }
  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          status: status,
        },
      };
    });
  }
  onChangeDefaultBillingInfo(e) {
    const defaultBillingInfo = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          defaultBillingInfo: defaultBillingInfo,
        },
      };
    });
  }
  onChangeMamilas(e) {
    const mamilas = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          mamilas: mamilas,
        },
      };
    });
  }
  onChangeFavourites(e) {
    const favourites = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          favourites: favourites,
        },
      };
    });
  }
  onChangeRecommendations(e) {
    const recommendations = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBuyer: {
          ...prevState.currentBuyer,
          recommendations: recommendations,
        },
      };
    });
  }

  getBuyer(id) {
    BuyersService.get(id)
      .then((response) => {
        this.setState({
          currentBuyer: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateBuyer() {
    this.props
      .updateBuyer(this.state.currentBuyer.id, this.state.currentBuyer)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Buyer was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeBuyer() {
    this.props
      .deleteBuyer(this.state.currentBuyer.id)
      .then(() => {
        this.props.history.push("/buyers");
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
    const { currentBuyer } = this.state;

    return (
      <div>
      {currentBuyer ? (
        <div>
          <div className="edit-form">
            <h5>Buyer Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">FullName</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="fullName"
                    value={currentBuyer.fullName}
                    onChange={this.onChangeFullName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BirthDate</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="birthDate"
                    value={currentBuyer.birthDate}
                    onChange={this.onChangeBirthDate}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">AccountId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="accountId"
                    value={currentBuyer.accountId}
                    onChange={this.onChangeAccountId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">DefaultShippingAddress</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="defaultShippingAddress"
                    value={currentBuyer.defaultShippingAddress}
                    onChange={this.onChangeDefaultShippingAddress}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateBuyer}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeBuyer}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Mamilas</Tab>
              <Tab>FavouriteItems</Tab>
              <Tab>Recommendations</Tab>
              <Tab>Carts</Tab>
              <Tab>Comparisons</Tab>
              <Tab>Reviews</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("mamila")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'mamila' ? (
              <Modal 
                showModal={this.state.openedModal === 'mamila'} 
                closeModalClick={this.closeDialog}>
                <EditMamila />
              </Modal>
              ): null}

              <MamilaList Buyer={currentBuyer} editMamilaClick={(i) => this.openEditDialog('mamila')} />
            </TabPanel>
            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("favouriteItem")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'favouriteItem' ? (
              <Modal 
                showModal={this.state.openedModal === 'favouriteItem'} 
                closeModalClick={this.closeDialog}>
                <EditFavouriteItem />
              </Modal>
              ): null}

              <FavouriteItemList Buyer={currentBuyer} editFavouriteItemClick={(i) => this.openEditDialog('favouriteItem')} />
            </TabPanel>
            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("recommendation")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'recommendation' ? (
              <Modal 
                showModal={this.state.openedModal === 'recommendation'} 
                closeModalClick={this.closeDialog}>
                <EditRecommendation />
              </Modal>
              ): null}

              <RecommendationList Buyer={currentBuyer} editRecommendationClick={(i) => this.openEditDialog('recommendation')} />
            </TabPanel>
            <TabPanel>
              <Search />
              
              <CartList />
            </TabPanel>
            <TabPanel>
              <Search />
              
              <ComparisonList />
            </TabPanel>
            <TabPanel>
              <Search />
              
              <ReviewList />
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
    buyers: state.buyers.buyers,
  };
};

export default connect(mapStateToProps, { updateBuyer, deleteBuyer })(BuyerDetails);
