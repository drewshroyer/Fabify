import React from "react";
import { connect } from "react-redux";
import InternalNavbar from "./internal-nav";
import { fetchPlaylists, fetchSongs } from "../../actions/playlist_actions";

const mSTP = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const playlists  = state.entities.playlists;
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
