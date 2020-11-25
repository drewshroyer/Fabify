import React from "react";
import { fetchSong } from "../../actions/song_actions";

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlayBar = this.togglePlayBar.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  togglePlayBar() {
    this.props.togglePlayPause(this.props.selectedSong);
  }

  setVolume(val) {   
        document.getElementById(`audio-element--${id}`);
        player.volume = val / 100;
    }

  render() {
    const { selectedSong, name, artist, photo } = this.props;
    return (
      <div className="play-bar-container">
        <div className="left-play-bar">
          {photo && <img className="left-play-bar-photo-render" src={photo} />}
          <div className="left-play-bar-data">
            <div className="left-play-bar-name-render">{name}</div>
            <div className="left-play-bar-artist-render">{artist}</div>
          </div>
        </div>

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
              id={this.props.selectedSong}
              onClick={this.togglePlayBar}
            />
            <img
              src={whiteNextIcon}
              alt="whiteNextIcon"
              className="next-song-button"
            />
          </div>
          <div className="timeline-slide-container">
            <div className="timeline-slide-time-count">O:OO</div>
            <input
              type="range"
              min="1"
              max="100"
              placeholder="0"
              className="timeline-slider"
            />{" "}
            <div className="timeline-slide-time-count">3:37</div>
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
              // onInput={setVolume(this.value)}
              // onChange={setVolume(this.value)}
              type="range"
              min="0"
              max="100"
              placeholder="50"
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
