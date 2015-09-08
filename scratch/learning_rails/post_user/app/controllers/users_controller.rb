class UsersController < ApplicationController
  def index
    @users = User.all
    render("index")
  end

  def show
  end

  def new
  end

  def create
    @user = User.new
    @user = User.create(user_params)
    redirect_to "/"
  end

  private
  def user_params
    params.require(:user).permit(:name, :location, :url)
  end

  def edit
  end

  def delete
  end
end
