import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG= "RECEIVE_SONG";

const receiveAllSongs = (payload) => ({
  type: RECEIVE_ALL_SONGS,
  songs: payload.songs,
  artists: payload.artists,
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song,
});

export const fetchSongs = () => (dispatch) => {
  return SongAPIUtil.fetchSongs().then((payload) => // a payload means we are returning multiple pieces of data
    dispatch(receiveAllSongs(payload))
  );
};

export const fetchSong = (id) => (dispatch) => {
  return SongAPIUtil.fetchSong(id).then((song) => dispatch(receiveSong(song)));
};
