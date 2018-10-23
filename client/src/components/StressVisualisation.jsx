import React, { Component } from "react";
import vegaEmbed from "vega-embed";
import BAR_SPEC from "./bar.vl.json";

class StressVisualisation extends Component {
  componentDidMount() {
    const vlSpec2 = BAR_SPEC;
    vegaEmbed("#vis2", vlSpec2);
  }

  render() {
    return (
      <div className="visualisation">
        <h1>Stress Visualisation</h1>
        <p>Visualisation of average BPM's per emotion</p>
        <div id="vis2" />
      </div>
    );
  }
}

export default StressVisualisation;
