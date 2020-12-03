class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def index
    @playlists = Playlist.all
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author_id = current_user.id
    if @playlist.save 
        render :show
    else
        render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update 
    @playlist = Playlist.find(params[:id])
      if @playlist.update(playlist_params)
          render "api/playlists/show"
      else
          render json: @playlist.errors.full_messages, status: 422
      end
  end

  def add_song
    @playlist = Playlist.find(params[:playlist_id])
    @song = Song.find(params[:song_id])
    @playlist_song = @playlist.playlist_songs.new(song_id: @song.id)
    if @playlist_song.save
      render 'api/playlists/show'
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def remove_song 
    @playlist = Playlist.find(params[:playlist_id])
    @song = Song.find(params[:song_id])
    @playlist_song = @playlist.playlist_songs.find_by(song_id: @song.id)
    @playlist_song.destroy
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy 
    @playlist = Playlist.find(params[:id])
    if @playlist.destroy
        render :index
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name, :author_id, :description, :song_ids)
  end
end
