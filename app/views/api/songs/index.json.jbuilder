json.songs do 
    @songs.each do |song| 
        json.set! song.id do
            json.partial!("api/songs/song", song: song)
        end
    end
end

json.artists do 
    @songs.each do |song| 
        json.set! song.artist_id do
            json.partial!("api/artists/artist", artist: song.artist)
        end
    end
end
