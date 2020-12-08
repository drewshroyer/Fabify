import React from 'react'
import { addSongToPlaylist } from "../../actions/playlist_song_actions";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

class AddToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleClickforCancel = this.handleClickforCancel.bind(this);
    this.handleAddSongToPlaylist = this.handleAddSongToPlaylist(this);
  }

handleAddSongToPlaylist() {
      debugger
        let playlistSong = {
            playlist_id: this.props.playlist.id,
            song_id: this.props.song.id    // It's not putting the correct song ID - it's making a new one that is too high 
        } 
        debugger
        this.props.addSongToPlaylist(playlistSong);
        this.props.toggleModal();
        this.props.history.push(`/playlists/${this.props.playlist.id}`)
  }

  handleClickforCancel() {
    this.props.toggleModal();
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="inner-modal-container">
          <div className="create-playlist-modal">
            <div className="x-icon">
              <button
                className="x-icon-style"
                onClick={this.handleClickforCancel}
              >
                X
              </button>
            </div>
            <h1 className="create-new-playlist-container">
              Create new playlist
            </h1>
            <div className="create-playlist-input-bar">
              <form className="create-playlist-form-container">
                <div className="new-playlist-input">
                  <div className="new-playlist-input-title">Playlist Name</div>
                </div>
                <div className="cancel-create-buttons">
                  <button
                    className="playlist-cancel-button"
                    onClick={this.handleClickforCancel}
                    value="CANCEL"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
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

export default withRouter(connect(null, mDTP)(AddToPlaylist));