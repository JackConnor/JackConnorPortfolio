class Recipe < Sinatra::Base
  belongs_to :course
  has_and_belongs_to :ingredients
end
