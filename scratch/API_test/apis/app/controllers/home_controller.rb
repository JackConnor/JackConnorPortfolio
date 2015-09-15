class HomeController < ApplicationController
  def index
    @word = params[:word]
    @data =  HTTParty.get("http://words.bighugelabs.com/api/2/54dd52dc0400908154734f24fffbec79/#{@word}/json")
  end

  def new
  end
end
