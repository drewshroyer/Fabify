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
            src={window.whiteSpotifyLogoURL}
            alt="spotify_logo"
          ></img>
        </Link>

        <div className="nav-bar-links">
          <Link
            className="nav-bar-link"
            id="nav-bar-dash"
            to={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
          >
            Drew Shroyer
          </Link>
          <Link
            className="nav-bar-link"
            id="nav-bar-dash"
            to="linkedin.com/in/drew-shroyer-861b32a4/"
          >
            LinkedIn
          </Link>
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