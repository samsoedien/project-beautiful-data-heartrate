import React, { Component } from "react";
import vegalite from "vega-lite";
import vegaEmbed from "vega-embed";

import FakeDataCollector from "./FakeDataCollector";

class Visualisation extends Component {
  componentDidMount() {
    var vlSpec = "bar.vl.json";
    vegaEmbed("#vis", vlSpec);
  }

  render() {
    return (
      <div className="visualisation">
        <h1>Visualisation</h1>
        <div id="vis" />
      </div>
    );
  }
}

export default Visualisation;
