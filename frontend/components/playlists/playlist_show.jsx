import React from "react";
import { Link } from "react-router-dom";
import PlaylistSongIndexItem from "./playlist_song_index";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      playingSong: false, 
      selectedSong: "",
      playlistSongIds: null, 
      playlistId: null
    };
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleToggleShuffle = this.handleToggleShuffle.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchPlaylists();
  }

  componentDidUpdate() {
    if(this.state.playlistSongIds === null && this.props.playlist.song_ids !== undefined) {
      this.setState({
        playlistSongIds: this.props.playlist.song_ids,
        playlistId: this.props.playlist.id
    })
    }
    if(this.state.playlistId !== null && this.state.playlistId !== this.props.playlist.id) {
      this.setState({
        playlistSongIds: this.props.playlist.song_ids,
        playlistId: this.props.playlist.id
    })
    }
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

  handleRemoveSong(songId) {
    let newState = this.state.playlistSongIds.filter(playlistSongId => {
      return playlistSongId !== songId
    })
    this.setState({
      playlistSongIds: newState
    })
  }

  render() {
    const { songs, artists, playlistName, playlistDescription, playlists, playlistId} = this.props;
    let playlistSongsIndex = []
    if(this.state.playlistSongIds !== null) {
    songs.forEach((song) => {
      if(this.state.playlistSongIds.includes(song.id)) { // running into issue with the song_ids
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
             </div>
           </div>
           </div>
        </div>

        <div className="playlist-music-tile-line-item">
          <ul >
            {playlistSongsIndex.map((song, idx) => (
              <PlaylistSongIndexItem
                playlistId = {playlistId}
                playlists = {playlists}
                idx = {idx}
                song={song}
                songId = {song.id}
                artist={artists[song.artist_id]}
                key={song.id}
                togglePlayPause={this.props.togglePlayPause}
                handleRemoveSong = {this.handleRemoveSong}
                removeSongFromPlaylist={() => this.props.removeSongFromPlaylist(song.id)}
              />
            ))}
          </ul>
        </div>     
      </div>
    );
   } else {
     return null;
   }
  }
}

export default PlaylistShow;