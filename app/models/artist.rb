# == Schema Information
#
# Table name: artists
#
#  id        :bigint           not null, primary key
#  name      :string           not null
#  biography :string
#
class Artist < ApplicationRecord

    validates :name, presence: true
    validates :biography, presence: true

    has_many :songs
    
end
