import React from "react";
import { Link } from "react-router-dom";
import InternalNavbar from "./internal-nav";
import PlayBar from './play-bar';


class WebPlayer extends React.Component {
    render() {
        return (
          <div className="web-player-container">
            <InternalNavbar />
            <div className="webplayer-body-container">
              <div className="top-bar-container">
                <i class="fal fa-less-than"></i>
                <i class="fal fa-greater-than"></i>
                <Link to="/" className="webplayer-logout-button">
                  Log out
                </Link>
              </div>
            </div>
            <PlayBar />
          </div>
        );
    }
}

export default WebPlayer;