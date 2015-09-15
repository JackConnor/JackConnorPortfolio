class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
        t.string :name
        t.string :country_of_origen
        t.integer :average_price
      t.timestamps null: false
    end
  end
end
