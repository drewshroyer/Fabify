import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG= "RECEIVE_SONG";

const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs,
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song,
});

export const fetchSongs = () => (dispatch) => {
  return SongAPIUtil.fetchSongs().then((songs) =>
    dispatch(receiveAllSongs(songs))
  );
};

export const fetchSong = (id) => (dispatch) => {
  return SongAPIUtil.fetchSong(id).then((song) => dispatch(receiveSong(song)));
};
