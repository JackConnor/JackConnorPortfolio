@students = []

# A method to return either our current list of students, or an empty array if we don't have one yet.
# This allows us to simply call `students` instead of `@students`
def students
  @students
end

students
# A method to create a new student hash and push it to our students array
# The argument here is named student to make it clear it's a hash holding details about a new student
def new_student(student)
  students.push(student)
  p @students
end
new_student({first_name: "Ted", last_name: "Danson", course_name: "wdi"})
new_student({first_name: "Zhillipe", last_name: "Someguy", course_name: "wdi"})
# A method to list our existing students in a particular format
  # This uses a new method, sort_by, which works similar to sort & came from the documentation
  # Then we're using string interpolation to define exactly what we want the output to look like
def list_students
  list = students.sort_by{|x, y, z| x }
  p list
  #p "our students are #{list}"
end

list_students

# A method to count how many students we have, also using string interpolation to generate output
def count_students
  length = @students.length
  p length
  p "we have #{length} students"
end
count_students()


def student_details
  #code here
end
