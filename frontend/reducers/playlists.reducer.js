import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
} from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlist.id];
      return newState;
    default:
      return state;
  }
};

export default playlistsReducer;
