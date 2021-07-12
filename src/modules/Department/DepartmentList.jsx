import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveDepartments, findDepartmentsByTitle, deleteDepartment } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import DepartmentDetails from "./DepartmentDetails";
import { NavLink } from 'react-router-dom';

class DepartmentsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveDepartment = this.setActiveDepartment.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllDepartments = this.removeAllDepartments.bind(this);

    this.state = {
      currentDepartment: this.props.currentDepartment,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveDepartments();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      current: null,
      currentIndex: -1,
    });
  }

  setActiveDepartment(Department, index) {
    this.setState({
      current: Department,
      currentIndex: index,
    });
  }

  removeAllDepartments() {
    this.props
      .deleteDepartment()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findDepartmentsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { departments } = this.props;
    let count = departments.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/departments/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {departments && departments.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveDepartment(item, index)}
                  key={index}
                >
                  <h6>{item.name}</h6>
                  <span>More Description Here</span>
                </li>
              ))}
              { count === 0 &&
                <NoData />
              }
              </ul>
            </div>
            <div className="col-md-9 p-2">
              <DepartmentDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Status</td>
                  <td>Name</td>
                  <td>Description</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {departments && departments.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveDepartment(item, index)}
                  key={index}
                >
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeDepartment}
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
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    departments: state.departments.departments,
    currentDepartment: state.departments.currentDepartment,
  };
};

export default connect(mapStateToProps, { retrieveDepartments, findDepartmentsByTitle, deleteDepartment })(DepartmentsList);
