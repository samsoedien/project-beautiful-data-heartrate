import React, { Component } from 'react';
import axios from 'axios';

import HeartData from './HeartData';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: '',
      activity: '',
      experience: '',
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
      mood: this.state.mood,
      activity: this.state.activity,
      experience: this.state.experience,
    };
    console.log(newUserdata);

    // axios post request
    axios
      .post('/api/userdata', newUserdata)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    const options = [
      { label: '* Select Emotion', value: 0 },
      { label: 'Joy', value: 'Joy' },
      { label: 'Annoyed', value: 'Annoyed' },
      { label: 'Fear', value: 'Fear' },
      { label: 'Suprised', value: 'Suprised' },
      { label: 'Bored', value: 'Bored' },
      { label: 'Sad', value: 'Sad' },
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
            <div className="col-md-8 m-auto">
              <h1 className="text-center pt-3">Self Assessment Report</h1>
              <h3 className="text-primary">Participant A27</h3>
              <HeartData />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className="text-left">Emotion</label>
                  <select
                    className="form-control form-control-lg"
                    placeholder="Mood"
                    name="mood"
                    value={this.state.mood}
                    onChange={this.onChange}
                    options={options}
                  >
                    {selectOptions}
                  </select>
                  <small className="form-text text-muted text-left">How were you feeling a this moment?</small>
                </div>

                <div className="form-group">
                  <label className="text-left">Activity</label>
                  <input
                    type="text" className="form-control form-control-lg"
                    placeholder="Describe your activity"
                    name="activity"
                    value={this.state.activity}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted text-left">Annotate what your activity was to this moment.</small>

                </div>
                  
                  <div className="form-group">
                    <label forhtml="formControlRange">Experience</label>
                    <div>
                      <span className="float-left text-danger">Negative</span>
                      <span className="float-right text-success">Positive</span>
                    </div>
                    <input 
                      type="range" 
                      name="experience"
                      value={this.state.experience}
                      onChange={this.onChange}
                      className="form-control-range custom-range" 
                      min="0" 
                      max="200" 
                      id="formControlRange" />
                    <small className="form-text text-muted text-left">Set a scale how positive this stressful this experience was to you.</small>
                  </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

//input prop attribute: error={errors.mood}