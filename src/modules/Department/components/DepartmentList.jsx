import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class DepartmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDepartment: null,
    };
  }

  render() {
    const { departments } = this.props;
    let count = departments? departments.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Status</td>
              <td>Name</td>
              <td>Description</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {departments && departments.map((item, index) => (
            <tr key={index}>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editDepartmentClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeDepartmentClick(item)}
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

DepartmentList.propTypes = {
  editDepartmentClick: PropTypes.func.isRequired,
  removeDepartmentClick: PropTypes.func.isRequired,
  departments: PropTypes.any.isRequired
};

export default connect(null, null)(DepartmentList);
