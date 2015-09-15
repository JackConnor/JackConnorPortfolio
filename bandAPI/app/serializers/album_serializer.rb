class AlbumSerializer < ActiveModel::Serializer
  attributes :name
  has_one :band
end
