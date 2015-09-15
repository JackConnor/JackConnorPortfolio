# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Classroom.destroy_all
Teacher.destroy_all
Student.destroy_all

c1 = Classroom.create(name:"Clase 1")
c2 = Classroom.create(name:"Clase 2")

t1 = c1.create_teacher(name:"Maestro 1 de Clase 1")
t2 = c2.create_teacher(name:"Maestra 2 de Clase 2")

1.upto(3) do |i|
  t1.students.create(name:"Student #{i} de Clase 1")
end

1.upto(3) do |i|
  t2.students.create(name:"Student #{i} de Clase 2")
end
