import * as PlaylistAPIUtil from '../util/playlist_api_util';
export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const REMOVE_PLAYLISTS = "CLEAR_PLAYLISTS";


export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists,
});

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId,
});

export const removePlaylists = () => {
  return {
    type: REMOVE_PLAYLISTS,
  };
};

export const fetchPlaylists = () => dispatch => {
    return PlaylistAPIUtil.fetchPlaylists().then((playlists) =>
      dispatch(receiveAllPlaylists(playlists))
    );
}

export const fetchPlaylist = (id) => (dispatch) => {
  return PlaylistAPIUtil.fetchPlaylist(id).then((playlist) =>
    dispatch(receivePlaylist(playlist))
  );
};

export const createPlaylist = (playlist) => (dispatch) => {
  return PlaylistAPIUtil.createPlaylist(playlist).then((playlist) =>
    dispatch(receivePlaylist(playlist))
  );
};


  export const updatePlaylist = (id) => (dispatch) => {
    return PlaylistAPIUtil.updatePlaylist(id).then((playlist) =>
      dispatch(receivePlaylist(playlist))
    );
  }

  export const deletePlaylist = (id) => (dispatch) => {
    return PlaylistAPIUtil.deletePlaylist(id).then(() => 
    dispatch(removePlaylist()));
  }

