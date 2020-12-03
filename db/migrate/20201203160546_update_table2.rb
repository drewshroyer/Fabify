class UpdateTable2 < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :song_ids, :integer, array:true, default: [], null:false
  end
end
