import React, { Component } from "react";
import { connect } from "react-redux";
import { createBundle } from "./states/actions";
import ApiService from "./services/api-service";
import {retrieveSellers} from "../Seller/states/actions";
import AsyncSelect from 'react-select/async'

class CreateBundle extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createBundle = this.createBundle.bind(this);

    this.state = {
      id: '',
      name: '',
      description: '',
      sellerId: '',
      items: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createBundle() {
    this.props
    .createBundle({
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      sellerId: this.state.sellerId,
      items: this.state.items,
    })
    .then((reponse) => {
      console.log(reponse);
      
      this.setState({ message: "The Bundle was created successfully!" });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  searchSellers = (inputValue, callback) => {
    this.props.retrieveSellers();
    return callback(this.props.sellers);
  }

  render() {

    return (
        <div className="m-2">
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
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
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
                <label className="col-sm-2 col-form-label" htmlFor="name">SellerId</label>
                <div className="col-sm-10">

                  <AsyncSelect
                    cacheOptions
                    defaultOptions
                    loadOptions={this.searchSellers}
                    value={this.state.sellerId}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e.id}
                    placeholder="Select sellerId"
                    onChange={(e) => this.handleChange({ sellerId: e.id })}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sellers: state.sellers.sellers
  };
};

export default connect(mapStateToProps, { createBundle, retrieveSellers })(CreateBundle);
