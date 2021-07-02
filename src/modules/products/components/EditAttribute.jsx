import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAttribute } from "../states/productsActions";

class EditAttribute extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);

    let attribute = this.props.attribute ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentAttribute: attribute,
      message: "",
    };
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentAttribute: {
          ...prevState.currentAttribute,
          name: name,
        },
      };
    });
  }

  onChangeValue(e) {
    const value = e.target.value;

    this.setState((prevState) => ({
      currentAttribute: {
        ...prevState.currentAttribute,
        value: value,
      },
    }));
  }

  updateContent() {
    this.props
      .updateAttribute(this.state.currentAttribute.id, this.state.currentAttribute)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Attribute was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentAttribute } = this.state;

    return (
        <div>
        {currentAttribute ? (
          <div className="edit-form">
            <h4>Attribute</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentAttribute.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="value">Value</label>
                <input
                  type="text"
                  className="form-control"
                  id="value"
                  value={currentAttribute.value}
                  onChange={this.onChangeValue}
                />
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
            <p>Attribute is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateAttribute })(EditAttribute);
