class StaticPagesController < ApplicationController
  def about
    render("hello.html.erb")
  end
end
