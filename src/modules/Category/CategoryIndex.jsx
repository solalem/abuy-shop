import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveCategories, findCategoriesByTitle, deleteCategory } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import CategoryDetails from "./CategoryDetails";
import CategoryList from "./components/CategoryList";
import { NavLink } from 'react-router-dom';

class CategoryIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeCategory = this.removeCategory.bind(this);

    this.state = {
      currentCategory: this.props.currentCategory,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveCategories();
  }

  onChangeSearchString(e) {
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

  removeCategory(item) {
    this.props
      .deleteCategory(item)
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
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
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
            <CategoryList categories={this.props.categories} removeCategoryClick={() => {}} editCategoryClick={(i) => {}} />

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

export default connect(mapStateToProps, { retrieveCategories, findCategoriesByTitle, deleteCategory })(CategoryIndex);
