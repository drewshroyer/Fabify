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
            <button
              onClick={this.props.logout}
              className="webplayer-logout-button"
            >
              Log out
            </button>
          </div>
          
          {/* // Should be same as webplayBodyContainer */}
          <div className="webplayer-body-container">
            <div className="webplayer-top-shortcuts-see-all">
              <div className="shortcuts-keyword-webplayer">Popular Playlists</div>
            </div>
            <ul className="webplayer-music-tile-line-item">

        {/* Should be the same as Song Index Item  */}
        {playlists.map((playlist) => (
              <div className="webplayer-music-tile-container">
                <div className="webplayer-music-tile">
                  <div className="webplayer-music-tile">
                    <Link to={`/playlists/${playlist.id}`}>
                    <div className="webplayer-music-tile-name">
                      {playlist.name}
                    </div> </Link>
                    <div className="webplayer-music-tile-artist">
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
