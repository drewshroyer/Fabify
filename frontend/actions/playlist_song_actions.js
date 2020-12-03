import * as PlaylistSongApiUtil from "../util/playlist_song_api_util";
import { receivePlaylist } from "./playlist_actions";
export const CLEAR_PLAYLIST_SONGS = "CLEAR_PLAYLIST_SONGS";
export const RECEIVE_ALL_PLAYLISTS_SONGS = "RECEIVE_ALL_PLAYLISTS_SONGS";

export const clearPlaylistSongs = () => {
  return {
    type: CLEAR_PLAYLIST_SONGS,
  };
};

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS_SONGS,
  playlistSongs,
});

export const fetchPlaylistSongs = () => dispatch => {
    return PlaylistAPIUtil.fetchPlaylistSongs().then((playlists) =>
      dispatch(receiveAllPlaylists(playlists))
    );
}

export const addSongToPlaylist = (playlistSong) => (dispatch) => {
  return PlaylistSongApiUtil.addSongToPlaylist(playlistSong).then((value) =>
    dispatch(receivePlaylist(value))
  );
};

export const removeSongFromPlaylist = (songId, playlistId) => (dispatch) => {
  return PlaylistSongApiUtil.removeSongFromPlaylist(
    songId,
    playlistId
  ).then((value) => dispatch(receivePlaylist(value)));
};
