import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCommodityAttribute } from "../states/actions";

class EditCommodityAttribute extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeAttribute = this.onChangeAttribute.bind(this);
    this.onChangeDefaultValue = this.onChangeDefaultValue.bind(this);
    this.onChangeCommodityId = this.onChangeCommodityId.bind(this);

    let commodityAttribute = this.props.commodityAttribute ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentCommodityAttribute: commodityAttribute,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodityAttribute: {
          ...prevState.currentCommodityAttribute,
          id: id,
        },
      };
    });
  }
  onChangeAttribute(e) {
    const attribute = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodityAttribute: {
          ...prevState.currentCommodityAttribute,
          attribute: attribute,
        },
      };
    });
  }
  onChangeDefaultValue(e) {
    const defaultValue = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodityAttribute: {
          ...prevState.currentCommodityAttribute,
          defaultValue: defaultValue,
        },
      };
    });
  }
  onChangeCommodityId(e) {
    const commodityId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCommodityAttribute: {
          ...prevState.currentCommodityAttribute,
          commodityId: commodityId,
        },
      };
    });
  }

  render() {
    const { currentCommodityAttribute } = this.state;

    return (
        <div>
        {currentCommodityAttribute ? (
          <div className="edit-form">
            <h4>CommodityAttribute</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Attribute</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="attribute"
                    value={currentCommodityAttribute.attribute}
                    onChange={this.onChangeAttribute}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">DefaultValue</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="defaultValue"
                    value={currentCommodityAttribute.defaultValue}
                    onChange={this.onChangeDefaultValue}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">CommodityId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="commodityId"
                    value={currentCommodityAttribute.commodityId}
                    onChange={this.onChangeCommodityId}
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
            <p>CommodityAttribute is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateCommodityAttribute })(EditCommodityAttribute);
