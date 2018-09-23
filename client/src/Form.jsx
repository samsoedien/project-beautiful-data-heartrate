import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: '',
      user: '',
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
      user: this.state.user
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
      { label: '* Select Mood', value: 0 },
      { label: 'Happy', value: 'Happy' },
      { label: 'Neutral', value: 'Neutral' },
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
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <small className="form-text text-muted text-left">Select your ..</small>
                  <select
                    className="form-control form-control-lg"
                    placeholder="User"
                    name="user"
                    value={this.state.user}
                    onChange={this.onChange}
                    options={options}
                  >
                    {selectOptions}
                  </select>
                </div>

                <div className="form-group">
                  <small className="form-text text-muted text-left">Describe your mood during the day</small>
                  <input
                    type="text" className="form-control form-control-lg"
                    placeholder="Mood"
                    name="mood"
                    value={this.state.mood}
                    onChange={this.onChange}
                  />
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