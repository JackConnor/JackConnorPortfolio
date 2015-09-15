# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name:"Steve Buscemi", location:"Pasadena", age:47)
User.create(name:"Alvin Sahara", location:"Jungle", age:33)

Post.create(trick:"ollie", location:"A ditch", url:"www.something.com", user_id:1)

Post.create(trick:"Kickflip", location:"AZ Park", url:"http://www.sanantonio.gov/parksandrec/images/skateboardPaltoPaltoR.jpg", user_id:1)

Comment.create(description:"super sick, holy sheeeeet", post_id:1)
