String.prototype.hashtaggery = function(){
  var sentenceArray = this.split(' ');
  var hashArray = [];
  console.log(this.split(' '));
  for (var i = 0; i < sentenceArray.length; i++) {
    console.log(sentenceArray[i][0]);
    if (sentenceArray[i][0] == "#") {
      console.log(sentenceArray[i]);
      hashArray.push(sentenceArray[i]);
    }
  }
  console.log(hashArray)
}

"a man a plan #trrriip #blah something else some words #dog #cat".hashtaggery();

"so #octothorpe".hashtaggery()
