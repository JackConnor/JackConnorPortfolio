

function arrayOrString(arg) {
  if((arg/arg)==1) {
    var lastNum = arg%10;
    console.log("it's a number");
    console.log(lastNum);
  } else {
    var array = arg.split('');
    var rev = array.reverse();
    console.log(rev[0]);
    console.log("it's a string");
    console.log(arg[arg.length-1]);
  }
}
