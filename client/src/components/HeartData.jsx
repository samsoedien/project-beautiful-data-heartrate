import React, { Component } from 'react';
import axios from 'axios';

class HeartData extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }
  
  componentDidMount() {
    axios
      .get('/api/heartdata')
      .then(res => {
        this.setState({
            data: res.data
        });
      })
      .catch(err => console.log(err));
  }  

  render() {
    let heartData = this.state.data
      .filter(heart =>
        heart.bpm > 165 || heart.bpm < 62)
      .map((heart, i) => (
      <p key={i}>Your BPM was {heart.bpm} at {heart.date}</p>
    ));    

    console.log(this.state.data)
    return(
      <div className="p-3">
        <div>
          <h5 className="text-muted">Retrieving heartdata from Rest API...</h5>
        </div>
        <div>
          <div className="card p-3">
            {heartData}
          </div>
         </div>
      </div>

    );
  }
}

export default HeartData;