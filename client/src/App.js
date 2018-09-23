import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Form from './Form';
// import LineChart from './LineChart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Form} />
          <Route exact path="/user-form" component={Form} />
          <Route exact path="/visualisation" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
