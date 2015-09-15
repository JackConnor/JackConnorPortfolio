class HomeController < ApplicationController
  def index
  end

  def about
    render("home/information")
  end
end
