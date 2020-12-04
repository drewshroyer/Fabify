# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  author_id   :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

class Playlist < ApplicationRecord

    validates :name, presence: true
    validates :author_id, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_many :playlist_songs,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong

    has_many :songs,
        through: :playlist_songs,
        source: :song

    def song_ids
        self.playlist_songs.map do |song|
            song.id
        end
    end
    
end