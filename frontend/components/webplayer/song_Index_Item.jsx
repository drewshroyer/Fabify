import React from "react";
import { Link } from "react-router-dom";

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
  }

  handleSongClick() {
    // if(this.state.playingSong === true) {
    // const currentAudioEle = document.getElementById(`audio-element--${this.state.selectedSong}`);
    // currentAudioEle.pause()
    // }
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name,
    );
  }

  render() {
    const { song, artist } = this.props;
    return (
      <div className="webplayer-music-tile-container">
        <div className="webplayer-music-tile">
          <Link to={`/artists/${artist.id}`}>
          <img src={song.photo_url} className="webplayer-music-tile-photo" />
          <div className="webplayer-music-tile-name">{song.name}</div>
          <div className="webplayer-music-tile-artist">{artist.name}</div>
          </Link>
          <div
            className="webplayer-music-tile-audio"
            onClick={this.handleSongClick}
          >
            <img
              className="webplayer-music-tile-play-button"
              src={window.whitePlayButton}
              alt="white-play-button"
            ></img>
          </div>
          <audio
            src={song.audio_url}
            className="webplayer-music-tile-audio-file" // search how manipulate and format audio tags
            controls
            id={`audio-element--${song.id}`}
          />
        </div>
      </div>
    );
  }
}

export default SongIndexItem;
