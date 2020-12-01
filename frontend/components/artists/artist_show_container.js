import { connect } from "react-redux";
import ArtistShow from "./artist_show";
import { fetchSongs } from "../../actions/song_actions";
import { fetchPlaylists } from "../../actions/playlist_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { logout } from "../../actions/session_actions";
import { removeSongFromPlaylist } from "../../actions/playlist_song_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state) => {
  const currentUser = state.entities.users[state.session.id];
  let songs = Object.values(state.entities.songs)
  let artists = state.entities.artists
  return {
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

export default withRouter(connect(mSTP, mDTP)(ArtistShow));