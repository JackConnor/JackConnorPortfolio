class QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def new
  end

  def create
    @question = Question.new
    @question = Question.create(question_params)
    redirect_to "/"
  end

  private

def question_params
  params.require(:question).permit(:title, :body)
end
end
