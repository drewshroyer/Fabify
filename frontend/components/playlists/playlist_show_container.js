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
  const currentUser = state.entities.users[state.session.id];
  let playlists = Object.values(state.entities.playlists)
  let songs = Object.values(state.entities.songs)
  let playlistId = ownProps.match.params.playlistId //grab the ID   
  let playlist = state.entities.playlists[playlistId] || {name: "", song_ids: [], user_id: 0}
  let artists = state.entities.artists

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
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
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