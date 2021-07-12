import React from "react";
import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";

const Search = (props) => {

  return (
    <div className="row gx-0">
      <div className="col-md-4">
        {props.children}
      </div>
      <div className="col-md-4">
        <div className="btn-group">
          <div className="btn"><FaIcons.FaChevronLeft size={14}/></div>
          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn"><FaIcons.FaChevronRight size={14}/></div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="input-group">
            <div className="input-group-prepend">
              <FaIcons.FaSearch />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              // onChange={this.onChangeSearchTitle}
            />

          </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchString: PropTypes.string.isRequired,
};

export default Search;
