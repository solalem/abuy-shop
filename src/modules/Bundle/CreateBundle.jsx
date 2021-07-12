import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBundle } from "./states/actions";
import ApiService from "./services/api-service";

class CreateBundle extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSellerId = this.onChangeSellerId.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
    this.createBundle = this.createBundle.bind(this);

    this.state = {
      newBundle: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newBundle: {
          ...prevState.newBundle,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newBundle: {
          ...prevState.newBundle,
          name: name,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        newBundle: {
          ...prevState.newBundle,
          description: description,
        },
      };
    });
  }
  onChangeSellerId(e) {
    const sellerId = e.target.value;

    this.setState(function (prevState) {
      return {
        newBundle: {
          ...prevState.newBundle,
          sellerId: sellerId,
        },
      };
    });
  }
  onChangeItems(e) {
    const items = e.target.value;

    this.setState(function (prevState) {
      return {
        newBundle: {
          ...prevState.newBundle,
          items: items,
        },
      };
    });
  }

  createBundle() {
    ApiService.createBundle(this.state.newBundle)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Bundle was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newBundle } = this.state;

    return (
        <div className="m-2">
        {newBundle ? (
          <div className="edit-form">
            <h4>New Bundle</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={newBundle.name}
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
                    value={newBundle.description}
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
                    value={newBundle.sellerId}
                    onChange={this.onChangeSellerId}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createBundle}
                >
                Create
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Bundle not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateBundle })(CreateBundle);
