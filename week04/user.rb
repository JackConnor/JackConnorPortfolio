# class User
#   attr_reader(:country)
#   attr_writer(:country)
#   def initialize
#     @rating = 0
#     @country = "USA"
#   end
#   p "boom new user"
#
#   def rating
#     @rating
#   end
#
#
#   def inc_rating
#     @rating += 1
#   end
#
# end
#
# Jimmy = User.new

def check_string(str)
  arr = str.split('')
  arr.each do |x|
    counter = 0
    p x
    if x=="a"
      if arr[counter + 3] == "b"
        p "got one at position "+counter.to_s
        p counter
        counter +=1
      else
        p "nope"
        p counter
        counter +=1
      end

    elsif x=="b"
      if arr[counter + 3]=="a"
        p counter
        p "got one at position "+counter.to_s
        counter +=1
      else
        p "nope"
        p counter
        counter +=1
      end
    end
  end




end

check_string("heallblllo")
check_string("sssssssssso")
