import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Instructions</h1>
      <div className="container">
        <p className="lead">
          This is a data collector and visualisation for stress related to heart
          data. In the User form irregular BPM values are filter and the user
          can fill in some contextual data to enrich the dataset.
        </p>
        <p className="">
          The application is build in react and is connected to a Rest API. Go
          to{" "}
          <a href="https://beautiful-data.herokuapp.com/api/users/1">
            https://beautiful-data.herokuapp.com/api/users/1
          </a>{" "}
          to view heartdata. Post request can be send to this end-point (bpm:
          Number).
        </p>
      </div>
    </div>
  );
};

export default Home;
