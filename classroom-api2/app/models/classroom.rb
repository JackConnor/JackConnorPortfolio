class Classroom < ActiveRecord::Base
  has_one :teacher
  has_many :students, through: :teacher
end
