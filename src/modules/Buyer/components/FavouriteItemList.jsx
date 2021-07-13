import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class FavouriteItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFavouriteItem: null,
    };
  }

  render() {
    const { favouriteItems } = this.props;
    let count = favouriteItems? favouriteItems.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>AddedOn</td>
              <td>ListingId</td>
              <td>BuyerId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {favouriteItems && favouriteItems.map((item, index) => (
            <tr key={index}>
              <td>{item.addedOn}</td>
              <td>{item.listingId}</td>
              <td>{item.buyerId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editFavouriteItemClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeFavouriteItemClick(item)}
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

FavouriteItemList.propTypes = {
  editFavouriteItemClick: PropTypes.func.isRequired,
  removeFavouriteItemClick: PropTypes.func.isRequired,
  favouriteItems: PropTypes.any.isRequired
};

export default connect(null, null)(FavouriteItemList);
