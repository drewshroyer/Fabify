import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import { CLEAR_PLAYLIST_SONGS } from "../actions/playlist_songs_actions";

const PlaylistSongReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state);
      if (action.object.playlist_songs) {
        return action.object.playlist_songs;
      } else {
        return {};
      }
    case CLEAR_PLAYLIST_SONGS:
      return {};
    default:
      return state;
  }
};

export default PlaylistSongReducer;
