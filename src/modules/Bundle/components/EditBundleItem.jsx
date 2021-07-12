import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBundleItem } from "../states/actions";

class EditBundleItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeBundleId = this.onChangeBundleId.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);

    let bundleItem = this.props.bundleItem ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentBundleItem: bundleItem,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundleItem: {
          ...prevState.currentBundleItem,
          id: id,
        },
      };
    });
  }
  onChangeItemId(e) {
    const itemId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundleItem: {
          ...prevState.currentBundleItem,
          itemId: itemId,
        },
      };
    });
  }
  onChangeBundleId(e) {
    const bundleId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundleItem: {
          ...prevState.currentBundleItem,
          bundleId: bundleId,
        },
      };
    });
  }
  onChangeAmount(e) {
    const amount = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBundleItem: {
          ...prevState.currentBundleItem,
          amount: amount,
        },
      };
    });
  }

  render() {
    const { currentBundleItem } = this.state;

    return (
        <div>
        {currentBundleItem ? (
          <div className="edit-form">
            <h4>BundleItem</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ItemId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="itemId"
                    value={currentBundleItem.itemId}
                    onChange={this.onChangeItemId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">BundleId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="bundleId"
                    value={currentBundleItem.bundleId}
                    onChange={this.onChangeBundleId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Amount</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={currentBundleItem.amount}
                    onChange={this.onChangeAmount}
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
            <p>BundleItem is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateBundleItem })(EditBundleItem);
