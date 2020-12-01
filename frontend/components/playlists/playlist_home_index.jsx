import React from "react";
import { Link } from "react-router-dom";
import InternalNavbarContainer from "../nav/internal-nav_container";
import PlayBarContainer from "../playbar/play-bar-container";

class PlaylistAllIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }
  componentWillMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists } = this.props;
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
            href={"http://www.drewshroyer.github.io/"}
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
          <div className="playlists-all-body-container">
            <div className="playlists-all-shortcuts-see-all">
              <div className="popular-playlists-keyword-webplayer">Popular Playlists</div>
            </div>
            <ul className="webplayer-music-tile-line-item">
        {playlists.map((playlist) => (
              <div className="webplayer-music-tile-container">
                <div className="playlist-home-tile">
                  <div className="webplayer-music-tile">
                    <Link to={`/playlists/${playlist.id}`}>
                    <div className="playlist-all-music-tile-name">
                      {playlist.name}
                    </div> </Link>
                    <div className="playlist-all-tile-description">
                      {playlist.description}
                    </div>
                  </div>
                  </div>
            </div>
                ))}
          </ul>
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

export default PlaylistAllIndex;
