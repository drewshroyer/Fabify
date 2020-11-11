import * as PlaylistSongApiUtil from "../util/playlist_song_api_util";
import { receivePlaylist } from "./playlist_actions";
export const CLEAR_PLAYLIST_SONGS = "CLEAR_PLAYLIST_SONGS";

export const clearPlaylistSongs = () => {
  return {
    type: CLEAR_PLAYLIST_SONGS,
  };
};

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
