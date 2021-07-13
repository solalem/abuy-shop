import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: null,
    };
  }

  render() {
    const { categories } = this.props;
    let count = categories? categories.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>IsOpen</td>
              <td>DepartmentId</td>
              <td>ParentId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {categories && categories.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.isOpen}</td>
              <td>{item.departmentId}</td>
              <td>{item.parentId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editCategoryClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeCategoryClick(item)}
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

CategoryList.propTypes = {
  editCategoryClick: PropTypes.func.isRequired,
  removeCategoryClick: PropTypes.func.isRequired,
  categories: PropTypes.any.isRequired
};

export default connect(null, null)(CategoryList);
