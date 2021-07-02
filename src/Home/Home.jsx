import React, { Component } from "react";
import SelloutCards from "./components/SelloutCards";
import Loader from "../shared/Loader/Index";
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
        <SelloutCards />
      </React.Fragment>
    );
  }
}

export default Home;
