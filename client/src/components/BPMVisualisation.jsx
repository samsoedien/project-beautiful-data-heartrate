import React, { Component } from "react";
import vegaEmbed from "vega-embed";
import LINE_SPEC from "./line.vl.json";

import FakeDataCollector from "./FakeDataCollector";

class BPMVisualisation extends Component {
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  timer() {
    var vlSpec = LINE_SPEC;
    vegaEmbed("#vis", vlSpec);
    if (200 < 1) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div className="visualisation">
        <h1>BPM Visualisation</h1>
        <p>Visualisation of continuous stream of BPM's</p>
        <div id="vis" />
        <FakeDataCollector />
      </div>
    );
  }
}

export default BPMVisualisation;
