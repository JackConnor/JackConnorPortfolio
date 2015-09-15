require "sinatra/activerecord"

require "sinatra"
require "sqlite3"
require "sinatra/activerecord"

set :development, {adapter: "sqlite3", }

class User < ActiveRecord::Base

end

class NinetiesAlbums < Sinatra::Base

  get "/" do
    "welcome comrade"
  end
end
