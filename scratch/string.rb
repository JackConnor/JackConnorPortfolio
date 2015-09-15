#monkey-patching

class String
  def first
    self[0]
  end

  def last
    self[-1]
  end

  def intersection(comparison)
    intArray = []
    string = self.split('')
    string2 = comparison.split('')
    string.each do |s|
      string2.each do |x|
        if s == x
          intArray.push(x)
        else
        end
      end
    end
    p intArray.uniq
  end



end
