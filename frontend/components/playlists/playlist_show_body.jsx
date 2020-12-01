import React from "react";
import InternalNavbarContainer from "../nav/internal-nav_container";
import PlayBarContainer from "../playbar/play-bar-container";
import PlaylistShowContainer from "./playlist_show_container";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import { fetchPlaylist, fetchPlaylists } from "../../actions/playlist_actions";


class PlaylistShowBody extends React.Component {
  constructor(props) {
    super(props);
    this.deleteThisPlaylist = this.handleDeletePlaylist.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);
    // this.handleToggleShuffle = this.handleToggleShuffle.bind(this);

    this.state = {
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
    };
  }

   componentDidMount() {
     this.props.fetchPlaylists();
     this.props.fetchPlaylist(this.props.match.params.playlistId);
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

  // handleToggleShuffle() {
  //   let shuffledSong = Math.floor(Math.random() * songs.length);
  //   let song = songs[shuffledSong];
  //   togglePlayPause(shuffledSong.id, shuffledSong.name, shuffledSong.photo, shuffledSong.artist)
  // }

  render() {
    const { playlist } = this.props
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
              key = {playlist.id}
              playlist={playlist}
              name = {playlist.name}
              description = {playlist.description}
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
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
  };
};

const mSTP = (state, ownProps) => {  
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId]
  };
};

export default connect(mSTP, mDTP)(PlaylistShowBody);
