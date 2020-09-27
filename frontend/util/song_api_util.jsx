export const fetchSongs = () => {
    return $.ajax({
        url: '/api/songs'
    })
}

export const fetchSong = (id) => {
  return $.ajax({
    url: `/api/songs/${id}`,
  });
};