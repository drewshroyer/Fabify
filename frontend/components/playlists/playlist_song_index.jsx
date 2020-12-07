import React from "react";
import { Link } from "react-router-dom";
import { addSongToPlaylist } from "../../actions/playlist_song_actions";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

class PlaylistSongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleAddSongToPlaylist = this.handleAddSongToPlaylist.bind(this);
    this.handleRemoveSongFromPlaylist = this.handleRemoveSongFromPlaylist.bind(this); 
  }

  handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

  handleRemoveSongFromPlaylist() {
    this.props.removeSongFromPlaylist();
    this.props.handleRemoveSong(this.props.song.id);
  }

  handleAddSongToPlaylist() {
    let playlistSong = {
        playlist_id: this.props.playlist.id,
        song_id: this.props.song.id
    }
    this.props.addSongToPlaylist(playlistSong);
    this.props.history.push(`/playlists/${this.props.playlist.id}`)
  }

  render() {
    let removeButton;
        if (this.props.removeSongFromPlaylist){
            removeButton = <div className="remove-song-button" onClick={this.handleRemoveSongFromPlaylist}>Remove Song</div>        
        }else{
            removeButton = <div></div>
        }

    const { song, artist, idx, playlists } = this.props;
    return (
      <div className="playlist-song-tile-container">
        <div className="playlist-music-tile">
          <audio
            src={song.audio_url}
            className="playlist-music-tile-audio-file" // search how manipulate and format audio tags
            controls
            id={`audio-element--${song.id}`}
          />
          <div className="playlist-music-tile-number-container" onClick={this.handleSongClick}>
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
          <div className="playlist-music-tile-name" onClick={this.handleSongClick} >{song.name}</div>
          <Link to={`/artists/${artist.id}`}>
          <div className="playlist-music-tile-artist">{artist.name}</div>
          </Link>
          <div className="dropdown">
           <button className="three-dot-options" >...
           </button>
           <div className="dropdown-content">
             {removeButton}
             <div className="dropdown-content-flex">
               <div className="add-song-to-playlist-button" >Add Song to Playlist</div>
             <div className="playlist-add-song-list">
                <div className="user-playlists">
              <ul className="nav-bar-playlists">
                {playlists.map((playlist, idx) => (
                 <div className="nav-bar-playlist-list" key={idx}>
                <div className="nav-bar-playlist-name" onClick={this.handleAddSongToPlaylist}>{playlist.name}</div>
                 </div>
                ))}
              </ul>
            </div>
             </div>
           </div>
           </div>
        </div>
      </div>
      </div>
    );
  }
}

const mDTP = (dispatch) => {
  return {
    addSongToPlaylist: (playlistSong) => dispatch(addSongToPlaylist(playlistSong)),
  };
};

export default withRouter(connect(null, mDTP)(PlaylistSongIndexItem));