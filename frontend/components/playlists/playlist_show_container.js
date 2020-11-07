// import { connect } from "react-redux";
// import PlaylistShow from "./playlist_show_page";
// import {
//   fetchPlaylist,
//   updatePlaylist,
//   deletePlaylist,
// } from "../../actions/playlist_actions";

// const mSTP = (state, ownProps) => {
//   let playlist = state.entities.playlists[ownProps.match.params.playlistId];
//   let playlistSongs;
//   let playlistSongIds = [];
//   let songs;
//   if (playlist) {
//     playlist = playlist.playlist;
//     playlistSongs = Object.values(state.entities.playlistSongs).filter(
//       (playlistSong) => {
//         return playlist.id === playlistSong.playlist_id;
//       }
//     );
//     playlistSongs.forEach((playlistSong) => {
//       playlistSongIds.push(playlistSong.song_id);
//     });
//     songs = Object.values(state.entities.songs);
//   }

//   return {
//     playlist: state.entities.playlists[ownProps.match.params.playlistId],
//     songs,
//     albums: state.entities.albums,
//     playlistId: ownProps.match.params.playlistId,
//     artists: state.entities.artists,
//     playlistSongs: state.entities.playlistSongs,
//     currentUser: state.entities.users[state.session.id],
//   };
// };

// const mDTP = (dispatch) => {
//   return {
//     fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
//     updatePlaylist: (id) => dispatch(updatePlaylist(id)),
//     // openModal: (openModalProps) => dispatch(openModal(openModalProps)),
//     // removeSongFromPlaylist: (songPlaylistId) =>
//     //   dispatch(removeSongFromPlaylist(songPlaylistId)),
//     deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
//     // selectSong: (song) => dispatch(receiveSelectedSong(song)),
//   };
// };

// export default connect(mSTP, mDTP)(PlaylistShow);