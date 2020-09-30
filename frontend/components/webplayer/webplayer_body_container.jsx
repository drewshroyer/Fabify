import { connect } from "react-redux";
import WebPlayerBody from "./webplayer_body";
import {fetchSongs} from "../../actions/song_actions" ;
import {fetchPlaylists} from "../../actions/playlist_actions";
import {fetchUser} from "../../actions/user_actions";
import {fetchArtists} from "../../actions/artist_actions";

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
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
  };
};

export default connect(mSTP, mDTP)(WebPlayerBody);
