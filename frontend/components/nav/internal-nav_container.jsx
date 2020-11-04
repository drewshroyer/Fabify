import { connect } from "react-redux";
import InternalNavbar from "./internal-nav";
import { fetchSongs } from "../../actions/song_actions";
import { fetchPlaylists } from "../../actions/playlist_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchArtists } from "../../actions/artist_actions";

const mSTP = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return {
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs),
    artists: state.entities.artists,
    currentUserId: currentUserId,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  debugger
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchSongs: () => dispatch(fetchSongs()),
  };
};

export default connect(mSTP, mDTP)(InternalNavbar);
