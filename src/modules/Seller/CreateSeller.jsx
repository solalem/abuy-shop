import React, { Component } from "react";
import { connect } from "react-redux";
import { createSeller } from "./states/actions";
import ApiService from "./services/api-service";

class CreateSeller extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createSeller = this.createSeller.bind(this);

    this.state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      message: "",
    };
  }

  componentDidMount() {
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  createSeller() {
    ApiService.create(
      {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      }).then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Seller was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (
        <div className="m-2">
          <div className="edit-form">
            <h4>New Seller</h4>
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
                <label className="col-sm-2 col-form-label" htmlFor="name">Email</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange({ email: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Phone</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="phone"
                    value={this.state.phone}
                    onChange={(e) => this.handleChange({ phone: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.createSeller}
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

export default connect(null, { createSeller })(CreateSeller);
