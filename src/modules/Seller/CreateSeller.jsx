import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSeller } from "./states/actions";
import ApiService from "./services/api-service";

class CreateSeller extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeCommodyIds = this.onChangeCommodyIds.bind(this);
    this.createSeller = this.createSeller.bind(this);

    this.state = {
      newSeller: {},
      message: "",
    };
  }

  componentDidMount() {
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        newSeller: {
          ...prevState.newSeller,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        newSeller: {
          ...prevState.newSeller,
          name: name,
        },
      };
    });
  }
  onChangeDepartmentId(e) {
    const departmentId = e.target.value;

    this.setState(function (prevState) {
      return {
        newSeller: {
          ...prevState.newSeller,
          departmentId: departmentId,
        },
      };
    });
  }
  onChangeCommodyIds(e) {
    const commodyIds = e.target.value;

    this.setState(function (prevState) {
      return {
        newSeller: {
          ...prevState.newSeller,
          commodyIds: commodyIds,
        },
      };
    });
  }

  createSeller() {
    ApiService.createSeller(this.state.newSeller)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Seller was created successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { newSeller } = this.state;

    return (
        <div className="m-2">
        {newSeller ? (
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
                    value={newSeller.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">DepartmentId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="departmentId"
                    value={newSeller.departmentId}
                    onChange={this.onChangeDepartmentId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CommodyIds</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="commodyIds"
                    value={newSeller.commodyIds}
                    onChange={this.onChangeCommodyIds}
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
        ) : (
          <div>
            <br />
            <p>Seller not specified</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateSeller })(CreateSeller);
