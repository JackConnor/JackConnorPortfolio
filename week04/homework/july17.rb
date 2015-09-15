
def reverse(string)
  string.reverse
end

p reverse("string")

def isPalindrome(string)
  rev = string.reverse
  if string == rev
    p "It's a palindrome: "+ rev
  else
    p "does it look like "+rev+" and "+string+" are the same?"
  end
end

isPalindrome("string")
isPalindrome("ablewasiereisawelba")

# #
def find_primes(num)
  counter = 1
  primes = []
  until counter > num
    if ((num/counter)%1) <= 0
      p "even divide"
      primes.push(num/counter)
    else
      p num.to_s+" divided by "+counter.to_s+" doesn't work"
    end
    #p maybe_prime
    p counter
    counter +=1
  end
  if primes.length > 2
    p "the primes are: "
    p primes
  else
    p "the number itself is prime"
  end
end

find_primes(7.00)

# def return_primes(num)
#   counter = 2
#   primes = []
#   until counter > num
#     if


def missing_number(array)
  sorted_arr = array.sort
  p sorted_arr
  counter = 1
  until counter > array.length
    if counter == sorted_arr[counter-1]
      p "no problem, counter is "+counter.to_s
      counter += 1
    elsif counter != sorted_arr[counter-1]
      p "your missing number is: "+ counter.to_s
      break
    end
  end
end

missing_number([1,2,3,5,6,7,8,9])

def persistence(num)
  number = num.to_s
  num_str = number.split('')
  final_num = 0
  num_str.each{|x| final_num += x.to_i}
  if final_num >=10
    number = final_num.to_s
    final_num = 0
    num_arr = number.split('')
    p num_arr
    num_arr.each{|x| final_num += x.to_i}
    p final_num
  else
    p "final number is: "+final_num.to_s
  end
end

persistence(58)

# def triple_double(arg, arg1)
#   num1 = arg.to_s.split('')
#   num2 = arg1.to_s.split('')
#   num1.each{|z|
#     index = num1.index(z)
#     if num1[index-1] == num1[index]
#       p "got one: "+ num1[index].to_s
#     else
#       p "not this one"
#     end
#     }
#   end
