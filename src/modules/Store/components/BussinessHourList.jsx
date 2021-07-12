import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeBussinessHour } from "../states/actions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class BussinessHourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBussinessHour: null,
    };
  }

  render() {
    const { bussinessHours } = this.props.BussinessHour;
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
            <tr key={index}>
                  <td>{item.storeId}</td>
                  <td>{item.dayOfWeek}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editBussinessHourClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeBussinessHourProp(item)}
                >
                  <i className="fa fa-trash" />
                  ?
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

Modal.propTypes = {
  editBussinessHourClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeBussinessHourProp: (bussinessHour) => removeBussinessHour(bussinessHour),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(BussinessHourList);
