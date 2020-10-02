import React from "react";
import { Link } from "react-router-dom";
import InternalNavbar from "../nav/internal-nav";
import PlayBar from "../playbar/play-bar";
import WebPlayerBody from "./webplayer_body_container";

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.state = {
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
    };
  }

  togglePlayPause(id, name, photo, artist) {
    const audioEle = document.getElementById(`audio-element--${id}`);
    if (this.state.selectedSong === id) {
      this.setState({ playingSong: !this.state.playingSong });
    } else {
      // this where we set a new song
      this.setState({
        selectedSong: id,
        playingSong: false,
        name: name,
        photo: photo,
        artist: artist,
      });
    }

    if (this.state.playingSong) {
      audioEle.pause();
    } else {
      audioEle.play();
    }
  }

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
          <WebPlayerBody togglePlayPause={this.togglePlayPause} />
        </div>
        <PlayBar
          togglePlayPause={this.togglePlayPause}
          selectedSong={this.state.selectedSong}
          name={this.state.name}
          photo={this.state.photo}
          artist={this.state.artist}
        />
      </div>
    );
  }
}

export default WebPlayer;
