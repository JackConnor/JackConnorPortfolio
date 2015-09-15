class CreateGitgits < ActiveRecord::Migration
  def change
    create_table :gitgits do |t|

      t.timestamps null: false
    end
  end
end
