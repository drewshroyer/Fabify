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

    
  
end