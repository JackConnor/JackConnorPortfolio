
function palIn(palindrome) {
  var x = palindrome;
  console.log(x);
  var noCaps = palindrome.toLowerCase();
  console.log(noCaps);
  var toArr = noCaps.split('');
  console.log(toArr);
  var revArr = toArr.reverse();
  console.log(revArr);
  var revString = revArr.join('');
  console.log(revString);
  if(revString == noCaps) {
    console.log("it's a palindrome!")
  } else {
    console.log("get that shit outta here!");
  }
}
