import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItemProperty } from "../states/actions";

class EditItemProperty extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeAttribute = this.onChangeAttribute.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeItemId = this.onChangeItemId.bind(this);

    let itemProperty = this.props.itemProperty ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentItemProperty: itemProperty,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItemProperty: {
          ...prevState.currentItemProperty,
          id: id,
        },
      };
    });
  }
  onChangeAttribute(e) {
    const attribute = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItemProperty: {
          ...prevState.currentItemProperty,
          attribute: attribute,
        },
      };
    });
  }
  onChangeValue(e) {
    const value = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItemProperty: {
          ...prevState.currentItemProperty,
          value: value,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItemProperty: {
          ...prevState.currentItemProperty,
          itemId: itemId,
        },
      };
    });
  }

  render() {
    const { currentItemProperty } = this.state;

    return (
        <div>
        {currentItemProperty ? (
          <div className="edit-form">
            <h4>ItemProperty</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Attribute</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="attribute"
                    value={currentItemProperty.attribute}
                    onChange={this.onChangeAttribute}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Value</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="value"
                    value={currentItemProperty.value}
                    onChange={this.onChangeValue}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemId"
                    value={currentItemProperty.itemId}
                    onChange={this.onChangeItemId}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={this.updateContent}
              >
                Update
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>ItemProperty is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateItemProperty })(EditItemProperty);
