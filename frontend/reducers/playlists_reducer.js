import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
} from "../actions/playlist_actions";
import { RECEIVE_ALL_PLAYLIST_SONGS } from "../actions/playlist_song_actions";


const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playlistsReducer;
