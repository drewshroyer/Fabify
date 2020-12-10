import React from "react";
import { Link } from "react-router-dom";
import PlaylistList from "./playlist_list";

class PlaylistSongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "", playlistId: null, isOpen: false };
    this.handleSongClick = this.handleSongClick.bind(this);
    this.openAddSongModal = this.openAddSongModal.bind(this);
    this.closeAddSongModal = this.closeAddSongModal.bind(this);
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
    let playlistSong = {
       playlist_id: this.props.playlistId,
      song_id: this.props.song.id  
    }
    // debugger
    this.props.removeSongFromPlaylist(playlistSong);
    this.props.handleRemoveSong(this.props.song.id);
  }

  openAddSongModal() {
     let openModal = document.getElementsByClassName("modal-background-add-playlist")
    for(let i = 0; i < openModal.length; i++){
      openModal[i].style.display = 'block'
    }
  }

  closeAddSongModal() {
    let openModal = document.getElementsByClassName("modal-background-add-playlist")
    for(let i = 0; i < openModal.length; i++){
      openModal[i].style.display = 'none'
    }
  }

  render() {
    const { song, artist, idx, playlists } = this.props;

    let removeButton;
        if (this.props.removeSongFromPlaylist){
            removeButton = <div className="remove-song-button" onClick={this.handleRemoveSongFromPlaylist}>Remove Song</div>        
        }else{
            removeButton = <div></div>
        }

      let addSongModal;
          addSongModal = <div className="modal-background-add-playlist">
            <div className="modal-background-add-playlist-inner">
            <div className="playlist-form-header" onClick={this.closeAddSongModal}>X</div>
            <div className="playlist-form-header">Add to Playlist</div>
            {/* <div className="playlist-add-song-modal-list"> */}
              <ul className="nav-bar-playlists-modal">
                {playlists.map((playlist, idx) => (
                  <PlaylistList
                    key={idx}
                    playlist={playlist}
                    song={song}
                    closeAddSongModal = {this.closeAddSongModal}
                  />
                ))}
              </ul>
            </div>
            {/* </div> */}
          </div>

    return (
      <div className="playlist-song-tile-container">
        <div className="playlist-music-tile">
          <audio
            src={song.audio_url}
            className="playlist-music-tile-audio-file" // search how manipulate and format audio tags
            controls
            id={`audio-element--${song.id}`}
          />
          <div className="music-number-photo-container">
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
          </div>
          <div className="playlist-music-tile-name" onClick={this.handleSongClick} >{song.name}</div>
          <Link to={`/artists/${artist.id}`}>
          <div className="playlist-music-tile-artist">{artist.name}</div>
          </Link>
          <div className="dropdown">
           <button className="three-dot-options" onClick={this.openAddSongModal}>...
           </button>
        </div>
        {removeButton}
      </div>
        {addSongModal}
      </div>
    );
  }
}

export default (PlaylistSongIndexItem);