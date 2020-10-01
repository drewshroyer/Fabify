import { connect } from "react-redux";
import InternalNavbar from "./internal-nav";

const mSTP = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const { playlists } = state.entities;
  const userPlaylists =
    Object.values(playlists).length > 0
      ? currentUser.playlistIds.map((id) => {
          return playlists[id];
        })
      : [];
  return {
    playlists: playlists,
    currentUserId: currentUserId,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
  };
};

export default connect(mSTP, mDTP)(InternalNavbar);
