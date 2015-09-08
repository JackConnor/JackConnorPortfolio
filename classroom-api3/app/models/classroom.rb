class Classroom < ActiveRecord::Base
  belongs_to :teacher
  has_one :teacher
  has_many :students, through: :teachers
end
