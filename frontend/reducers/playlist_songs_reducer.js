import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import { CLEAR_PLAYLIST_SONGS, RECEIVE_ALL_PLAYLIST_SONGS } from "../actions/playlist_song_actions";

const playlistSongReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
     case RECEIVE_ALL_PLAYLIST_SONGS:
      return action.playlistSongs;

    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state);
      if (action.playlist_songs) {
        return action.playlistSongs;
      } else {
        return {};
      }
      
    case CLEAR_PLAYLIST_SONGS:
      return {};
    default:
      return state;
  }
};

export default playlistSongReducer;
