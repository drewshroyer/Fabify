import { connect } from "react-redux";
import createPlaylist from "../../actions/playlist_actions";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    playlist: { title: "" },
    formType: "create",
    creator_id: currentUser.id,
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default withRouter(connect(mSTP, mDTP)(CreatePlaylist));
