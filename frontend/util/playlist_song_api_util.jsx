export const addSongToPlaylist = (playlist_song) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlist_songs",
    data: { playlist_song },
  });
};

export const removeSongFromPlaylist = (playlist_song) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/playlist_songs/4`,
    data: { playlist_song },
  })
}

export const fetchPlaylistSongs = () => {
  return $.ajax({
    url: "/api/playlist_songs",
  });
};