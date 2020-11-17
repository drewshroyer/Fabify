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
          <div className="webplayer-body-container">
            <div className="shortcuts-keyword-webplayer">Popular Playlists</div>
            <div className="webplayer-music-tile-container">
              {playlists.map((playlist) => (
                <div className="webplayer-music-tile">
                  <Link to={`/songs/${playlist.id}`}></Link>
                  <div className="webplayer-music-tile-name">
                    {playlist.name}
                  </div>
                  <div className="webplayer-music-tile-artist">
                    {playlist.description}
                  </div>
                </div>
              ))}
              <PlayBarContainer
                togglePlayPause={this.togglePlayPause}
                selectedSong={this.state.selectedSong}
                name={this.state.name}
                photo={this.state.photo}
                artist={this.state.artist}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistAllIndex;
