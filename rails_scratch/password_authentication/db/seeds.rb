# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email:"jack@jack.com", password:"jack")
User.create(email:"manu@manu.com", password:"manu")

Photo.create(url:"http://www.publicdomainpictures.net/pictures/50000/nahled/smiley-silhouette.jpg", user_id: 1)

Photo.create(url:"http://img03.deviantart.net/3cdd/i/2006/098/8/0/jack_skellington_by_ravensrose.jpg", user_id: 2)
