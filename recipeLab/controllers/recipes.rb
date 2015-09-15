class Recipes < ActiveRecord::Base

  get '/recipes' do
    @recipes = Recipe.all
    erb :"views/recipes/index"
  end

  get "/recipes/new" do
    @recipe = Recipe.new
    erb :"views/recipes/new"
  end

  post "/recipes/new" do
    @recipe = Recipe.create(Recipe.new)
    @recipe.save
    erb :"recipes/#{@recipe.id}/show"
  end
end
