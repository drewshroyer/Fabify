export const addSongToPlaylist = (playlist_song) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlist_songs",
    data: { playlist_song },
  });
};

export const removeSongFromPlaylist = (playlistSongId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlist_songs/${playlistSongId}`
    })
}


export const fetchPlaylistSongs = () => {
  return $.ajax({
    url: "/api/playlist_songs",
  });
};