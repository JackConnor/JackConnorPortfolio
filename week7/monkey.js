
String.prototype.reverse = function(){
  strNew = this.split('');
  strRev = []
  for (var i = strNew.length-1; i >= 0 ; i--) {
    strRev.push(strNew[i]);
  }
  strRev = strRev.join('');
  console.log(strRev)
}

"whatup".reverse();

"yowzaaaaa".reverse();

"jesse is cool".reverse()
