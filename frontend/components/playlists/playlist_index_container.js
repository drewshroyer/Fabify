import { connect } from "react-redux";
import { fetchPlaylists, fetchAuthoredPlaylists,} from "../../actions/playlist_actions";
import { fetchUser } from "../../actions/user_actions";
import PlaylistIndex from "./playlist_index";


const msp = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const { playlists, users } = state.entities;

  return {
    items: playlists,
    currentUser: currentUser,
    itemType: "playlists",
    creators: users,
  };
};

const mdp = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchPlaylists()),
    fetchOwnedItems: (id) => dispatch(fetchAuthoredPlaylists(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(msp, mdp)(PlaylistIndex);
