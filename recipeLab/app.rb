require "sinatra"
require "sqlite3"
require "sinatra/activerecord"

set(:database, {adapter: "sqlite3", database: "scotches.db"})

class Vintage < ActiveRecord::Base
end
