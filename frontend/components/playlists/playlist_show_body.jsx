import React from "react";
import InternalNavbarContainer from "../nav/internal-nav_container";
import PlayBarContainer from "../playbar/play-bar-container";
import PlaylistShowContainer from "./playlist_show_container";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

class PlaylistShowBody extends React.Component {
  constructor(props) {
    super(props);

    this.deleteThisPlaylist = this.handleDeletePlaylist.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);

    this.state = {
      // playlist: playlist,
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
    };
  }

  handleDeletePlaylist() {
      this.props
        .deletePlaylist(this.playlistId)
        .then(() => this.history.push("/webplayer"));
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
        <InternalNavbarContainer />
        <div className="webplayer-outer-body-container">
          <div className="top-bar-container">
            <button
              onClick={this.props.logout}
              className="webplayer-logout-button"
            >
              Log out
            </button>
          </div>
          <div className="webplayer-body-container">
            <PlaylistShowContainer
              togglePlayPause={this.togglePlayPause}
            />
          </div>
        </div>
        <PlayBarContainer
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

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mDTP)(PlaylistShowBody);
