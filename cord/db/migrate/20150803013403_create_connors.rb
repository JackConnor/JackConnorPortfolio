class CreateConnors < ActiveRecord::Migration
  def change
    create_table :connors do |t|

      t.timestamps null: false
    end
  end
end
