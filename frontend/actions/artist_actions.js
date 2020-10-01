import * as ArtistAPIUtil from "../util/artist_api_util";

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists,
});

const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist,
});

export const fetchArtists = () => (dispatch) => {
  return ArtistAPIUtil.fetchArtists().then((artists) =>
    dispatch(receiveAllArtists(artists))
  );
};

export const fetchArtist = (id) => (dispatch) => {
  return ArtistAPIUtil.fetchArtist(id).then((artist) =>
    dispatch(receiveArtist(artist))
  );
};