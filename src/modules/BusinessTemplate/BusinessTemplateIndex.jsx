import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveBusinessTemplates, findBusinessTemplatesByTitle, deleteBusinessTemplate } from "./states/actions";
import Search from "../../shared/Search";
import NoData from "../../shared/NoData";
import BusinessTemplateDetails from "./BusinessTemplateDetails";
import BusinessTemplateList from "./components/BusinessTemplateList";
import { NavLink } from 'react-router-dom';

class BusinessTemplateIndex extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveBusinessTemplate = this.setActiveBusinessTemplate.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeBusinessTemplate = this.removeBusinessTemplate.bind(this);

    this.state = {
      currentBusinessTemplate: this.props.currentBusinessTemplate,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveBusinessTemplates();
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

  setActiveBusinessTemplate(BusinessTemplate, index) {
    this.setState({
      current: BusinessTemplate,
      currentIndex: index,
    });
  }

  removeBusinessTemplate(item) {
    this.props
      .deleteBusinessTemplate(item)
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
        <Search searchString={searchTitle} searchClick={ this.onChangeSearchString}>
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
            <BusinessTemplateList businessTemplates={this.businessTemplates} removeBusinessTemplateClick={() => {}} editBusinessTemplateClick={(i) => {}} />

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

export default connect(mapStateToProps, { retrieveBusinessTemplates, findBusinessTemplatesByTitle, deleteBusinessTemplate })(BusinessTemplateIndex);
