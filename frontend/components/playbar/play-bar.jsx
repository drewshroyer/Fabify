import React from "react";
import { fetchSong } from "../../actions/song_actions";

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchSong(this.props.selectedSong);
  }

  render() {
    // const songs = fetchSongs();
    // console.log("hi", songs);
    // let photo = songs.id && songs.id.photo_url ? songs.id.
    // console.log("songs", this.props.songs);
    // console.log(this.props.songs);
    console.log(this.props);
    return (
      <div className="play-bar-container">
        <div className="left-play-bar">
          <div className="left-play-bar-photo-render" c>
            {this.props.selectedSong.photo}
          </div>
          <div className="left-play-bar-data">
            <div className="left-play-bar-name-render">
              {this.props.selectedSong.name}
            </div>
            <div className="left-play-bar-artist-render">
              {this.props.selectedSong.artist}
            </div>
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
              onClick={this.props.togglePlayPause}
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
              placeholder="0"
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
