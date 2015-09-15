class CreatePhillips < ActiveRecord::Migration
  def change
    create_table :phillips do |t|
      t.string :name
      t.string :city
      t.string :og

      t.timestamps null: false
    end
  end
end
