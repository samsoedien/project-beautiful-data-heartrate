import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Visualisation from "./components/Visualisation";
import FakeDataCollector from "./components/FakeDataCollector";
// import LineChart from './LineChart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/user-form" component={Form} />
          <Route exact path="/visualisation" component={Visualisation} />
          <Route exact path="/data-generator" component={FakeDataCollector} />
        </div>
      </Router>
    );
  }
}

export default App;
