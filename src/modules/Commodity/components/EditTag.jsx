import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTag } from "../states/actions";

class EditTag extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCommodityId = this.onChangeCommodityId.bind(this);

    let tag = this.props.tag ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentTag: tag,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTag: {
          ...prevState.currentTag,
          id: id,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTag: {
          ...prevState.currentTag,
          name: name,
        },
      };
    });
  }
  onChangeCommodityId(e) {
    const commodityId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTag: {
          ...prevState.currentTag,
          commodityId: commodityId,
        },
      };
    });
  }

  render() {
    const { currentTag } = this.state;

    return (
        <div>
        {currentTag ? (
          <div className="edit-form">
            <h4>Tag</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={currentTag.name}
                    onChange={this.onChangeName}
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
                    value={currentTag.commodityId}
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
            <p>Tag is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateTag })(EditTag);
