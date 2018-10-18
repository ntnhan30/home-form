import React, { Component } from "react";
import ApplicationForm from "./ApplicationForm";
import Summary from "./Summary";
import NotFount from "./components/NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/form">Application Form</Link>

          <Switch>
            <Route exact path="/form" component={ApplicationForm} />
            <Route component={NotFount} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
