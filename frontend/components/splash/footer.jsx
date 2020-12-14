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
                <a
                  className="footer-link"
                  id="grey-footer"
                  href={"http://drewshroyer.github.io/"}
                  target = "_blank"
                >
                  DREW SHROYER
                </a>
                <a
                  className="footer-link"
                  href={"http://drewshroyer.github.io/"}
                  target = "_blank"
                >
                  Portfolio
                </a>
                <a
                  className="footer-link"
            href={"https://www.github.com/drewshroyer/"}
                  target = "_blank"
                >
                  Github
                </a>
                <a
                  className="footer-link"
            href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
                  target = "_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="footer-link"
                  href={"https://angel.co/u/drew-drew-shroyer"}
                  target = "_blank"
                >
                  Angel List
                </a>
                <a
                  className="footer-link"
                  href={"https://docs.google.com/document/d/e/2PACX-1vSapkifLigH4clhxcPpwihws5DLUIEMOvHzbjtw0ol8ZPvX2v1-N4Y85d9edDoJn0KvTVWs2wRPz98j/pub"}
                  target = "_blank"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="footer-center-column">
              <div className="footer-links">
                      <a
                  className="footer-link"
                  id="grey-footer"
                  href={"http://drewshroyer.github.io/"}
                  target = "_blank"
                >
                  MY WORK
                </a>
                <a
                  className="footer-link"
                  href={"https://mongo-bread.herokuapp.com/#/"}
                  target = "_blank"
                >
                  Bread
                </a>
                <a
                  className="footer-link"
                  href={"https://johnrobertmcc.github.io/walk-this-way/"}
                  target = "_blank"
                >
                  Walk this way
                </a>
                <a
                  className="footer-link"
                  href={"https://www.modalyst.co/"}
                  target = "_blank"
                >
                  Modalyst
                </a>
              </div>
            </div>
            <div className="footer-right-column">
              <div className="footer-links">
                <a
            className="footer-link"
            id="grey-footer"
            href={"http://drewshroyer.github.io/"}
            target = "_blank"
          >
            ADDITIONAL
          </a>
                <Link
                  className="footer-link"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="footer-link"
                  to="/signup"
                >
                  Sign Up
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
