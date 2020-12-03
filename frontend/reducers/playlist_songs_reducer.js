import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import { CLEAR_PLAYLIST_SONGS, RECEIVE_ALL_PLAYLISTS_SONGS } from "../actions/playlist_song_actions";

const playlistSongReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  debugger

  switch (action.type) {
     case RECEIVE_ALL_PLAYLISTS_SONGS:
      return action.playlist_songs;

    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state);
      if (action.playlist_songs) {
        return action.playlist_songs;
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
