import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
render() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-inner-container">
        <Link to="/">
          <img
            id="white-splash-logo"
            src={window.whiteFabifyLogoURL}
            alt="spotify_logo"
          ></img>
        </Link>

        <div className="nav-bar-links">
          <a
            className="nav-bar-link"
            id="nav-bar-dash"
            href={"http://www.drewshroyer.github.io/"}
          >
            Drew Shroyer
          </a>
          <a
            className="nav-bar-link"
            id="nav-bar-dash"
            href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
          >
            LinkedIn
          </a>
          <div className="nav-bar-dash"></div>
          <Link className="nav-bar-link" to="/signup">
            Sign Up
          </Link>
          <Link className="nav-bar-link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
}

export default Navbar;