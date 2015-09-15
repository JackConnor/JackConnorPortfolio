class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :trick
      t.string :location
      t.string :url
      t.references :user
      t.string :description

      t.timestamps null: false
    end
  end
end
