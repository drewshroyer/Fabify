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
    this.activateFabMode = this.activateFabMode.bind(this);
    this.state = {
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
    };
  }

  togglePlayPause(id = 2, name = "1999", photo, artist = "Troy") {

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

   activateFabMode() {
    //  if(input === checked) {
    let outerContainer  = document.getElementsByClassName("webplayer-body-container")
    for(let i = 0; i < outerContainer.length; i++){
      outerContainer[i].style.backgroundColor = '#FF69B4'
    }
    let musicTiles = document.getElementsByClassName("webplayer-music-tile")
        for(let i = 0; i < musicTiles.length; i++){
          musicTiles[i].style.backgroundColor = '#D3FF55'
          // musicTiles[i].style.backgroundImage="url('../../../app/assets/images/gold-background')"
        }
    let musicTileNames = document.getElementsByClassName("webplayer-music-tile-name")
        for(let i = 0; i < musicTiles.length; i++){
          musicTileNames[i].style.color = 'black'
        }
    //  } else {
    //  }
  }

  render() {
    return (
      <div className="web-player-container">
        <InternalNavbarContainer />
        <div className="webplayer-outer-body-container">
          <div className="top-bar-container">
            <div className="fab-mode-button-container">
              <div className="fab-mode-button">Fab Mode?</div>
              <label className="switch">
                <input type="checkbox" onClick={this.activateFabMode}/> 
                <span className="slider-round"></span>
              </label>
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
