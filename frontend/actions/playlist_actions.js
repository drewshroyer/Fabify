import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists,
});

const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId,
});

export const fetchPlaylists = () => dispatch => {
    return fetchPlaylists().then((playlists) =>
      dispatch(receiveAllPlaylists(playlists))
    );
}

export const fetchPlaylist = (id) => (dispatch) => {
  return fetchPlaylist(id).then((playlist) =>
    dispatch(receivePlaylist(playlist))
  );
};

export const createPlaylist = (playlist) => (dispatch) =>
  PlaylistAPIUtil.createPlaylist(playlist).then((playlist) =>
    dispatch(receivePlaylist(playlist))
  );

  export const updatePlaylist = (id) => (dispatch) =>
    PlaylistAPIUtil.updatePlaylist(id).then((playlist) =>
      dispatch(receivePlaylist(playlist))
    );

  export const deletePlaylist = (id) => (dispatch) =>
    PlaylistAPIUtil.deletePlaylist(id).then(() => 
    dispatch(removePlaylist()));

