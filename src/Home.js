import React, { Component } from "react";
import ApplicationForm from "./ApplicationForm";
import Summary from "./Summary";
import NotFount from "./components/NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome Home</h1>
        <button class="AppButton">
          <Link to="/form">Application Form</Link>
        </button>
      </div>
    );
  }
}

export default Home;
