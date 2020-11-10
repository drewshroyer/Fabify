import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSongs } from "../../actions/song_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { updatePlaylist } from "../../actions/playlist_actions";
import { deletePlaylist } from "../../actions/playlist_actions";
import { logout } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  let playlistId = ownProps.match.params.playlistId; 
  let playlist = state.entities.playlists[playlistId];
  return {
    playlist,
    currentUserId: currentUserId,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (id) => dispatch(updatePlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(PlaylistShow);
