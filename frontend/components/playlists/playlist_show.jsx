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
    const audioEle = document.getElementById(`audio-element--${song1.id}`);
    this.props.togglePlayPause(
      song1.id,
      song1.name,
      song1.photo_url,
      song1.name,
    );
      audioEle.play();
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
    if(this.props.playlist.song_ids !== null) {
    songs.forEach((song) => {
      if(this.props.playlist.song_ids.includes((song.id))) { // running into issue with the song_ids
        playlistSongsIndex.push(song);
      }
    })
    let backGroundImage1 =  <div className="playlist-show-image-container">
        <div
          data-testid="background-image"
          className="background-header-image-playlist-show"
        >
          <div className="playlist-subheader-show">Playlist</div>
        <div className="playlist-show-title">{(playlistName === 'Release Radar' && this.props.currentUser.name !== "Demo Login") || (playlistName === '2020 Wrapped' && this.props.currentUser.name !== "Demo Login") ? `${this.props.currentUser.name}'s ${playlistName}` : playlistName} </div>
          <div className="playlist-show-description">
            {playlistDescription}
          </div>
        </div>
        </div>
    let backGroundImage2 = <div className="playlist-show-image-container">
        <div
          data-testid="background-image"
          className="background-header-image-playlist-show"
        >
          <div className="playlist-subheader-show">Playlist</div>
        <div className="playlist-show-title">{(playlistName === 'Release Radar' && this.props.currentUser.name !== "Demo User") || (playlistName === '2020 Wrapped' && this.props.currentUser.name !== "Demo User") ? `${this.props.currentUser.name}'s ${playlistName}` : playlistName} </div>
          <div className="playlist-show-description">
            The songs you loved most this year, all wrapped up.
          </div>
        </div>
        </div>

    if (!songs) return null;
    return (
      <div className="playlist-show-container">
        {playlistName === '2020 Wrapped' ?  backGroundImage2 : backGroundImage1}
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
                removeSongFromPlaylist={(playlistSong) => this.props.removeSongFromPlaylist(playlistSong)}
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