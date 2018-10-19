import React, { Component } from "react";
import ApplicationForm from "./ApplicationForm";
import Home from "./Home";
import NotFount from "./components/NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./queries.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home</Link>
          </header>

          <Switch>
            <Route exact path="/form" component={ApplicationForm} />
            <Route exact path="/" component={Home} />
            <Route component={NotFount} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
