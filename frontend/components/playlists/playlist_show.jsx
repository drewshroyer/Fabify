import React from "react";
import { Link } from "react-router-dom";
import PlaylistSongIndexItem from "./playlist_song_index";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleToggleShuffle = this.handleToggleShuffle.bind(this);
    this.removeSongFromPlaylist = this.removeSongFromPlaylist.bind(this);
  }

   deletePlaylist(e) {
     e.preventDefault()
      this.props.deletePlaylist(this.props.playlistId);
      this.props.history.push('/webplayer');
    }

    handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

   handleToggleShuffle() {
    let randomNumber = Math.floor(Math.random() * this.props.songs.length);
    let song1 = this.props.songs[randomNumber];
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.song.name
    );
  }

  removeSongFromPlaylist() {
     e.preventDefault()
     this.props.removeSongFromPlaylist(this.props.songId, this.props.playlistId);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchPlaylists();
  }

  render() {
    const { songs, artists, playlistName, playlistDescription, playlists} = this.props;
    let playlistSongsIndex = []
    songs.forEach((song) => {
      if(this.props.playlist.song_ids.includes(song.id)) {
        playlistSongsIndex.push(song);
      }
    })

    if (!songs) return null;
    return (
      <div className="playlist-show-container">
        <div
          data-testid="background-image"
          className="background-header-image-playlist-show"
        >
          <div className="playlist-subheader-show">Playlist</div>
        <div className="playlist-show-title">{playlistName}</div>
          <div className="playlist-show-description">
            {playlistDescription}
          </div>
        </div>
        <div className="play-pause-like-delete-container">
          <div
            className="playlist-music-audio"
            onClick={this.handleToggleShuffle}
          >
            <img
              className="playlist-music-play-button"
              src={window.whitePlayButton}
              alt="white-play-button"
            ></img>
          </div>
          {/* <svg role="img" height="32" width="32" viewBox="0 0 32 32"><path d="M27.319 5.927a7.445 7.445 0 00-10.02-.462s-.545.469-1.299.469c-.775 0-1.299-.469-1.299-.469a7.445 7.445 0 00-10.02 10.993l9.266 10.848a2.7 2.7 0 004.106 0l9.266-10.848a7.447 7.447 0 000-10.531z"></path></svg> */}
          <div className="dropdown">
           <button className="three-dot-options" >...
           </button>
           <div className="dropdown-content">
             <div className="dropdown-content-flex">  
             <div className="delete-playlist-button" onClick={this.deletePlaylist}>Delete Playlist</div>
             <Link to="/webplayer">
             <div className="delete-playlist-button">Return to Home</div>
             </Link>
             <Link to="/webplayer">
             <div className="delete-playlist-button">Add Songs</div>
             </Link>
             <div className="delete-playlist-button">Edit Details</div>
             </div>
           </div>
           </div>
        </div>
        <div className="playlist-music-tile-line-item">
          <ul >
            {playlistSongsIndex.map((song, idx) => (
              <PlaylistSongIndexItem
                playlists = {playlists}
                idx = {idx}
                song={song}
                artist={artists[song.artist_id]}
                key={song.id}
                togglePlayPause={this.props.togglePlayPause}
                removeSongFromPlaylist = {this.props.removeSongFromPlaylist}
              />
            ))}
          </ul>
        </div>
      
      </div>
    );
  }
}

export default PlaylistShow;