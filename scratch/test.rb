class Array
  def second
    p self[1]
  end
end

def sqrd(x)
  arr = []
  x = x.to_s
  x = x.split('')
  x.each do |y|
    b = y.to_i
    arr.push(b*b)
  end
  p arr
  arr = arr.join
  p arr.to_i
end

r = [1,4,5,6,7,7,7]
r.second

sqrd(22022022022)
