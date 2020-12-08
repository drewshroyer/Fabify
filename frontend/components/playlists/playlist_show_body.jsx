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
    this.togglePlayPause = this.togglePlayPause.bind(this);
    // this.handleToggleShuffle = this.handleToggleShuffle.bind(this);
    this.state = {
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
      playlistName: "",
      playlistDescription: "",
      playlistId: "",
      playlist: null
    };
  }

   componentDidMount() {
    //  debugger
     this.props.fetchPlaylist(this.props.match.params.playlistId);
     this.setState({
        playlistName: this.props.playlist.name,
        playlistDescription: this.props.playlist.description,
        playlistId: this.props.playlist.id
    })
   }

   componentDidUpdate(prevProps, prevState) {
      if(prevProps.playlist.name !== this.props.playlist.name) {
        this.setState({
          playlistName: this.props.playlist.name,
          playlistDescription: this.props.playlist.description,
          playlistId: this.props.playlist.id,
          playlist: this.props.playlist
        })
      }
      if(prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
      }
   }

  togglePlayPause(id, name, photo, artist) {
    const audioEle = document.getElementById(`audio-element--${id}`);
    if (this.state.selectedSong === id) {
      this.setState({ playingSong: !this.state.playingSong });
    } else {
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
             <div className="fab-mode-button-container">
              <div className="fab-mode-button"></div>
              {/* <label className="switch">
                <input type="checkbox" onClick={this.activateFabMode}/> 
                <span className="slider-round"></span>
              </label> */}
          </div>
            <div className="dropdown">
           <button className="webplayer-logout-button">Menu
           </button>
           <div className="dropdown-content-webplayer">
             <div className="dropdown-content-flex">  
             <div className="delete-playlist-button">
               <a
            className="nav-bar-link"
            id="nav-bar-dash"
            href={"http://drewshroyer.github.io/"}
            target = "_blank"
          >
            Drew Shroyer
          </a>
          </div>
             <div className="delete-playlist-button">
               <a
            className="nav-bar-link"
            id="nav-bar-dash"
            href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
            target = "_blank"
          >
            LinkedIn
          </a></div>
             <div className="delete-playlist-button"> <a
            className="nav-bar-link"
            id="nav-bar-dash"
            target = "_blank"
            href={"https://www.github.com/drewshroyer/"}
          >
            GitHub
          </a> </div>
             <div className="delete-playlist-button">
                <div className="nav-bar-link" onClick={this.props.logout}>Logout
                </div>
              </div>
             </div>
           </div>
           </div>
          </div>
          <div className="webplayer-body-container">
            <PlaylistShowContainer
              playlistId={this.state.playlistId}
              playlistName={this.state.playlistName}
              playlistDescription={this.state.playlistDescription}
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
    playlist: state.entities.playlists[ownProps.match.params.playlistId] || {}
  };
};

export default connect(mSTP, mDTP)(PlaylistShowBody);