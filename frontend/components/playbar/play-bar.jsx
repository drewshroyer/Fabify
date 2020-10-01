import React from "react";
import { Link } from "react-router-dom";
import {fetchSongs} from "../../actions/song_actions"

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchSongs();
  //   this.props.fetchArtists();
  // }

  render() {
    return (
      <div className="play-bar-container">
        <div className="left-play-bar">SONG DATA GOES HERE</div>

        <div className="center-play-bar-vertical-container">
          <div className="center-play-bar">
            <img
              src={whitePreviousIcon}
              alt="whitePreviousIcon"
              className="previous-song-button"
            />
            <img
              src={whitePlayCircleButton}
              alt="whitePlayCircleButton"
              className="main-play-button"
            />
            <img
              src={whiteNextIcon}
              alt="whiteNextIcon"
              className="next-song-button"
            />
          </div>
          <div className="timeline-slide-container">
            <input
              type="range"
              min="1"
              max="100"
              className="timeline-slider"
            />
            </div>
        </div>

        <div className="right-play-bar">
          <img
            src={whiteVolumeIcon}
            alt="whiteVolumeIcon"
            className="white-volume-icon"
          />
          <div className="volume-slide-container">
            <input
              type="range"
              min="1"
              max="100"
              // value="50"
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;