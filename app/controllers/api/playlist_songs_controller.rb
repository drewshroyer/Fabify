class Api::PlaylistSongsController < ApplicationController

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        if @playlist_song.save
            @playlist = Playlist.find(@playlist_song.playlist_id)
            render "api/playlists/show"
        else
            render json: ["Cannot add this song"], status: 401
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])

        if @playlist_song.destroy
            @playlist = Playlist.find(@playlist_song.playlist_id)
            render "api/playlists/show"
        end
    end

    private

    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end

end