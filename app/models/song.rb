# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  album_id    :integer          not null
#  artist_id   :integer          not null
#  song_length :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord

    validates :name, presence: true
    validates :album_id, presence: true
    validates :artist_id, presence: true
    validates :song_length, presence: true

    belongs_to :album
    belongs_to :artist
    
    has_one_attached :photo
    has_one_attached :audio

    has_many :playlists

end
