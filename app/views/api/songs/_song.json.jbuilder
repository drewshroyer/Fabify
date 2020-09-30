json.extract! song, :id, :name, :artist_id, :album_id, :song_length
json.photo_url url_for(song.photo)
json.audio_url url_for(song.audio)