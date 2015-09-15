class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :name
      t.belongs_to :pages

      t.timestamps null: false
    end
  end
end
