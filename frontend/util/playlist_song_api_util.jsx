export const addSongToPlaylist = (playlist_song) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlist_songs",
    data: { playlist_song },
  });
};

export const removeSongFromPlaylist = (songId, playlistId) => {
  return $.ajax({
    method: "DELETE",
    url: "/api/playlist_songs/remove",
    data: { song_id: songId, playlist_id: playlistId },
  });
};


export const fetchPlaylistSongs = () => {
  return $.ajax({
    url: "/api/playlist_songs",
  });
};