require "sinatra"
require "sqlite3"
require "sinatra/activerecord"

set(:database, {adapter: "sqlite3", database: "movies.db"})

class User < ActiveRecord::Base

end

class RedditApp < Sinatra::Base
  #register(Sintra::ActiveRecordExtension)
  @@db = SQLite3::Database.new("movies.db")
  #@@users = []

  #welcome
  get "/" do
    "Welcome to Jack's App"
  end

  #display all users
  get ("/u/all") do
    @users = User.all
    erb :user_all
  end

  #form to create new user
  get "/u/new" do
    erb :new_user
  end

  post "/u/new" do
    @user = {name: params[:name], age: params[:age]}
    User.create(@user)
    redirect "/u/all"
  end

  #show individual user
  get "/u/:name" do
    @results = User.find_by({name: params[:name]})
    p @results
    if @result
      return erb :show_user
    else
      return "no users by that name"
    end

  #send user form
  get "/u/update/:name" do
    erb :update_user
  end

  patch("/u/:name") do
    @user = User.find_by({name: params[:name]})
    @user.update({name: })
  end

  #delete user
  get "/u/destroy" do
    erb :delete_user
  end

  get("/m/all") do
    results = @@db.execute("select * from movies")
    return results.to_s
  end
end
