import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class BusinessTemplateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBusinessTemplate: null,
    };
  }

  render() {
    const { businessTemplates } = this.props;
    let count = businessTemplates? businessTemplates.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>DepartmentId</td>
              <td>CommodyIds</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {businessTemplates && businessTemplates.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editBusinessTemplateClick(item)}
              >
              <td>{item.name}</td>
              <td>{item.departmentId}</td>
              <td>{item.commodyIds}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeBusinessTemplateClick(item)}
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

BusinessTemplateList.propTypes = {
  editBusinessTemplateClick: PropTypes.func.isRequired,
  removeBusinessTemplateClick: PropTypes.func.isRequired,
  businessTemplates: PropTypes.any.isRequired
};

export default connect(null, null)(BusinessTemplateList);
