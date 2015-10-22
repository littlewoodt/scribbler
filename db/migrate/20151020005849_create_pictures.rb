class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.text :picture

      t.timestamps null: false
    end
  end
end
