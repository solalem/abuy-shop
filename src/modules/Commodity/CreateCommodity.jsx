import React, { Component } from "react";
import { connect } from "react-redux";
import { createCommodity } from "./states/actions";
import ApiService from "./services/api-service";

class CreateCommodity extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createCommodity = this.createCommodity.bind(this);

    this.state = {
      id: '',
      categoryId: '',
      title: '',
      description: '',
      code: '',
      isActive: '',
      model: '',
      tags: '',
      attributes: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createCommodity() {
    ApiService.createCommodity(
      {
        id: this.state.id,
        categoryId: this.state.categoryId,
        title: this.state.title,
        description: this.state.description,
        code: this.state.code,
        isActive: this.state.isActive,
        model: this.state.model,
        tags: this.state.tags,
        attributes: this.state.attributes,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Commodity was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.categoryId}
                    onChange={(e) => this.handleChange({ categoryId: e.target.value })}
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
                    value={this.state.title}
                    onChange={(e) => this.handleChange({ title: e.target.value })}
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
                    value={this.state.description}
                    onChange={(e) => this.handleChange({ description: e.target.value })}
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
                    value={this.state.code}
                    onChange={(e) => this.handleChange({ code: e.target.value })}
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
                    value={this.state.isActive}
                    onChange={(e) => this.handleChange({ isActive: e.target.value })}
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
                    value={this.state.model}
                    onChange={(e) => this.handleChange({ model: e.target.value })}
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
      </div>
    );
  }
}

export default connect(null, { createCommodity })(CreateCommodity);
