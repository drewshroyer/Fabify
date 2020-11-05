import { connect } from "react-redux";
import CreatePlaylist from "./create_playlist_modal";
import { createPlaylist } from "../../actions/playlist_actions";

const mSTP = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return {
    playlist: { name: "" },
    acurrentUserId: currentUserId,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  };
};

export default connect(mSTP, mDTP)(CreatePlaylist);
