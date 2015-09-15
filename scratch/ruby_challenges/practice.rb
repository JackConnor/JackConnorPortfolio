def countSheep(array)
  newArr = []
  for array.each do |sh|
    if sh == "true"
      newArr.push(sh)
    else
      p "not true"
    end
  end
  p newArr.length
end

  sheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

countSheep(sheep)
