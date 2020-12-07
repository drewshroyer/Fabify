class PlaylistSong < ApplicationRecord
    validates :playlist_id, presence: true
    validates :song_id, presence: true

    default_scope { order(created_at: :asc) }

    belongs_to :playlist,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :Playlist

    belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song

    

end

