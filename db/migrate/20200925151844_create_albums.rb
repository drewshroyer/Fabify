class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null:false
      t.integer :creator_id, null:false

      t.timestamps
    end
  end
end
