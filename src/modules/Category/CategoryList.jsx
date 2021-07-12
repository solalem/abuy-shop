import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveCategories, findCategoriesByTitle, deleteCategory } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import CategoryDetails from "./CategoryDetails";
import { NavLink } from 'react-router-dom';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllCategories = this.removeAllCategories.bind(this);

    this.state = {
      currentCategory: this.props.currentCategory,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveCategories();
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

  setActiveCategory(Category, index) {
    this.setState({
      current: Category,
      currentIndex: index,
    });
  }

  removeAllCategories() {
    this.props
      .deleteCategory()
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

    this.props.findCategoriesByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { categories } = this.props;
    let count = categories.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/categories/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {categories && categories.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveCategory(item, index)}
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
              <CategoryDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
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
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveCategory(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.isOpen}</td>
                  <td>{item.departmentId}</td>
                  <td>{item.parentId}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeCategory}
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
    categories: state.categories.categories,
    currentCategory: state.categories.currentCategory,
  };
};

export default connect(mapStateToProps, { retrieveCategories, findCategoriesByTitle, deleteCategory })(CategoriesList);
