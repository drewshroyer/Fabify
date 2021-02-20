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
      audioEle.pause();
    } else {
      audioEle.play();
      audioEle.play();
    }

     if (this.state.playingSong) {
      let playButton = document.getElementsByClassName("main-play-button")
      for(let i = 0; i < playButton.length; i++){
        playButton[i].style.display = 'block'
      }
      let pauseButton = document.getElementsByClassName("main-pause-button")
      for(let i = 0; i < pauseButton.length; i++){
        pauseButton[i].style.display = 'none'
      }
      let greenButtons = document.getElementsByClassName("webplayer-music-tile-audio")
      for(let i = 0; i < greenButtons.length; i++){
        greenButtons[i].style.display = 'flex'
      }
    } else {
       let playButton = document.getElementsByClassName("main-play-button")
      for(let i = 0; i < playButton.length; i++){
        playButton[i].style.display = 'none'
      }
      let pauseButton = document.getElementsByClassName("main-pause-button")
      for(let i = 0; i < pauseButton.length; i++){
        pauseButton[i].style.display = 'block'
      }
      let greenButtons = document.getElementsByClassName("webplayer-music-tile-audio")
      for(let i = 0; i < greenButtons.length; i++){
        greenButtons[i].style.display = 'none'
      }
    }
  }

   activateFabMode() {
     if(this.state.checked === false) { 

    let fabifyLogo = document.getElementsByClassName("fabify-fab-mode-title-div")
    for(let i = 0; i < fabifyLogo.length; i++){
      fabifyLogo[i].style.display = 'block'
    }
    let oldLogo = document.getElementById("internal-white-splash-logo")
      oldLogo.style.display = 'none'

    let splashLogo = document.getElementsByClassName("internal-white-splash-logo")
    for(let i = 0; i < splashLogo.length; i++){
      splashLogo[i].style.height = '0px'
    }
    let outerContainer  = document.getElementsByClassName("webplayer-body-container")
    for(let i = 0; i < outerContainer.length; i++){
      outerContainer[i].style.background = 'linear-gradient(to bottom, #5E4BEA, #D3FF55'
    }
    let webplayerLogoutButton  = document.getElementsByClassName("webplayer-logout-button")
    for(let i = 0; i < webplayerLogoutButton.length; i++){
      webplayerLogoutButton[i].style.background = '#D3FF55'
      webplayerLogoutButton[i].style.color = '#5E4BEA'
    }
    let musicTiles = document.getElementsByClassName("webplayer-music-tile")
        for(let i = 0; i < musicTiles.length; i++){
          musicTiles[i].style.background =  'linear-gradient(to bottom, #E24E59, #B62E8C' // '#F137A6'
        }

    let musicTileNames = document.getElementsByClassName("webplayer-music-tile-name")
        for(let i = 0; i < musicTiles.length; i++){
          musicTileNames[i].style.color = '#9DF0E1'
        }   
    let musicTilePlayButton = document.getElementsByClassName("webplayer-music-tile-audio")
    for(let i = 0; i < musicTilePlayButton.length; i++){
          musicTilePlayButton[i].style.backgroundColor = '#101EFF'
        }

    // let playbar = document.getElementsByClassName("play-bar-container")
    // for(let i = 0; i < playbar.length; i++){
    //   playbar[i].style.background = '#D3FF55'
    //   playbar[i].style.borderTop = 'none'
    // }
    // let navBarContainer  = document.getElementsByClassName("internal-nav-bar-container")
    // for(let i = 0; i < navBarContainer.length; i++){
    //   navBarContainer[i].style.background = 'linear-gradient(to bottom, #5E4BEA, #D3FF55'
    // }

    let topBarContainer = document.getElementsByClassName("top-bar-container")
    for(let i = 0; i < topBarContainer.length; i++){
          topBarContainer[i].style.backgroundColor = '#5E4BEA'
        }
     } else {

       let oldLogo = document.getElementById("internal-white-splash-logo")
      oldLogo.style.display = 'block'

        let fabifyLogo  = document.getElementsByClassName("fabify-fab-mode-title-div")
      for(let i = 0; i < fabifyLogo.length; i++){
        fabifyLogo[i].style.display = 'none'
      }
      let outerContainer  = document.getElementsByClassName("webplayer-body-container")
      for(let i = 0; i < outerContainer.length; i++){
        outerContainer[i].style.background = '#121212'
      }   
      let musicTiles = document.getElementsByClassName("webplayer-music-tile")
        for(let i = 0; i < musicTiles.length; i++){
          musicTiles[i].style.background = '#272722' 
        }

    let musicTileNames = document.getElementsByClassName("webplayer-music-tile-name")
        for(let i = 0; i < musicTiles.length; i++){
          musicTileNames[i].style.color = '#ffffff'
        }   
    let musicTilePlayButton = document.getElementsByClassName("webplayer-music-tile-audio")
    for(let i = 0; i < musicTilePlayButton.length; i++){
          musicTilePlayButton[i].style.backgroundColor = '#1eba54'
        }
    let topBarContainer = document.getElementsByClassName("top-bar-container")
    for(let i = 0; i < topBarContainer.length; i++){
          topBarContainer[i].style.backgroundColor = 'black'
        }   
      let webplayerLogoutButton  = document.getElementsByClassName("webplayer-logout-button")
    for(let i = 0; i < webplayerLogoutButton.length; i++){
      webplayerLogoutButton[i].style.background = '#121212'
      webplayerLogoutButton[i].style.color = 'white'
    }
    let playbar = document.getElementsByClassName("play-bar-container")
    for(let i = 0; i < playbar.length; i++){
      playbar[i].style.background = '#121212'
      playbar[i].style.color = 'white'
    }
   }
  //  this.togglePlayPause(83, "Malibu", "Malibu", "Kim Petras")
  }

  render() {
    return (
      <div className="web-player-container">
        <InternalNavbarContainer />
        <div className="webplayer-outer-body-container">
          <div className="top-bar-container">
            <div className="fab-mode-button-container">
            <div className="fab-mode-button">Fab Mode?</div>
              <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" checked={this.state.checked} onChange={this.handleCheck} onClick={this.activateFabMode} />
                  <div className="slider round"></div>
            </label>
          </div>             
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
