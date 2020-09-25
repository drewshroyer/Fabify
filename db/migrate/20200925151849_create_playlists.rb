class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null:false
      t.integer :author_id, null:false
      t.string :description

      t.timestamps
    end
  end
end
