$(

function() { //jquery start function


// Start of Dragging feature to drop bumpers onto board
  var x = 0;
  var y = 0;
  var arrayRow1 = [];
  var arrayRow2 = [];
  var arrayRow3 = [];
  var arrayRow4 = [];
  var arrayRow5 = [];
  var masterArray = [[],[],[],[],[]];
  var secondMoveRow = [""];


function firstMove() {
  if(secondMoveRow[1]) {
    switch (secondMoveRow[1]) {
      case "arrayRow1":
        return 104;
        break;

      case "arrayRow2":
        return 208;
        break;

      case "arrayRow3":
        return 312;
        break;

      case "arrayRow4":
        return 416;
        break;

      case "arrayRow5":
        return 520;
        break;

      default:
        return 1000;
      }
    }
    else {
    console.log('no column 1 squares filled');
    return 1500;
    }
  }


function secondMove() {
  switch(secondMoveRow[1]) {
    case "arrayRow1":
      console.log(arrayRow1[1]);
      if(arrayRow1[1]){
        return arrayRow1[1];
      } else {
        return 20;
      }
      break;

    case "arrayRow2":
      console.log(arrayRow2[1]);
      if(arrayRow2[1]){
        return arrayRow2[1];
      } else {
        return 20;
      }
      break;

    case "arrayRow3":
      console.log(arrayRow3[1]);
      if(arrayRow3[1]){
        return arrayRow3[1];
      } else {
        return 20;
      }
      break;

    case "arrayRow4":
      console.log(arrayRow4[1]);
      if(arrayRow4[1]){
        return arrayRow4[1];
      } else {
        return 20;
      }
      break;

    case "arrayRow5":
      console.log(arrayRow5[1]);
      if(arrayRow5[1]){
        return arrayRow5[1];
      } else {
        return 20;
      }
      break;

    default:
      console.log("switch two not catching");
      return 20;
  }
}


function vectors() {
  var firstStretch = firstMove();
  var secondStretch = secondMove();

  if (x <= 0 && y <= firstStretch) {
    x += 0;
    y += 3;
    for (var i = 0; i < 2; i++) {
      box.style.left = x + "px";
      box.style.top = y + "px";
    }
  }
  else if(x <= (secondStretch-1)*104) {
    x += 3;
    y += 0;
    for (var i = 0; i < 2; i++) {
      box.style.left = x + "px";
      box.style.top = y + "px";
    }
  }
  else {
    x += 0;
    y -= 3;
    for (var i = 0; i < 2; i++) {
      box.style.left = x + "px";
      box.style.top = y + "px";
    }
  }

}
////end bumpers (except for a few calls)



  var box = document.querySelector('.ball');

  function move() {
    setInterval(vectors, 5);
  }

  //box.addEventListener('click', move);
  }
)
