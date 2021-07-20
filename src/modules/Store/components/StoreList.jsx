import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class StoreList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStore: null,
    };
  }

  render() {
    const { stores } = this.props;
    let count = stores? stores.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Gebeya</td>
              <td>Address</td>
              <td>Latitude</td>
              <td>Longitude</td>
              <td>OpenedOn</td>
              <td>OwnerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {stores && stores.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editStoreClick(item)}
              >
              <td>{item.name}</td>
              <td>{item.gebeya}</td>
              <td>{item.address}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.openedOn}</td>
              <td>{item.ownerId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeStoreClick(item)}
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

StoreList.propTypes = {
  editStoreClick: PropTypes.func.isRequired,
  removeStoreClick: PropTypes.func.isRequired,
  stores: PropTypes.any.isRequired
};

export default connect(null, null)(StoreList);
