import React from "react";
import { connect } from "react-redux";
import CreatePlaylist from "./create_playlist_modal";
import { createPlaylist } from "../../actions/playlist_actions";
import { closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return {
    playlist: { name: "" },
  };
};

const mdp = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  };
};

export default connect(msp, mdp)(CreatePlaylist);
