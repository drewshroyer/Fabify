import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSong } from "../../actions/song_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { updatePlaylist } from "../../actions/playlist_actions";
import { deletePlaylist } from "../../actions/playlist_actions";
import { fetchPlaylist } from "../../actions/playlist_actions";
import { logout } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    let playlist =
          state.entities.playlists[ownProps.match.params.playlistId];
    if (playlist) {
        playlist = playlist.playlist;
    }

  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    currentUser: state.entities.users[state.session.id],
    // currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    // fetchUser: (id) => dispatch(fetchUser(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (id) => dispatch(updatePlaylist(id)),
    fetchSong: (song) => dispatch(fetchSong(song)),
    fetchArtists: () => dispatch(fetchArtists()),
  };
};

export default connect(mSTP, mDTP)(PlaylistShow);