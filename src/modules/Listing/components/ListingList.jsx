import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class ListingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentListing: null,
    };
  }

  render() {
    const { listings } = this.props;
    let count = listings? listings.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td>Price</td>
              <td>OldPrice</td>
              <td>ItemsQuantity</td>
              <td>Packaging</td>
              <td>Delivery</td>
              <td>Terms</td>
              <td>ReturnPolicy</td>
              <td>ItemId</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {listings && listings.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.oldPrice}</td>
              <td>{item.itemsQuantity}</td>
              <td>{item.packaging}</td>
              <td>{item.delivery}</td>
              <td>{item.terms}</td>
              <td>{item.returnPolicy}</td>
              <td>{item.itemId}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editListingClick(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeListingClick(item)}
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

ListingList.propTypes = {
  editListingClick: PropTypes.func.isRequired,
  removeListingClick: PropTypes.func.isRequired,
  listings: PropTypes.any.isRequired
};

export default connect(null, null)(ListingList);
