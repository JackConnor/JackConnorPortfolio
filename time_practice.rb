class Integer

def vezes
 p self
 count = self
 while count > 0
   yield
   count -=1
 end
 return self
end



5.vezes {p "string"}
end
