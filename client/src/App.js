import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import StressVisualisation from "./components/StressVisualisation";
import BPMVisualisation from "./components/BPMVisualisation";
import FakeDataCollector from "./components/FakeDataCollector";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/user-form" component={Form} />
          <Route exact path="/visualisation-bpm" component={BPMVisualisation} />
          <Route
            exact
            path="/visualisation-stress"
            component={StressVisualisation}
          />
          <Route exact path="/data-generator" component={FakeDataCollector} />
        </div>
      </Router>
    );
  }
}

export default App;
