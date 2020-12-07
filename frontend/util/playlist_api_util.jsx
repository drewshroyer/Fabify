export const fetchPlaylists = () => {
  return $.ajax({
    url: "/api/playlists",
  });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    url: `/api/playlists/${id}`,
  });
};

export const createPlaylist = playlist => {
    return $.ajax({
      url: `/api/playlists/`,
      method: 'POST',
      data: {playlist}
    });
}

export const updatePlaylist = (playlistId) => {
  return $.ajax({
    url: `/api/playlists/${playlistId}`,
    method: "PATCH",
    data: { playlistId },
  });
};

export const deletePlaylist = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/playlists/${id}`,
    });
}

export const addSong = (playlistId, songId) =>
  $.ajax({
    method: "POST",
    url: `/api/playlists/${playlistId}/add_song`,
    data: { song_id: songId },
  });

export const removeSong = (playlistId, songId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/playlists/${playlistId}/remove_song`,
    data: { song_id: songId },
  });