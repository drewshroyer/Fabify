import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSong } from "../../actions/song_actions";
import { removePlaylists } from "../../actions/playlist_actions";
import { fetchArtists } from "../../actions/artist_actions";
import { updatePlaylist } from "../../actions/playlist_actions";
import { deletePlaylist } from "../../actions/playlist_actions";
import { fetchPlaylist } from "../../actions/playlist_actions";
import { removeSongFromPlaylist } from "../../actions/playlist_song_actions";

const mSTP = (state, ownProps) => {
    let playlist =
          state.entities.playlists[ownProps.match.params.playlistId];
    if (playlist) {
        playlist = playlist.playlist;
        playlistSongs = Object.values(state.entities.playlistSongs).filter(
          (playlistSong) => {
            return playlist.id === playlistSong.playlist_id;
          }
        );
        playlistSongs.forEach((playlistSong) => {
          playlistSongIds.push(playlistSong.song_id);
        });
        songs = Object.values(state.entities.songs);
    }
  
    return {
      currentUser: state.entities.users[state.session.id],
      playlist: state.entities.playlists[ownProps.match.params.playlistId],
      songs,
      albums: state.entities.albums,
      playlistId: ownProps.match.params.playlistId,
      artists: state.entities.artists,
      playlistSongs: state.entities.playlistSongs,
    };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    removePlaylists: () => dispatch(removePlaylists()),
    removeSongFromPlaylist: (songPlaylistId) =>
      dispatch(removeSongFromPlaylist(songPlaylistId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (id) => dispatch(updatePlaylist(id)),
    fetchSong: (song) => dispatch(fetchSong(song)),
    fetchArtists: () => dispatch(fetchArtists()),
  };
};

export default connect(mSTP, mDTP)(PlaylistShow);