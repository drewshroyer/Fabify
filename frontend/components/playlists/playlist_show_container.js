import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSongs } from "../../actions/song_actions";
import { fetchPlaylists } from "../../actions/playlist_actions";
import { fetchPlaylist } from "../../actions/playlist_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { logout } from "../../actions/session_actions";
import { deletePlaylist } from "../../actions/playlist_actions";
import { withRouter } from "react-router-dom";
import { fetchPlaylistSongs } from "../../actions/playlist_song_actions";
import { removeSongFromPlaylist } from "../../actions/playlist_song_actions";

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  let songs = Object.values(state.entities.songs);
  let artists = state.entities.artists;
  let playlistSongs = state.entities.playlistSongs ? Object.values(state.entities.playlistSongs) : []
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId] || {},
    playlistSongs,
    songs,
    artists,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPlaylistSongs: () => dispatch(fetchPlaylistSongs()),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
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

export default withRouter(connect(mSTP, mDTP)(PlaylistShow));