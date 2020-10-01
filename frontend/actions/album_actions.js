import * as AlbumAPIUtil from "../util/album_api_util";

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAllAlbums = (Albums) => ({
  type: RECEIVE_ALL_AlbumS,
  Albums,
});

const receiveAlbum = (album) => ({
  type: RECEIVE_Album,
  album,
});

export const fetchalbums = () => (dispatch) => {
  return AlbumAPIUtil.fetchalbums().then((albums) =>
    dispatch(receiveAllAlbums(albums))
  );
};

export const fetchAlbum = (id) => (dispatch) => {
  return AlbumAPIUtil.fetchAlbums(id).then((album) =>
    dispatch(receiveAlbum(album))
  );
};
