import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-more-inner-container">
            <Link to="/">
              <img
                className="footer-white-logo"
                id="white-splash-logo"
                src={window.whiteFabifyLogoURL}
                alt="spotify_logo"
              ></img>
            </Link>
            <div className="footer-left-column">
              <div className="footer-links">
                <Link
                  className="footer-link"
                  id="grey-footer"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  COMPANY{" "}
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  About
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Jobs
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  For the Record
                </Link>
              </div>
            </div>
            <div className="footer-center-column">
              <div className="footer-links">
                <Link
                  className="footer-link"
                  id="grey-footer"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  COMMUNITIES{" "}
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  For Artists
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Developers
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Brands
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Investors
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Vendors
                </Link>
              </div>
            </div>
            <div className="footer-right-column">
              <div className="footer-links">
                <Link
                  className="footer-link"
                  id="grey-footer"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  USEFUL LINKS{" "}
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Help
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Web Player
                </Link>
                <Link
                  className="footer-link"
                  to="linkedin.com/in/drew-shroyer-861b32a4/"
                >
                  Free Mobile App
                </Link>
              </div>
            </div>

            <div className="footer-far-right-icons">
              <Link to="instagram.com/drewshroyer"></Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Footer;
