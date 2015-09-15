class UsersController < ApplicationController
  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to users_path
    else
      render 'new'
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def edit
  end

  def delete
  end

  def show
    @posts = User.find(params[:id]).posts.all
    @user = User.find(params[:id])
    @comments = User.find(params[:id]).comments
  end
end
