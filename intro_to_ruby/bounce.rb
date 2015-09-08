def setup
  @x = 50
  @y = 50
  size(400, 400)
  point(@x,@y)

end

def draw
  @x+=1
  @y+=1
  point(@x,@y)
end
