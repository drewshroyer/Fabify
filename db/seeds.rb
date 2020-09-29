# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Artist.destroy_all
Song.destroy_all
Album.destroy_all

artist1 = Artist.create!({name: "Troye Sivan", biography: "troye sivan bio"})
album1 = Album.create!({name: "1999", creator_id: artist1.id})
song1 = Song.create!({name: "1999", album_id: album1.id, artist_id: artist1.id, song_length: "3:09"})
file1 = open('s3://fabify-seeds/TroyeSivan-1999.mp3')
file2 = open('s3://fabify-seeds/charli-xcx-troye-sivan-1999-1538664038-compressed.jpg')
song1.audio.attach(io: file1, filename: '1999-troye-sivan-audio')
song1.photo.attach(io: file2, filename: '1999-troye-sivan-album-cover')