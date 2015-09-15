class ClassroomSerializer < ActiveModel::Serializer
  attributes :name
  has_one :teacher
end
