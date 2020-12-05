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
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      checked: false,
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
    };
  }

  handleCheck(e) {
    this.setState({
    checked: e.target.checked
   })
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
    let outerContainer  = document.getElementsByClassName("webplayer-body-container")
    //  if(outerContainer[0].style.backgroundColor === '#121212') {
    // let outerContainer  = document.getElementsByClassName("webplayer-body-container")
    for(let i = 0; i < outerContainer.length; i++){
      outerContainer[i].style.background = 'linear-gradient(to bottom, #D3FF55, #5E4BEA'
      outerContainer[i].style.transition = '1s'
    }
    let musicTiles = document.getElementsByClassName("webplayer-music-tile")
        for(let i = 0; i < musicTiles.length; i++){
          musicTiles[i].style.background =  'linear-gradient(to bottom, #E24E59, #B62E8C' // '#F137A6'
          musicTiles[i].style.transition = '10s'
          // musicTiles[i].style.backgroundImage="url('../../../app/assets/images/gold-background')"
        }
    let shortcutsTitle = document.getElementsByClassName("shortcuts-keyword-webplayer")
        for(let i = 0; i < shortcutsTitle.length; i++){
          shortcutsTitle[i].style.color = 'black'
          shortcutsTitle[i].style.transition = '5s'
        }  

    let musicTileNames = document.getElementsByClassName("webplayer-music-tile-name")
        for(let i = 0; i < musicTiles.length; i++){
          musicTileNames[i].style.color = '#9DF0E1'
          musicTileNames[i].style.transition = '5s'
        }   
    let musicTilePlayButton = document.getElementsByClassName("webplayer-music-tile-audio")
    for(let i = 0; i < musicTilePlayButton.length; i++){
          musicTilePlayButton[i].style.backgroundColor = '#101EFF'
        }

    let topBarContainer = document.getElementsByClassName("top-bar-container")
    for(let i = 0; i < topBarContainer.length; i++){
          topBarContainer[i].style.backgroundColor = '#5E4BEA'
          topBarContainer[i].style.transition = '3s'
        }
//      } else {
// for(let i = 0; i < outerContainer.length; i++){
//       outerContainer[i].style.backgroundColor = '#FF69B4'
//     }
//      }
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
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}
 onClick={this.activateFabMode}/> 
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
