class Ingredients < ActiveRecord::Base
    has_and_belongs_to :recipes
end
