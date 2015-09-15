require "sinatra/activerecord"

#set :database, {adapter: }

class AlbumsApp < ActiveRecord::Base
  
  get '/albums' do
    @albums = Album.all
    erb: all_albums
  end
end
