import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class TagList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTag: null,
    };
  }

  render() {
    const { tags } = this.props;
    let count = tags? tags.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>CommodityId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {tags && tags.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.commodityId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editTagClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeTagClick(item)}
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

TagList.propTypes = {
  editTagClick: PropTypes.func.isRequired,
  removeTagClick: PropTypes.func.isRequired,
  tags: PropTypes.any.isRequired
};

export default connect(null, null)(TagList);
