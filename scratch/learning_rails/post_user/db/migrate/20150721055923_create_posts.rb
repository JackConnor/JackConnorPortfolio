class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :trick
      t.integer :id_user
      t.string :skater
      t.string :url

      t.timestamps null: false
    end
  end
end
