
///old version, but works when plugged into index.html
$(function() {
  var x = 0;
  var y = 0;

  var counter = 0;
  var currentMove = "firstMove";
  var box = document.querySelector('.ball');

  var secondMove = [];
  var thirdMove = [];
  var fourthMove = [];
  var fifthMove = [];
  var sixthMove = [];
  var seventhMove = [];

  var arrayOne = [];
  var arrayTwo = [];
  var arrayThree = [];
  var arrayFour = [];
  var arrayFive = [];

  var topOrSide = (Math.floor(Math.random()*1
  )); //for initial ball placement on top or side;

  function marginAmount() {
    var oneFive = Math.floor((Math.random()*5)+1);
    console.log("the starting row is: " + oneFive);
    return oneFive;
  }

  var rowOrColumnNumber = marginAmount(); // this var is a # (1 - 5) will be the row or column number the ball is place at

  function ballMargin() {
    var pixelsMoved  = (rowOrColumnNumber)*104;
    if(topOrSide == 0) {
      $(".ball").css('margin-left', 146 + (pixelsMoved));
    } else if(topOrSide == 1) {
      $(".ball").css('margin-left', '140px');
      $(".ball").css('margin-top', (pixelsMoved)+"px");
    }
  }

  $('.bouncerForward').draggable({snap: '.square', helper: myHelperForward});
  $('.bouncerBack').draggable({snap: '.square', helper: myHelperBack});
  $('.square').droppable({drop: dropEvent});


// --------- controls how bumper interaction
/// ------------ affects counter
  $('.bouncerBack').on('mousedown', function() {
    counter = 1;
    console.log("counter is: " + counter);
    return counter;});

  $('.bouncerForward').on('mousedown', function() {
    counter = 0;
    console.log("counter is: " + counter);
    return counter;});

    function dropBumper() {
      $('.square').droppable({drop: dropEvent});
      }


  //---------begin drop event -----------
  //---------------------------------


    function dropEvent() {
      var idNum = this.id;
      var rowFilter = function() {
        if(idNum%5 === 0) {
          return 5;
        } else {
          return idNum%5;
        }
      };
      var rowPlace = rowFilter(); ///left to right
      console.log("filtered row point is: "+ rowPlace);
      var rowNum = ((this.id - rowPlace+5)/5);
      console.log(" you just placed at; upDown: " +rowNum+ " and leftRight: " +rowPlace);
      //var rowPlace = idNum - ((rowNum-1)*5);
      if (counter == 0) {
        $(this).addClass('bounceForward');
        console.log("id num: " + idNum);
        console.log("in the row number: " + rowNum);
        console.log("and in the " + rowPlace +" spot");
        if(rowNum === 1){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            //arrayOne.push(rowPlace);
            arrayOne.push(rowPlace);
          }
          else {
            arrayOne.push(rowPlace);
          }
        }
        else if(rowNum === 2){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayTwo.push(rowPlace);
          } else {
            arrayTwo.push(rowPlace);
          }
        }
        else if(rowNum === 3){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayThree.push(rowPlace);
          } else {
            arrayThree.push(rowPlace);
          }
        }
        else if(rowNum === 4){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayFour.push(rowPlace);
          } else {
            arrayFour.push(rowPlace);
          }
        }
        else if(rowNum === 5){
          if(rowPlace == rowOrColumnNumber ) {
            secondMove.push(rowNum);
            arrayFive.push(rowPlace);
          } else {
            arrayFive.push(rowPlace);
          }
        }
      }
      //start bouncerBacks
      else if (counter == 1) {
        $(this).addClass('bounceBack');
        console.log("id num: " + idNum);
        console.log("in the row number: " + rowNum);
        console.log("and in the " + rowPlace +" spot");
        if(rowNum === 1){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayOne.push(rowPlace+"a");
          } else {
            arrayOne.push(rowPlace+"a");
          }
        }
        else if(rowNum === 2){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayTwo.push(rowPlace+"a");
          } else {
            arrayTwo.push(rowPlace+"a");
          }
        }
        else if(rowNum === 3){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayThree.push(rowPlace+"a");
          } else {
            arrayThree.push(rowPlace+"a");
          }
        }
        else if(rowNum === 4){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayFour.push(rowPlace+"a");
          } else {
            arrayFour.push(rowPlace+"a");
          }
        }
        else if(rowNum === 5){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayFive.push(rowPlace+"a");
          } else {
            arrayFive.push(rowPlace+"a");
          }
        }
      }
      arrayOne.sort();
      arrayTwo.sort();
      arrayThree.sort();
      arrayFour.sort();
      arrayFive.sort();
      secondMove.sort();
      console.log(arrayOne);
      console.log(arrayTwo);
      console.log(arrayThree);
      console.log(arrayFour);
      console.log(arrayFive);
      console.log(secondMove);
    }

