class AlbumInfo < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :artist
    end
  end
end
