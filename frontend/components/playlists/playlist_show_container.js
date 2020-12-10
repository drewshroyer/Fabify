import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSongs } from "../../actions/song_actions";
import { fetchPlaylists, fetchPlaylist, deletePlaylist } from "../../actions/playlist_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import { removeSongFromPlaylist, fetchPlaylistSongs } from "../../actions/playlist_song_actions";

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  let songs = Object.values(state.entities.songs);
  let artists = state.entities.artists;
  let playlists = Object.values(state.entities.playlists);
  let playlist = state.entities.playlists[ownProps.match.params.playlistId] || {};
  return {
    playlist,
    playlists,
    songs,
    artists,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylistSongs: () => dispatch(fetchPlaylistSongs()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
    logout: () => dispatch(logout()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    removeSongFromPlaylist: playlistSong => dispatch(removeSongFromPlaylist(playlistSong)),
  };
};

export default withRouter(connect(mSTP, mDTP)(PlaylistShow));