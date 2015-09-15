

def fizz_buzz
  1.upto(100) do |x|
    if x%15==0
        p "fizz buzz"
    elsif x%3==0
        p "fizz"
    elsif x%5==0
        p "buzz"
    else
        p x
    end
  end
end

fizz_buzz