//------------ end drop event ----------
//-------Begin Moves ----------------



  function firstMovement() {
 //try to use this to chain moves
    var moveStringArray = function() {
      if(secondMove.length > 0) {
        return secondMove[0];
      } else {
        return 999;
      }
    }
    var moveRowString = moveStringArray().toString();
    console.log(moveRowString);

    var moveRowArray = moveRowString.split('');
    console.log(moveRowArray);

    var moveRow = moveRowArray[0];
    console.log("move row is: " + moveRow);

    var firstMovement = moveRow*104;
    console.log(firstMovement);
    if(moveRowString == 999) {
      return 10000;
    } else {
      return firstMovement;
    }
  }

  function secondMovement() {
     var point = rowOrColumnNumber;
     var activeRow = secondMove[0];
     if(activeRow == 1) {//this layer filters forward and back bumpers
       var startIndex = arrayOne.indexOf(point);
       var newBumper = arrayOne[startIndex-1];
       console.log("we're going left");
       if ((newBumper/newBumper)==1) {
         thirdMove.push(newBumper);
         thirdMove.push("fromForward");
         console.log("third Move's row is: "+ thirdMove);
         return (newBumper*104)+146;
       } else {
         newBumperArray = newBumper.split('');
         newBackBumper = newBumperArray[0];
         thirdMove.push(newBackBumper);
         thirdMove.push("fromBack");
         console.log("third Move's row is: "+ thirdMove);
         return (newBackBumper*104)+146;
       }

       //because this returns a string in the center if the next bumper is a back
     } else if(activeRow == "1a") {
       var pointBack = point+'a';
       var startIndex = arrayOne.indexOf(pointBack);
       console.log("we're going right");
       var nextBumpId = arrayOne[startIndex+1];
       console.log(nextBumpId);
       if((nextBumpId/nextBumpId)==1){
         thirdMove.push(nextBumpId);
         thirdMove.push("fromForward");
         console.log(thirdMove);
         return ((arrayOne[startIndex+1])*104)+146;
       } else {
         newBumperArray = nextBumpId.split('');
         newBackBumper = newBumperArray[0];
         thirdMove.push(newBackBumper);
         thirdMove.push("fromBack");
         console.log(thirdMove);
         return (newBackBumper*104)+146;
       }
     }

      else if(activeRow == 2) {//this layer filters forward and back bumpers
       var startIndex = arrayTwo.indexOf(point);
       var newBumper = arrayTwo[startIndex-1];
       console.log("we're going left");
       if ((newBumper/newBumper)==1) {
         thirdMove.push(newBumper);
         thirdMove.push("fromForward");
         console.log(thirdMove);
         return (newBumper*104)+146;
       } else {
         newBumperArray = newBumper.split('');
         newBackBumper = newBumperArray[0];
         thirdMove.push(newBackBumper);
         thirdMove.push("fromBack");
         console.log("third Move's row is: "+ thirdMove);
         return (newBackBumper*104)+146;
       }

       //because this returns a string in the center if the next bumper is a back
     } else if(activeRow == "2a") {
       var pointBack = point+'a';
       var startIndex = arrayTwo.indexOf(pointBack);
       var nextBumpId = arrayTwo[startIndex+1];
       console.log(nextBumpId);
       if((nextBumpId/nextBumpId)==1){
         thirdMove.push(nextBumpId);
         thirdMove.push("fromForward");
         console.log(thirdMove);
         return ((nextBumpId)*104)+146;
       } else {
         newBumperArray = nextBumpId.split('');
         newBackBumper = newBumperArray[0];
         thirdMove.push(newBackBumper);
         thirdMove.push("fromBack");
         console.log("third Move's row is: "+ thirdMove);
         return (newBackBumper*104)+146;
       }
     }
     else if(activeRow == 3) {//this layer filters forward and back bumpers
      var startIndex = arrayThree.indexOf(point);
      var newBumper = arrayThree[startIndex-1];
      console.log("we're going left");
      if ((newBumper/newBumper)==1) {
        thirdMove.push(newBumper);
        thirdMove.push("fromForward");
        console.log(thirdMove);
        return (newBumper*104)+146;
      } else {
        newBumperArray = newBumper.split('');
        newBackBumper = newBumperArray[0];
        thirdMove.push(newBackBumper);
        thirdMove.push("fromBack");
        console.log("third Move's row is: "+ thirdMove);
        return (newBackBumper*104)+146;
      }

      //because this returns a string in the center if the next bumper is a back
    } else if(activeRow == "3a") {
      var pointBack = point+'a';
      var startIndex = arrayThree.indexOf(pointBack);
      console.log("we're going right");
      var nextBumpId = arrayThree[startIndex+1];
      console.log(nextBumpId);
      if((nextBumpId/nextBumpId)==1){
        thirdMove.push(nextBumpId);
        thirdMove.push("fromForward");
        console.log(thirdMove);
        return ((arrayThree[startIndex+1])*104)+146;
      } else {
        newBumperArray = nextBumpId.split('');
        newBackBumper = newBumperArray[0];
        thirdMove.push(newBackBumper);
        thirdMove.push("fromBack");
        console.log("third Move's row is: "+ thirdMove);
        return (newBackBumper*104)+146;
      }
    }
    else if(activeRow == 4) {//this layer filters forward and back bumpers
     var startIndex = arrayFour.indexOf(point);
     var newBumper = arrayFour[startIndex-1];
     console.log("we're going left");
     if ((newBumper/newBumper)==1) {
       thirdMove.push(newBumper);
       thirdMove.push("fromForward");
       console.log(thirdMove);
       return (newBumper*104)+146;
     } else {
       newBumperArray = newBumper.split('');
       newBackBumper = newBumperArray[0];
       thirdMove.push(newBackBumper);
       thirdMove.push("fromBack");
       console.log("third Move's row is: "+ thirdMove);
       return (newBackBumper*104)+146;
     }

     //because this returns a string in the center if the next bumper is a back
   } else if(activeRow == "4a") {
     var pointBack = point+'a';
     var startIndex = arrayFour.indexOf(pointBack);
     console.log("we're going right");
     var nextBumpId = arrayFour[startIndex+1];
     console.log(nextBumpId);
     if((nextBumpId/nextBumpId)==1){
       thirdMove.push(nextBumpId);
       thirdMove.push("fromForward");
       console.log(thirdMove);
       return ((nextBumpId)*104)+146;
     } else {
       newBumperArray = nextBumpId.split('');
       newBackBumper = newBumperArray[0];
       thirdMove.push(newBackBumper);
       thirdMove.push("fromBack");
       console.log("third Move's row is: "+ thirdMove);
       return (newBackBumper*104)+146;
     }
   }
   else if(activeRow == 5) {//this layer filters forward and back bumpers
    var startIndex = arrayFive.indexOf(point);
    var newBumper = arrayFive[startIndex-1];
    console.log("we're going left");
    if ((newBumper/newBumper)==1) {
      thirdMove.push(newBumper);
      thirdMove.push("fromForward");
      console.log(thirdMove);
      return (newBumper*104)+146;
    } else {
      newBumperArray = newBumper.split('');
      newBackBumper = newBumperArray[0];
      thirdMove.push(newBackBumper);
      thirdMove.push("fromBack");
      console.log("third Move's row is: "+ thirdMove);
      return (newBackBumper*104)+146;
    }

    //because this returns a string in the center if the next bumper is a back
  } else if(activeRow == "5a") {
    var pointBack = point+'a';
    var startIndex = arrayFive.indexOf(pointBack);
    console.log("we're going right");
    var nextBumpId = arrayFive[startIndex+1];
    console.log(nextBumpId);
    if((nextBumpId/nextBumpId)==1){
      thirdMove.push(nextBumpId);
      thirdMove.push("fromForward");
      console.log(thirdMove);
      return ((arrayFive[startIndex+1])*104)+146;
    } else {
      newBumperArray = nextBumpId.split('');
      newBackBumper = newBumperArray[0];
      thirdMove.push(newBackBumper);
      thirdMove.push("fromBack");
      console.log("third Move's row is: "+ thirdMove);
      return (newBackBumper*104)+146;
    }
  }

     else {
       console.log("can't read the row array");
     }
   }



  function thirdMovement() {
//thirdMove[0]= third move's starting row
//thirdMove[1] = "fromForward" or "fromBack"
//currently just forward to forward works
    var theColumn = thirdMove[0];
    var rowFilter = function() {
      if((secondMove[0]/secondMove[0])==1) {
        return secondMove[0];
      } else {
        var array = secondMove[0].split('');
        return array[0];
      }
    };
      //not filtered for 'a'
    var theRow = rowFilter();
    var nextMove = thirdMove[1];
    var fromLeftOrRight = theColumn - rowOrColumnNumber;
    console.log("the upDown column for move three will be: " + theColumn+ " the row (sideside) of this point will be: "+theRow);
    console.log(fromLeftOrRight);
    for (var i = 0; i < 5; i++) {
      var thing = arrayOne[i];
      var backThing = arrayOne[i]+"a";
      console.log("new array "+thing);
      if (thing/thing == 1) {
        fourthMove.push(thing);
      } else {
        fourthMove.push(backThing);
      }
    }
    console.log("fourth move is: "+fourthMove);
    //var nextArray = //array of all the bounced squares in this column
    if(nextMove == "fromForward" && fromLeftOrRight > 0) {
      return -1000;
    } else if(nextMove == "fromForward" && fromLeftOrRight < 0){
      return 1000;
    }
    else if((nextMove == "fromBack") && (fromLeftOrRight > 0)) {
      return 1000;
    }
    else if(nextMove == "fromBack" && fromLeftOrRight < 0){
      return -500;
    }
    else {
      return 20;
    }
  }






  function fourthMovement() {
    return 400;
  }

  //----- Click Event -------------
