import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class BussinessHourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBussinessHour: null,
    };
  }

  render() {
    const { bussinessHours } = this.props;
    let count = bussinessHours? bussinessHours.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>StoreId</td>
              <td>DayOfWeek</td>
              <td>StartTime</td>
              <td>EndTime</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {bussinessHours && bussinessHours.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editBussinessHourClick(item)}
              >
              <td>{item.storeId}</td>
              <td>{item.dayOfWeek}</td>
              <td>{item.startTime}</td>
              <td>{item.endTime}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeBussinessHourClick(item)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        { count === 0 &&
          <NoData />
        }
      </div>
    );
  }
}

BussinessHourList.propTypes = {
  editBussinessHourClick: PropTypes.func.isRequired,
  removeBussinessHourClick: PropTypes.func.isRequired,
  bussinessHours: PropTypes.any.isRequired
};

export default connect(null, null)(BussinessHourList);
