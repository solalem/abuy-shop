import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBundle, deleteBundle } from "./states/actions";
import BundlesService from "./services/api-service";
import BundleItemList from "./components/BundleItemList";
import EditBundleItem from "./components/EditBundleItem";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";
import 'react-tabs/style/react-tabs.css';

class BundleDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSellerId = this.onChangeSellerId.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
    this.getBundle = this.getBundle.bind(this);
    this.updateBundle = this.updateBundle.bind(this);
    this.removeBundle = this.removeBundle.bind(this);
    
    this.state = {
      currentBundle: this.props.currentBundle,
      openedModal: null,
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentBundle && this.props.match)
    //   this.getBundle(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundle: {
          ...prevState.currentBundle,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundle: {
          ...prevState.currentBundle,
          name: name,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundle: {
          ...prevState.currentBundle,
          description: description,
        },
      };
    });
  }
  onChangeSellerId(e) {
    const sellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundle: {
          ...prevState.currentBundle,
          sellerId: sellerId,
        },
      };
    });
  }
  onChangeItems(e) {
    const items = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundle: {
          ...prevState.currentBundle,
          items: items,
        },
      };
    });
  }

  getBundle(id) {
    BundlesService.get(id)
      .then((response) => {
        this.setState({
          currentBundle: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateBundle() {
    this.props
      .updateBundle(this.state.currentBundle.id, this.state.currentBundle)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Bundle was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeBundle() {
    this.props
      .deleteBundle(this.state.currentBundle.id)
      .then(() => {
        this.props.history.push("/bundles");
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
    const { currentBundle } = this.state;

    return (
      <div>
      {currentBundle ? (
        <div>
          <div className="edit-form">
            <h5>Bundle Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentBundle.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Description</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="description"
                    value={currentBundle.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">SellerId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="sellerId"
                    value={currentBundle.sellerId}
                    onChange={this.onChangeSellerId}
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateBundle}
                >
                  Update
                </button>
                &nbsp;

                <button
                  className="btn text-danger mr-2"
                  onClick={this.removeBundle}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>BundleItems</Tab>
              <Tab>More</Tab>
            </TabList>

            <TabPanel>
              <Search searchClick={() => {}}>
                <button 
                onClick={() => this.openAddDialog("bundleItem")}
                className="btn text-success">Add</button>
              </Search>
              
              {this.state.openedModal === 'bundleItem' ? (
              <Modal 
                showModal={this.state.openedModal === 'bundleItem'} 
                closeModalClick={this.closeDialog}>
                <EditBundleItem />
              </Modal>
              ): null}

              <BundleItemList Bundle={currentBundle} editBundleItemClick={(i) => this.openEditDialog('bundleItem')} />
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
    bundles: state.bundles.bundles,
  };
};

export default connect(mapStateToProps, { updateBundle, deleteBundle })(BundleDetails);
