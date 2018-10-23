import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-lg mb-4 p-2 bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Stress App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active pr-1">
              <Link to="/user-form" className="nav-link">
                User Form
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active pr-1">
              <Link to="/visualisation-bpm" className="nav-link">
                BPM Visualisation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
