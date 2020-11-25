import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSongs } from "../../actions/song_actions";
import { fetchPlaylists } from "../../actions/playlist_actions";
import { fetchPlaylist } from "../../actions/playlist_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { logout } from "../../actions/session_actions";
import { deletePlaylist } from "../../actions/playlist_actions"
import { removeSongFromPlaylist } from "../../actions/playlist_song_actions"

const mSTP = (state, ownProps) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  // let playlistId = ownProps.match.params.playlistId;
  // let playlist = state.entities.playlists[playlistId];
  return {
    // playlist,
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs),
    artists: state.entities.artists,
    currentUserId: currentUserId,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    // fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
    logout: () => dispatch(logout()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(
    songId,
    playlistId
  ))
  };
};

export default connect(mSTP, mDTP)(PlaylistShow);