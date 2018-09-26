import React, { Component } from 'react';

import FakeDataCollector from './FakeDataCollector';

class Visualisation extends Component {
  render() {
    return (
      <div className="visualisation">
        <h1 >Visualisation</h1>
        <h3 className="text-primary">Participant A27</h3>
        <FakeDataCollector />
      </div>
    );
  }
}

export default Visualisation;
