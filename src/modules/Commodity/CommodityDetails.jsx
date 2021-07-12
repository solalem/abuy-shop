import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCommodity, deleteCommodity } from "./states/actions";
import CommoditiesService from "./services/api-service";
import TagList from "./components/TagList";
import EditTag from "./components/EditTag";
import CommodityAttributeList from "./components/CommodityAttributeList";
import EditCommodityAttribute from "./components/EditCommodityAttribute";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from "../../shared/Search";
import Modal from "../../shared/Modal";

class CommodityDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeIsActive = this.onChangeIsActive.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeAttributes = this.onChangeAttributes.bind(this);
    this.getCommodity = this.getCommodity.bind(this);
    this.updateCommodity = this.updateCommodity.bind(this);
    this.removeCommodity = this.removeCommodity.bind(this);
    
    this.state = {
      currentCommodity: this.props.currentCommodity,
      openedModal: null,
      attributesSearchString: "",
      message: "",
    };
  }

  componentDidMount() {
    // if(!this.state.currentCommodity && this.props.match)
    //   this.getCommodity(this.props.match.params.id);
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          id: id,
        },
      };
    });
  }
  onChangeCategoryId(e) {
    const categoryId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          categoryId: categoryId,
        },
      };
    });
  }
  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          title: title,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          description: description,
        },
      };
    });
  }
  onChangeCode(e) {
    const code = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          code: code,
        },
      };
    });
  }
  onChangeIsActive(e) {
    const isActive = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          isActive: isActive,
        },
      };
    });
  }
  onChangeModel(e) {
    const model = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          model: model,
        },
      };
    });
  }
  onChangeTags(e) {
    const tags = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          tags: tags,
        },
      };
    });
  }
  onChangeAttributes(e) {
    const attributes = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodity: {
          ...prevState.currentCommodity,
          attributes: attributes,
        },
      };
    });
  }

  getCommodity(id) {
    CommoditiesService.get(id)
      .then((response) => {
        this.setState({
          currentCommodity: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateCommodity() {
    this.props
      .updateCommodity(this.state.currentCommodity.id, this.state.currentCommodity)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Commodity was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  removeCommodity() {
    this.props
      .deleteCommodity(this.state.currentCommodity.id)
      .then(() => {
        this.props.history.push("/commodities");
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
    const { currentCommodity } = this.state;

    return (
      <div>
      {currentCommodity ? (
        <div>
          <div className="edit-form">
            <h5>Commodity Details</h5>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CategoryId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="categoryId"
                    value={currentCommodity.categoryId}
                    onChange={this.onChangeCategoryId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Title</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="title"
                    value={currentCommodity.title}
                    onChange={this.onChangeTitle}
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
                    value={currentCommodity.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Code</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="code"
                    value={currentCommodity.code}
                    onChange={this.onChangeCode}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsActive</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isActive"
                    value={currentCommodity.isActive}
                    onChange={this.onChangeIsActive}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Model</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="model"
                    value={currentCommodity.model}
                    onChange={this.onChangeModel}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn text-success"
                  onClick={this.updateCommodity}
                >
                  Update
                </button>
                &nbsp;

                <button
                className="btn text-danger mr-2"
                onClick={this.removeCommodity}
                >
                  Delete
                </button>
              </div>
            </form>

            <p>{this.state.message}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Tags</Tab>
              <Tab>CommodityAttributes</Tab>
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
                <EditTag />
              </Modal>
              ): null}

              <TagList Commodity={currentCommodity} editTagClick={(attribute) => this.openEditDialog('attribute')} />
            </TabPanel>
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
                <EditCommodityAttribute />
              </Modal>
              ): null}

              <CommodityAttributeList Commodity={currentCommodity} editCommodityAttributeClick={(attribute) => this.openEditDialog('attribute')} />
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
    commodities: state.commodities.commodities,
  };
};

export default connect(mapStateToProps, { updateCommodity, deleteCommodity })(CommodityDetails);
