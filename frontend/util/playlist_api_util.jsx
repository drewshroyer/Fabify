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
      url: `/api/playlists/${playlist}`,
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
      url: `/api/playlists/${id}`,
      method: "DELETE",
    });
}