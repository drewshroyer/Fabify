import React from "react";
import { Link } from "react-router-dom";

class PlaylistSongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
  }

  handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

  render() {
    const { song, artist } = this.props;
    return (
      <div className="playlist-song-tile-container">
        <div className="playlist-music-tile">
          <audio
            src={song.audio_url}
            className="playlist-music-tile-audio-file" // search how manipulate and format audio tags
            controls
            id={`audio-element--${song.id}`}
          />
          <Link to={`/songs/${song.id}`}></Link>
          <div className="playlist-music-tile-number-container">
            <div className="playlist-music-tile-number">{song.id} 
              <div
                className="playlist-music-tile-audio"
                onClick={this.handleSongClick}
              >
                <img
                  className="playlist-music-tile-play-button"
                  src={window.whitePlayButton}
                  alt="white-play-button"
                ></img>
              </div>
            </div>
          </div>
          <img src={song.photo_url} className="playlist-music-tile-photo" />
          <div className="playlist-music-tile-name">{song.name}</div>
          <div className="playlist-music-tile-artist">{artist.name}</div>
        </div>
      </div>
    );
  }
}

export default PlaylistSongIndexItem;
