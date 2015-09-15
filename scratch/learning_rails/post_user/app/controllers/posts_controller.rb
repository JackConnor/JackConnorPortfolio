class PostsController < ApplicationController
  def index
    @posts = Post.all
    render("index")
  end

  def show
  end

  def new
    render("new")
  end

  def create
    @post = Post.new
    @post = Post.create(post_params)
    @post.save
    redirect_to "/"
  end

  private
  def post_params
    params.require(:post).permit(:trick, :skater, :photo)
  end

  def edit
  end

  def delete
  end
end