/*
  function clickMove() {
    var firstMovement = firstMove();
    for (var i = 0; i < firstMovement; i++) {
      setInterval(firstMove, 5);
    }
  }

*/
//-------End click event ---------



///--------- Start Flight Generator -------

  function flightController() {
    var first = firstMovement();
    var firstTime = first;
    var second = secondMovement();
    var secondTime = second;
    var third = thirdMovement();
    var fourth = fourthMovement();
    $('.ball').animate({marginTop: first},firstTime, function(){
      $(this).animate({marginLeft: second}, secondTime, function() {
        $(this).animate({marginTop: third}, 400, function() {
          $(this).animate({marginLeft: second}, 500);
        })
      })});
    }


//-------- End Flight Generator -----------

  $('.bouncerBack').on('drag', function() {
    console.log("I'm Dragging")});


/*----- This  (below) is code for the forward Bumpers (orginal type)
------------------------------------------------------*/





  /*----- This is code for the Back Bumpers (new type)---
  ------------------------------------------------------*/

/* these are the bumper drag clone helper functions ---
-------------------------------------------------------*/
  function myHelperForward() { //this is the drag-clone so you can do multiples
    return '<div id=draggableHelperForward></div>';
  }

  function myHelperBack() { //this is the drag-clone so you can do multiples]
    return '<div id=draggableHelperBack></div>';
  }


  $('.ball').on('click', flightController);
  console.log("checking for index of: "+ arrayOne.indexOf('2a'));

  ballMargin();
  dropBumper();
})
