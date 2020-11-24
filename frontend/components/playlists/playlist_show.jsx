import React from "react";
import { Link } from "react-router-dom";
import PlaylistSongIndexItem from "../playlists/playlist_song_index";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteThisPlaylist = this.handleDeletePlaylist.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
    // this.props.fetchArtists();
  }

    handleDeletePlaylist() {
      this.props
        .deletePlaylist(this.props.playlistId)
        .then(() => this.props.history.push("/webplayer"));
    }

  render() {
    // debugger
    //  if (!this.props.playlist || !this.props.songs || !this.props.albums) {
    //    return null;
    //  }
    const { songs, artists, playlists } = this.props;
    if (!songs) return null;

    return (
      <div className="playlist-show-container">
        <div
          data-testid="background-image"
          className="background-header-image-playlist-show"
        >
          <div className="playlist-subheader-show">Playlist</div>
          <div className="playlist-show-title">New Music Friday</div>
          <div className="playlist-show-description">
            Brand new music from Sam Smith, Miley Cyrus, 070 Shake, and more!
          </div>
        </div>
        <div className="play-pause-like-delete-container">
          <div
            className="playlist-music-audio"
            onClick={this.handleSongClick}
          >
            <img
              className="playlist-music-play-button"
              src={window.whitePlayButton}
              alt="white-play-button"
            ></img>
          </div>
          <svg role="img" height="32" width="32" viewBox="0 0 32 32"><path d="M27.319 5.927a7.445 7.445 0 00-10.02-.462s-.545.469-1.299.469c-.775 0-1.299-.469-1.299-.469a7.445 7.445 0 00-10.02 10.993l9.266 10.848a2.7 2.7 0 004.106 0l9.266-10.848a7.447 7.447 0 000-10.531z"></path></svg>
          <div className="dropdown">
           <button className="three-dot-options" >...
           </button>
           <div className="dropdown-content">
             <div className="dropdown-content-flex">
             <div className="delete-playlist-button" onClick={this.handleDeletePlaylist}>Delete Playlist</div>
             <Link to="/webplayer">
             <div className="delete-playlist-button">Return to Home</div>
             </Link>
             </div>
           </div>
           </div>
        </div>
        <div className="playlist-music-tile-line-item">
          <ul >
            {songs.map((song) => (
              <PlaylistSongIndexItem
                song={song}
                artist={artists[song.artist_id]}
                key={song.id}
                togglePlayPause={this.props.togglePlayPause}
              />
            ))}
          </ul>
        </div>
      
      </div>
    );
  }
}

export default PlaylistShow;
