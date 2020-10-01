import React from "react";
import { Link } from "react-router-dom";

class SongIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { playingSong: false, selectedSong: "" };
        this.togglePlayPause = this.togglePlayPause.bind(this);
    }

    togglePlayPause(e) {
      const audioEle = document.getElementById(
        `audio-element--${e.currentTarget.id}`
      );

      if (this.state.selectedSong === e.currentTarget.id) {
        this.setState({playingSong: !this.state.playingSong})
      } else {
        this.setState({ selectedSong: e.currentTarget.id, playingSong: false });
      }

      if (this.state.playingSong) {
          audioEle.pause();
      } else {
          audioEle.play();
      }
    }

  render() {
    const { song, artist } = this.props;
    return (
      <div className="webplayer-music-tile-container">
        <div className="webplayer-music-tile">
          <Link to={`/songs/${song.id}`}></Link>
          <img src={song.photo_url} className="webplayer-music-tile-photo" />
          <div className="webplayer-music-tile-name">{song.name}</div>
          <div className="webplayer-music-tile-artist">{artist.name}</div>
          <div
            className="webplayer-music-tile-audio"
            id={song.id}
            onClick={this.togglePlayPause}
          >
            <img
              className="webplayer-music-tile-play-button"
              src={window.whitePlayButton}
              alt="white-play-button"
            ></img>
            {/* {this.state.selectedSong === song.id ? (
              <img
                className="webplayer-music-tile-play-button"
                src={window.whitePlayButton}
                alt="white-play-button"
              ></img>
            ) : (
              <img
                className="webplayer-music-tile-pause-button"
                src={window.whitePauseButton}
                alt="white-pause-button"
              />
            )} */}
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
