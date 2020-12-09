import React from 'react'
import { addSongToPlaylist } from "../../actions/playlist_song_actions";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddSongToPlaylist = this.handleAddSongToPlaylist.bind(this);
    }

    handleAddSongToPlaylist() {
        let playlistSong = {
            playlist_id: this.props.playlist.id,
            song_id: this.props.song.id    // It's not putting the correct song ID - it's making a new one that is too high 
        } 
        this.props.addSongToPlaylist(playlistSong);
        this.props.history.push(`/playlists/${this.props.playlist.id}`)
  }

    render() {
        const { playlist } = this.props;
        return (
          <div className="nav-bar-playlist-list" key={playlist.id}>
                <div className="nav-bar-playlist-name" onClick={this.handleAddSongToPlaylist}>{playlist.name}</div>
          </div>
        );
    }
}

const mDTP = (dispatch) => {
  return {
    addSongToPlaylist: (playlistSong) => dispatch(addSongToPlaylist(playlistSong)),
  };
};

export default withRouter(connect(null, mDTP)(PlaylistList));