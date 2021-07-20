import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: null,
    };
  }

  render() {
    const { images } = this.props;
    let count = images? images.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Caption</td>
              <td>Uri</td>
              <td>IsLocal</td>
              <td>ListingId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {images && images.map((item, index) => (
            <tr 
              key={index}
              onClick={() => this.props.editImageClick(item)}
              >
              <td>{item.caption}</td>
              <td>{item.uri}</td>
              <td>{item.isLocal}</td>
              <td>{item.listingId}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeImageClick(item)}
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

ImageList.propTypes = {
  editImageClick: PropTypes.func.isRequired,
  removeImageClick: PropTypes.func.isRequired,
  images: PropTypes.any.isRequired
};

export default connect(null, null)(ImageList);
