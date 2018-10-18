import React, { Component } from "react";
import ApplicationForm from "./ApplicationForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Application Form</h1>
        <ApplicationForm />
      </div>
    );
  }
}

export default App;
