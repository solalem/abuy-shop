import React, { Component } from "react";
import Loader from "../shared/Loader";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <h3>Welcome!</h3>
      </React.Fragment>
    );
  }
}

export default Home;
