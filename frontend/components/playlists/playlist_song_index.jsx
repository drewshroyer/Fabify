import React from "react";
import { Link } from "react-router-dom";
import PlaylistIndex from "../nav/playlist_index";

class PlaylistSongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
  }

  handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

  render() {
    const { song, artist, idx, playlists } = this.props;
    return (
      <div className="playlist-song-tile-container" onClick={this.handleSongClick}>
        <div className="playlist-music-tile">
          <audio
            src={song.audio_url}
            className="playlist-music-tile-audio-file" // search how manipulate and format audio tags
            controls
            id={`audio-element--${song.id}`}
          />
          <div className="playlist-music-tile-number-container">
            <div className="playlist-music-tile-number">{idx + 1} 
              <div
                className="playlist-music-tile-audio"
              >
                <img
                  className="playlist-music-tile-play-button"
                  src={window.whitePlayButton}
                  alt="white-play-button"
                ></img>
              </div>
            </div>
          </div>
          <img src={song.photo_url} className="playlist-music-tile-photo" />
          <div className="playlist-music-tile-name">{song.name}</div>
          <Link to={`/artists/${artist.id}`}>
          <div className="playlist-music-tile-artist">{artist.name}</div>
          </Link>
          <div className="dropdown">
           <button className="three-dot-options" >...
           </button>
           <div className="dropdown-content">
             <div className="dropdown-content-flex">
               <div className="add-song-to-playlist-button">Add Song to Playlist</div>
             <div className="playlist-add-song-list">
                <div className="user-playlists">
              <ul className="nav-bar-playlists">
                {playlists.map((playlist, idx) => (
                  <PlaylistIndex 
                  playlist={playlist} 
                  key={idx} />
                ))}
              </ul>
            </div>
             <div className="delete-playlist-button" onClick={this.handleDeletePlaylist}>Delete Playlist</div>
             <Link to="/webplayer">
             <div className="delete-playlist-button" onClick={this.removeSongFromPlaylist}>Remove Song</div>
             </Link>
             </div>
           </div>
           </div>
        </div>
      </div>
      </div>
    );
  }
}

export default PlaylistSongIndexItem;
