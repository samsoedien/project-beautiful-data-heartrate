import React, { Component } from "react";
import axios from "axios";

class FakeDataCollector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 200,
      bpm: 0
    };
  }

  timer() {
    let bpmValue = Math.floor(Math.random() * 100 + 60);
    this.setState({
      currentCount: this.state.currentCount - 1,
      bpm: bpmValue
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }

    const newHeartdata = {
      bpm: this.state.bpm
    };
    axios
      .post("/api/heartdata", newHeartdata)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="p-3">
        <div>Measured BPM: {this.state.bpm}</div>
      </div>
    );
  }
}

export default FakeDataCollector;
