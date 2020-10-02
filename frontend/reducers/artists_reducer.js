import { RECEIVE_ALL_SONGS } from "../actions/song_actions";
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST} from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;
    case RECEIVE_ALL_SONGS:
      return action.artists;
    default:
      return state;
  }
};

export default artistsReducer;
