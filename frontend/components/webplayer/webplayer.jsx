import React from "react";
import { Link } from "react-router-dom";
import InternalNavbar from "./internal-nav";
import PlayBar from './play-bar';
import WebPlayerBody from './webplayer_body_container';


class WebPlayer extends React.Component {
    render() {
        return (
          <div className="web-player-container">
            <InternalNavbar />
            <div className="webplayer-outer-body-container">
              <div className="top-bar-container">
                <Link to="/" className="webplayer-logout-button">
                  Log out
                </Link>
              </div>
              <WebPlayerBody/>
            </div>
            <PlayBar />
          </div>
        );
    }
}

export default WebPlayer;