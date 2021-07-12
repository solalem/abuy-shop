import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBussinessHour } from "../states/actions";

class EditBussinessHour extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeStoreId = this.onChangeStoreId.bind(this);
    this.onChangeDayOfWeek = this.onChangeDayOfWeek.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);
    this.onChangeEndTime = this.onChangeEndTime.bind(this);

    let bussinessHour = this.props.bussinessHour ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentBussinessHour: bussinessHour,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBussinessHour: {
          ...prevState.currentBussinessHour,
          id: id,
        },
      };
    });
  }
  onChangeStoreId(e) {
    const storeId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBussinessHour: {
          ...prevState.currentBussinessHour,
          storeId: storeId,
        },
      };
    });
  }
  onChangeDayOfWeek(e) {
    const dayOfWeek = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBussinessHour: {
          ...prevState.currentBussinessHour,
          dayOfWeek: dayOfWeek,
        },
      };
    });
  }
  onChangeStartTime(e) {
    const startTime = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBussinessHour: {
          ...prevState.currentBussinessHour,
          startTime: startTime,
        },
      };
    });
  }
  onChangeEndTime(e) {
    const endTime = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBussinessHour: {
          ...prevState.currentBussinessHour,
          endTime: endTime,
        },
      };
    });
  }

  render() {
    const { currentBussinessHour } = this.state;

    return (
        <div>
        {currentBussinessHour ? (
          <div className="edit-form">
            <h4>BussinessHour</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">StoreId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="storeId"
                    value={currentBussinessHour.storeId}
                    onChange={this.onChangeStoreId}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">DayOfWeek</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="dayOfWeek"
                    value={currentBussinessHour.dayOfWeek}
                    onChange={this.onChangeDayOfWeek}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">StartTime</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="startTime"
                    value={currentBussinessHour.startTime}
                    onChange={this.onChangeStartTime}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">EndTime</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="endTime"
                    value={currentBussinessHour.endTime}
                    onChange={this.onChangeEndTime}
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
            <p>BussinessHour is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateBussinessHour })(EditBussinessHour);
