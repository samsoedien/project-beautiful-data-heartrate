import React, { Component } from "react";
import axios from "axios";
//import HeartData from "./HeartData";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "",
      experience: "",
      activity: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUserdata = {
      emotion: this.state.emotion,
      experience: this.state.experience,
      activity: this.state.activity
    };
    console.log(newUserdata);

    // axios post request
    axios
      .post("/api/users/1/stressdata", newUserdata)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location.reload();
  }

  render() {
    const options = [
      { label: "* Select Emotion", value: 0 },
      { label: "Loved", value: "Loved" },
      { label: "Fear", value: "Fear" },
      { label: "Joy", value: "Joy" },
      { label: "Anger", value: "Anger" },
      { label: "Suprised", value: "Suprised" },
      { label: "Embarassed", value: "Embarassed" },
      { label: "Disgust", value: "Disgust" },
      { label: "Sadness", value: "Sadness" }
    ];

    const selectOptions = options.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    return (
      <div className="form-component">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="text-center pt-3">Self Assessment Report</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className="text-left">Emotion</label>
                  <select
                    className="form-control form-control-lg"
                    placeholder="Emotion"
                    name="emotion"
                    value={this.state.emotion}
                    onChange={this.onChange}
                    options={options}
                  >
                    {selectOptions}
                  </select>
                  <small className="form-text text-muted text-left">
                    How were you feeling a this moment?
                  </small>
                </div>

                <div className="form-group">
                  <label forhtml="formControlRange">Experience</label>
                  <div>
                    <span className="float-left text-success">0</span>
                    <span className="float-right text-success">10</span>
                  </div>
                  <input
                    type="range"
                    name="experience"
                    value={this.state.experience}
                    onChange={this.onChange}
                    className="form-control-range custom-range"
                    min="0"
                    max="10"
                    id="formControlRange"
                  />
                  <small className="form-text text-muted text-left">
                    Set a scale related to the intensity of your emotion.
                  </small>
                </div>

                <div className="form-group">
                  <label className="text-left">Activity</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Describe what you are doing"
                    name="activity"
                    value={this.state.activity}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted text-left">
                    Annotate what your activity was to this moment.
                  </small>
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//input prop attribute: error={errors.mood}
