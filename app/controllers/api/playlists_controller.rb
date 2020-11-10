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
        render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy 
    @playlist = Playlist.find(params[:id])
    if @playlist.delete
        render :index
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name, :author_id, :description)
  end
end
