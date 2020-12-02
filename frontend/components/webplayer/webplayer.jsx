import React from "react";
import { connect } from "react-redux";
import InternalNavbarContainer from "../nav/internal-nav_container";
import PlayBarContainer from "../playbar/play-bar-container";
import WebPlayerBodyContainer from "./webplayer_body_container";
import { logout } from "../../actions/session_actions";

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
        <InternalNavbarContainer />
        <div className="webplayer-outer-body-container">
          <div className="top-bar-container">
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
             <div className="delete-playlist-button"> 
             <a
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
          <WebPlayerBodyContainer togglePlayPause={this.togglePlayPause} />
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

export default connect(null, mDTP)(WebPlayer);
