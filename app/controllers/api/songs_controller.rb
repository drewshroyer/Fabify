class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    render :show
  end

  def index
    @songs = Song.all
    render :index
  end

  private
  def song_params
    params.require(:song).permit(:name, :album_id, :artist_id, :song_length)
  end
end
