import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class BundleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBundle: null,
    };
  }

  render() {
    const { bundles } = this.props;
    let count = bundles? bundles.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>SellerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {bundles && bundles.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.sellerId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editBundleClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeBundleClick(item)}
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

BundleList.propTypes = {
  editBundleClick: PropTypes.func.isRequired,
  removeBundleClick: PropTypes.func.isRequired,
  bundles: PropTypes.any.isRequired
};

export default connect(null, null)(BundleList);
