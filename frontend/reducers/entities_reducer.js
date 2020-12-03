import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists_reducer";
import songsReducer from "./songs_reducer";
import artistsReducer from "./artists_reducer";
import playlistSongReducer from "./playlist_songs_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  playlists: playlistsReducer,
  artists: artistsReducer,
  playlistSongs: playlistSongReducer,
});

export default entitiesReducer;