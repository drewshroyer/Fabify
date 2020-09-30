import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists.reducer";
import songsReducer from "./songs_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  playlists: playlistsReducer,
});

export default entitiesReducer;
