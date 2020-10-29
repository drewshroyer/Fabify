import { connect } from "react-redux";
import CreatePlaylist from "./create_playlist_modal";
import { createPlaylist } from "../../actions/playlist_actions";

const mSTP = (state) => {
  let currentUser = state.entities.users[state.session.id]
  return {
    playlist: { name: "" },
    author_id: currentUser.id
  };
};

const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  };
};

export default connect(mSTP, mDTP)(CreatePlaylist);
