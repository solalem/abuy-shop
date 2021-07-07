import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeAttribute } from "../states/productsActions";
import NoData from "../../../shared/NoData";
import Modal from "../../../shared/Modal";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

class AttributeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAttribute: null,
    };
  }

  render() {
    const { attributes } = this.props.product;
    let attributesCount = attributes? attributes.length : 0;

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Value</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {attributes && attributes.map((attribute, index) => (
            <tr key={index}>
              <td>{attribute.name}</td>
              <td>{attribute.Value}</td>
              <td>
                <button
                  className="btn btn-sm text-primary"
                  onClick={() => this.props.editAttributeClick(attribute)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeAttributeProp(attribute)}
                >
                  <i className="fa fa-trash" />
                  ✖
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        { attributesCount === 0 &&
          <NoData />
        }
      </div>
    );
  }
}

Modal.propTypes = {
  editAttributeClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeAttributeProp: (attribute) => removeAttribute(attribute),
  }, dispatch);
};
// function mapDispatchToProps(dispatch) {
//   return(bindActionCreators({
//       deleteFromArray: (array) => {getTheArray(array)}
//   }, dispatch))
// }

export default connect(null, mapDispatchToProps)(AttributeList);
