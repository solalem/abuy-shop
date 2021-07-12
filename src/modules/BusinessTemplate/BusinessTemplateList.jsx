import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveBusinessTemplates, findBusinessTemplatesByTitle, deleteBusinessTemplate } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import BusinessTemplateDetails from "./BusinessTemplateDetails";
import { NavLink } from 'react-router-dom';

class BusinessTemplatesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveBusinessTemplate = this.setActiveBusinessTemplate.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllBusinessTemplates = this.removeAllBusinessTemplates.bind(this);

    this.state = {
      currentBusinessTemplate: this.props.currentBusinessTemplate,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveBusinessTemplates();
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

  setActiveBusinessTemplate(BusinessTemplate, index) {
    this.setState({
      current: BusinessTemplate,
      currentIndex: index,
    });
  }

  removeAllBusinessTemplates() {
    this.props
      .deleteBusinessTemplate()
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

    this.props.findBusinessTemplatesByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, current, currentIndex } = this.state;
    const { businessTemplates } = this.props;
    let count = businessTemplates.length;

    return (
      <>
        <Search searchString={searchTitle}>
          <NavLink to={'/business-templates/new'} exact className="btn text-success">New</NavLink>
        </Search>

        { current ? (
          <div className="row gx-0">
            <div className="col-md-3">
              <ul className="list-group rounded-0">

              {businessTemplates && businessTemplates.map((item, index) => (
                <li
                  className={(index === currentIndex ? "active" : "") + " list-group-item" }
                  onClick={() => this.setActiveBusinessTemplate(item, index)}
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
              <BusinessTemplateDetails current={current} 
              key={current.id}/>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-sm table-striped table-hover">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>DepartmentId</td>
                  <td>CommodyIds</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {businessTemplates && businessTemplates.map((item, index) => (
                <tr
                  className={(index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveBusinessTemplate(item, index)}
                  key={index}
                >
                  <td>{item.name}</td>
                  <td>{item.departmentId}</td>
                  <td>{item.commodyIds}</td>
                  <td>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={this.removeBusinessTemplate}
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
    businessTemplates: state.businessTemplates.businessTemplates,
    currentBusinessTemplate: state.businessTemplates.currentBusinessTemplate,
  };
};

export default connect(mapStateToProps, { retrieveBusinessTemplates, findBusinessTemplatesByTitle, deleteBusinessTemplate })(BusinessTemplatesList);
