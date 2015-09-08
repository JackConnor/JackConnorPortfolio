
array = [null, null, null, null, null];
array2 = ["x","x","x","x","x"];

function test() {
  array[3] = "hi there";
  console.log(array);
}

function test2() {
  array2[3] = "hi there";
  console.log(array);
}

test();
test2();
