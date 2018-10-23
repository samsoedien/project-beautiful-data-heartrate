import React, { Component } from "react";
import vegalite from "vega-lite";
import vegaEmbed from "vega-embed";

import LINE_SPEC from "./line.vl.json";

import FakeDataCollector from "./FakeDataCollector";

class Visualisation extends Component {
  componentDidMount() {
    var vlSpec = LINE_SPEC;
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
