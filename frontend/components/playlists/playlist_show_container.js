import {
  fetchPlaylist,
  deletePlaylist,
  updatePlaylist,
} from "../../actions/playlist_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlaylistShow from "./playlist_show_page";
import { fetchUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  let playlistId = ownProps.match.params.playlistId; 
  let playlist = state.entities.playlists[playlistId] || {
    name: "",
    song_ids: [],
    user_id: 0,
  };
  let owner;
  owner = state.entities.users[playlist.user_id] || { username: " " };
  let songs = playlist.song_ids.map((id) => state.entities.songs[id]);
  songs = songs.filter((el) => el != null);
  let albums = songs
    .map((song) => {
      if (song) return state.entities.albums[song.album_id];
    })
    .filter((album) => typeof album !== "undefined");
  let artists = albums
    .map((album) => {
      if (album) return state.entities.artists[album.artist_id];
    })
    .filter((artist) => typeof artist !== "undefined");
  let playlists = Object.values(state.entities.playlists);
  
  return {
    playlist,
    songs,
    albums,
    artists,
    playlists,
    currentUser,
    owner,
  };
};

const mdp = (dispatch) => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updatePlaylist: (formData, playlistId) =>
      dispatch(updatePlaylist(formData, playlistId)),
  };
};

export default withRouter(connect(msp, mdp)(PlaylistShow));
