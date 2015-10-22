class Users < ActiveRecord::Migration
  def change
  	create_table "users", force: :cascade do |t|
    t.text     :username
    t.text     :name
    t.text     :email
    t.text     :password
    t.datetime :created_at, null: false
    t.datetime :updated_at, null: false
  end
  end
end