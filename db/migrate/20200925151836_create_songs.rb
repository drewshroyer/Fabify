class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null:false
      t.integer :album_id, null:false
      t.integer :artist_id, null:false
      t.integer :song_length, null:false

      t.timestamps
    end
  end
end
