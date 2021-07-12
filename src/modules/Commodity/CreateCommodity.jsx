import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCommodity } from "./states/actions";
import ApiService from "./services/api-service";

class CreateCommodity extends Component {
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
    this.createCommodity = this.createCommodity.bind(this);

    this.state = {
      newCommodity: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          id: id,
        },
      };
    });
  }
  onChangeCategoryId(e) {
    const categoryId = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          categoryId: categoryId,
        },
      };
    });
  }
  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          title: title,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          description: description,
        },
      };
    });
  }
  onChangeCode(e) {
    const code = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          code: code,
        },
      };
    });
  }
  onChangeIsActive(e) {
    const isActive = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          isActive: isActive,
        },
      };
    });
  }
  onChangeModel(e) {
    const model = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          model: model,
        },
      };
    });
  }
  onChangeTags(e) {
    const tags = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          tags: tags,
        },
      };
    });
  }
  onChangeAttributes(e) {
    const attributes = e.target.value;

    this.setState(function (prevState) {
      return {
        newCommodity: {
          ...prevState.newCommodity,
          attributes: attributes,
        },
      };
    });
  }

  createCommodity() {
    ApiService.createCommodity(this.state.newCommodity)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Commodity was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newCommodity } = this.state;

    return (
        <div className="m-2">
        {newCommodity ? (
          <div className="edit-form">
            <h4>New Commodity</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CategoryId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="categoryId"
                    value={newCommodity.categoryId}
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
                    value={newCommodity.title}
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
                    value={newCommodity.description}
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
                    value={newCommodity.code}
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
                    value={newCommodity.isActive}
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
                    value={newCommodity.model}
                    onChange={this.onChangeModel}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createCommodity}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Commodity not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateCommodity })(CreateCommodity);
