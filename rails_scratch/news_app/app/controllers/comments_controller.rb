class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    @comment.user = current_user #who is this comment from
    @comment.save
    redirect_to post_path(@comment.post)
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
