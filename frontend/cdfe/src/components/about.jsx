import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div class="parent-about">
        <div class="nav-bar">
          <div class='logo'>
            <Link to="/">
              <img src={`http://${window.location.hostname}/static/logo.png`} alt="logo" />
            </Link>
          </div>
          <div class='links'>
            <Link to="/about">
              <button>
                About
                    </button>
            </Link></div>
        </div>
      </div>
    );
  };
}
export default About;
