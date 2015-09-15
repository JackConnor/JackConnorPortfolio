//Work in Progress, first move works now on all 5 columns
$(function() {

var counter = 0;

var winCircle = "#a";

var playerGuess = "";

var actualWin = "";

var boardArrayDown = [[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]];

var boardArrayAcross = [[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]];

var topOrSide = (Math.floor(Math.random()*1
)); //for initial ball placement on top or side;

function marginAmount() {
  var zeroToFour = Math.floor((Math.random()*5)+1);
  return zeroToFour;
}

var acrossStart = parseInt(marginAmount());
console.log("the starting row is: " + acrossStart-1); //The ball starting row (1 - 5)
//note: column number is only thing not on 0-4 spectrum

function ballMargin() {
  var pixelsMoved  = (acrossStart)*104;
  if(topOrSide == 0) {
    $(".ball").css('margin-left', 250 + (pixelsMoved));
  } else if(topOrSide == 1) {
    $(".ball").css('margin-left', '140px');
    $(".ball").css('margin-top', (pixelsMoved)+"px");
  }
}

$('.bouncerForward').draggable({snap: '.square', helper: myHelperForward});
$('.bouncerBack').draggable({snap: '.square', helper: myHelperBack});
$('.square').droppable({drop: dropEvent});

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
$('.bouncerBack').on('drag', function() {
  console.log("I'm Dragging")});

function myHelperForward() {
  return '<div id=draggableHelperForward></div>';
}
function myHelperBack() { //this is the drag-clone so you can do multiples]
  return '<div id=draggableHelperBack></div>';
}

// function playGame() {
// for(k=0; k<3; k++) {
//   if(k%2 === 0) {
//     console.log("begin k's here: " + k);


///Start Code

function dropEvent() {
  var squareId = parseInt(this.id);
  console.log("you just pressed a key with id of: "+squareId);
  if(counter == 0){
    $(this).addClass('bounceForward');
//-------adds classes to squares when dropped
  } else if(counter == 1) {
    $(this).addClass('bounceBack');
  } else {
    console.log("no class change");
  }
//-----------
  switch (squareId) {
    case 0:
      boardArrayAcross[0][0] = squareId;
      boardArrayDown[0][0] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
      break;
    case 1:
      boardArrayAcross[0][1] = squareId;
      boardArrayDown[1][0] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
      break;
    case 2:
      boardArrayAcross[0][2] = squareId;
      boardArrayDown[2][0] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
      break;
    case 3:
      boardArrayAcross[0][3] = squareId;
      boardArrayDown[3][0] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
      break;
    case 4:
      boardArrayAcross[0][4] = squareId;
      boardArrayDown[4][0] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
      break;
    case 5:
      boardArrayAcross[1][0] = squareId;
      boardArrayDown[0][1] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 6:
      boardArrayAcross[1][1] = squareId;
      boardArrayDown[1][1] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 7:
      boardArrayAcross[1][2] = squareId;
      boardArrayDown[2][1] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 8:
      boardArrayAcross[1][3] = squareId;
      boardArrayDown[3][1] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 9:
      boardArrayAcross[1][4] = squareId;
      boardArrayDown[4][1] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 10:
      boardArrayAcross[2][0] = squareId;
      boardArrayDown[0][2] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 11:
      boardArrayAcross[2][1] = squareId;
      boardArrayDown[1][2] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 12:
      boardArrayAcross[2][2] = squareId;
      boardArrayDown[2][2] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 13:
      boardArrayAcross[2][3] = squareId;
      boardArrayDown[3][2] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 14:
      boardArrayAcross[2][4] = squareId;
      boardArrayDown[4][2] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 15:
      boardArrayAcross[3][0] = squareId;
      boardArrayDown[0][3] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 16:
      boardArrayAcross[3][1] = squareId;
      boardArrayDown[1][3] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 17:
      boardArrayAcross[3][2] = squareId;
      boardArrayDown[2][3] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 18:
      boardArrayAcross[3][3] = squareId;
      boardArrayDown[3][3] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 19:
      boardArrayAcross[3][4] = squareId;
      boardArrayDown[4][3] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 20:
      boardArrayAcross[4][0] = squareId;
      boardArrayDown[0][4] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 21:
      boardArrayAcross[4][1] = squareId;
      boardArrayDown[1][4] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 22:
      boardArrayAcross[4][2] = squareId;
      boardArrayDown[2][4] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 23:
      boardArrayAcross[4][3] = squareId;
      boardArrayDown[3][4] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    case 24:
      boardArrayAcross[4][4] = squareId;
      boardArrayDown[4][4] = squareId;
      console.log("The across array for this spot is: "+boardArrayAcross);
      console.log("the down spot for this array is: "+ boardArrayDown);
    break;
    default: console.log("keypress didn't find "+ keypress);
  }
  console.log(this);
  console.log("our start point shoudl be: "+ (acrossStart-1));
  console.log("at end of function 1, about tco change k, but it's still : "+k);
  k++;
  console.log("now this is a new k: "+k);
  return this;
}//end first k

  else if(k%2 === 1) {
    console.log('were now kaying in function 2');
/////begin Moves
var startX = acrossStart-1;
console.log(startX);
var startY = -2;
var thisMoveDirection = "south";
var currentMoveStartPoint = [startX, startY];

function calcMoves() {
  var moves = [];
  var movesMargin = [];
  ///move one calculations (that go into our presets) go here

  console.log("the starting point is: "+currentMoveStartPoint);

  for (var i = 0; i < 15; i++) {

      if(i%2 === 0) {
        //downs and ups go here
        console.log("START TURN : "+i);
        console.log("boardArrayDown is currently: "+boardArrayDown[currentMoveStartPoint[0]]);
        var xFunc = function() {
          if(boardArrayDown[0][0] === 0) {
            console.log("still got our zero");
          return [0];
        } else{
          console.log("Our zero didn't catch, returned: "+boardArrayDown[currentMoveStartPoint[1]]);
          return boardArrayDown[currentMoveStartPoint[1]];
        }
      }
      //var x = xFunc();
      var x = boardArrayDown[currentMoveStartPoint[0]];
      //console.log("this array's length is: "+ x.length);
      console.log("which is weird because the array is: "+x) ///return the proper array
      console.log(x);
      var nextIdFun = function() {
        if(thisMoveDirection == "south"){
          for(j=1; j < x.length+2; j++) {

            if((x[currentMoveStartPoint[1]+j]/x[currentMoveStartPoint[1]+j]) === 1) {
              console.log('got a real number');
              return x[currentMoveStartPoint[1]+j];
            } else if ((x[currentMoveStartPoint[1]+j]/x[currentMoveStartPoint[1]+j]) === null){
              console.log("nada");///////////////////////////////////////left ehre
            } else if(x[currentMoveStartPoint[1]+j] === 0){
              console.log('looks like it was a zero');
              return 0;
            } else {
              console.log("we're outta here");
            }
          }
        } else if(thisMoveDirection == "north") {
          for(j=1; j < x.length+1; j++) {
            if((x[currentMoveStartPoint[1]-j]/x[currentMoveStartPoint[1]-j]) === 1) {
              return x[currentMoveStartPoint[1]-j];
            } else if ((x[currentMoveStartPoint[1]-j]/x[currentMoveStartPoint[1]-j]) === null){
              console.log("nada");
            } else if(x[currentMoveStartPoint[1]-1] == 0){
              return 0;
            } else {
              console.log("we're outta here");
            }
          }
        } else {
          console.log("else!!!");
        }
        //ideal place for cutoff switch
      }
      var nextId = nextIdFun(); ////returns ID of next north/south
      console.log("we found the id! "+nextId);

      if(nextId/nextId == 1 || nextId < 1) {
      console.log("we got a bumper up ahead");
      } else {
        console.log("road is totally barren, we're going for the win!!!");
        i=11;
        if(thisMoveDirection == "south"){
          movesMargin.push(2000);

        } else {
          movesMargin.push(-2000);
        }
        console.log("The end of this array should be 10000: " + movesMargin)
        return movesMargin;
      }
      ////---finish finding ID of target, begin finding class
      var targetClass = document.getElementById(nextId).className.split(' ').reverse()[0]; //returns class of target
      console.log('next element is: '+targetClass);
      ///---finish finding id of target, begin finding next move's direction
      var nextDirectionFun = function() {
        if(thisMoveDirection == "south") {
          if(targetClass == "bounceForward") {
            return "west";
          } else if(targetClass == "bounceBack") {
            return "east";
          } else {
            console.log("no direction");
          }
        }if(thisMoveDirection == "north") {
          if(targetClass == "bounceForward") {
            return "east";
          } else if(targetClass == "bounceBack") {
            return "west";
          } else {
            console.log("no direction");
          }
        }
      }
      var nextDirection = nextDirectionFun(); ////returns next direction
      console.log("next direction is " + nextDirection);
      /////end finding direction, start finding target point

      var nextPointYFun = function() {
         if(nextId < 5) {
           console.log('singles or 0, so our next y wil be: '+0);
           return 0;

         } else {
           console.log("This number should be greater than 0");
          return ((nextId - nextId%5)/5);
         }
      }
      var nextPointY = nextPointYFun();
      console.log("the next row is: "+nextPointY);
      var nextPointX = (nextId%5);/////!!!
      console.log("our next column is: "+nextPointX);
      var nextPoint = [nextPointX, nextPointY]; //returns [x,y] of next move
      console.log("the next point should be: " + nextPoint);

      var distanceSpacesFun = function() {
        if(thisMoveDirection == "south") {
          return nextPoint[1] - currentMoveStartPoint[1];
        } else if(thisMoveDirection == "north") {
          return (currentMoveStartPoint[1] - nextPoint[1])*-1;
        } else {
          console.log("what the hell?")
        }
      }
      var distanceSpaces = distanceSpacesFun();
      console.log("the distance to the next target is: "+distanceSpaces);
      var distancePixels = distanceSpaces*104;
      var nextMoveMargin = 208 + (nextPoint[1]*104);
      moves.push(distancePixels);
      movesMargin.push(nextMoveMargin);
      console.log('distance to next point is: '+distancePixels);
      currentMoveStartPoint = nextPoint;
      console.log("we're feeding this position to next move: "+currentMoveStartPoint);
      thisMoveDirection = nextDirection;
      console.log("feeding this direction, too: "+thisMoveDirection);
      console.log("our moves so far: "+moves);
      console.log("our moves margins are: "+movesMargin);

      console.log("ONTO MOVE NUMBER "+ (i+1));

    } else if(i%2 === 1){
      console.log("START TURN : "+i);
      console.log("move should go " +thisMoveDirection+ "and start at: "+ currentMoveStartPoint);

      var x = boardArrayAcross[currentMoveStartPoint[1]]; ///at start, this is undefined because currentMovestrtPt[1] is -1, and not accessible in array
      console.log(x);
      var nextIdFun = function() {
        if(thisMoveDirection == "east"){
          for(j=1; j < x.length+1; j++) {
            if((x[currentMoveStartPoint[0]+j]/x[currentMoveStartPoint[0]+j]) === 1) {
              return x[currentMoveStartPoint[0]+j];
            } else if ((x[currentMoveStartPoint[0]+j]/x[currentMoveStartPoint[0]+j]) === null){
              console.log("nada");
            } else if((x.length ===1 && x[0] == 0)){
              return 0;
            }else {
              console.log("We're outta here!");
            }
          }
        } else if(thisMoveDirection == "west") {
          for(j=1; j < x.length+1; j++) {
            if((x[currentMoveStartPoint[0]-j]/x[currentMoveStartPoint[0]-j]) === 1) {
              return x[currentMoveStartPoint[0]-j];
            } else if ((x[currentMoveStartPoint[0]-j]/x[currentMoveStartPoint[0]-j]) === null){
              console.log("nada");
            } else if(x[0] == 0 && currentMoveStartPoint[0] !== 0){
              return 0;
            }else {
              console.log("we're outta here");
            }
          }
          }
        }

      var nextId = nextIdFun(); ////returns ID of next north/south
      console.log("next Id is " + nextId);
      if(nextId/nextId == 1 || nextId == 0) {
      console.log("we got a bumper up ahead");
      } else {
        console.log("road is totally barren, we're going for the win!!!");
        i=11;
        if(thisMoveDirection == "east"){
          movesMargin.push(2000);
        } else {///this is to go west
          movesMargin.push(-2000);
        }
        console.log("The end of this array should be 2000: " + movesMargin)
        return movesMargin;
      }
      ////---finish finding ID of target, begin finding class
      var targetClass = document.getElementById(nextId).className.split(' ').reverse()[0]; //returns class of target
      console.log('next element is: '+targetClass);
      ///---finish finding id of target, begin finding next move's direction
      var nextDirectionFun = function() {
        if(thisMoveDirection == "east") {
          if(targetClass == "bounceForward") {
            return "north";
          } else if(targetClass == "bounceBack") {
            return "south";
          } else {
            console.log("no direction");
          }
        }if(thisMoveDirection == "west") {
          if(targetClass == "bounceForward") {
            return "south";
          } else if(targetClass == "bounceBack") {
            return "north";
          } else {
            console.log("no direction");
          }
        }
      }
      var nextDirection = nextDirectionFun(); ////returns next direction
      console.log("the next direction should be: "+nextDirection);
      /////end finding direction, start finding target point

      var nextPointYFun = function() {
         if(nextId%nextId == nextId || nextId === 5) {
           return 1;
         } else {
          return ((nextId - nextId%5)/5);
         }
      }
      var nextPointY = nextPointYFun();
      var nextPointX = nextId%5;
      var nextPoint = [nextPointX, nextPointY]; //returns [x,y] of next move
      console.log("the next point should be: " + nextPoint);
      /////end finding next point coordinates, begin finding direction
      var distanceSpacesFun = function() {
        if(thisMoveDirection == "west") {
          console.log()
          return nextPoint[0] - currentMoveStartPoint[0];
        } else if(thisMoveDirection == "east") {
          return (currentMoveStartPoint[0] - nextPoint[0])*(-1);
        } else {
          console.log("what the hell?");
        }
      }
      var distanceSpaces = distanceSpacesFun();
      console.log("the distance to the next target is: "+distanceSpaces);
      var distancePixels = distanceSpaces*104;
      moves.push(distancePixels);
      var nextMoveMargin = 354 + (nextPoint[0]*104);
      movesMargin.push(nextMoveMargin);
      console.log('distance to next point is: '+distancePixels);
      ///I think I've found all my down info
      currentMoveStartPoint = nextPoint;
      console.log("we're feeding this position to next move: "+currentMoveStartPoint);
      thisMoveDirection = nextDirection;
      console.log("feeding this direction, too: "+thisMoveDirection);
      console.log("our moves so far: "+moves);
      console.log("our moves margins are: "+movesMargin);
      console.log("ONTO MOVE NUMBER "+ parseInt(i)+2);


    } else {
      /// i  timer is broken
      console.log("something might be broken");
    }

    ////end for looop
  }

    return movesMargin;
  }


//---------------------End Moves

//////deterimining where win is ----------
function winRegister() {
  if(thisMoveDirection == "north") {
    switch (currentMoveStartPoint[0]) {
      case 0:
        winCircle = "#a";
        $(winCircle).addClass('won');
        actualWin = "a";
        break;
      case 1:
        winCircle = "#b";
        $(winCircle).addClass('won');
        actualWin = "b";
        break;
      case 2:
        winCircle = "#c";
        $(winCircle).addClass('won');
        actualWin = "c";
        break;
      case 3:
        winCircle = "#d";
        $(winCircle).addClass('won');
        actualWin = "d";
        break;
      case 4:
        winCircle = "#e";
        $(winCircle).addClass('won');
        actualWin = "e";
        break;

      default:
      console.log("something got messd up");

    }
  }else if(thisMoveDirection == "south") {
      switch (currentMoveStartPoint[0]) {
        case 0:
          winCircle = "#p";
          $(winCircle).addClass('won');
          actualWin = "p";
          break;
        case 1:
          winCircle = "#q";
          $(winCircle).addClass('won');
          actualWin = "q";
          break;
        case 2:
          winCircle = "#r";
          $(winCircle).addClass('won');
          actualWin = "r";
          break;
        case 3:
          winCircle = "#s";
          $(winCircle).addClass('won');
          actualWin = "s";
          break;
        case 4:
          winCircle = "#t";
          $(winCircle).addClass('won');
          actualWin = "t";
          break;

        default:
        console.log("something got messd up");

      }
    } else if(thisMoveDirection == "east") {
        switch (currentMoveStartPoint[1]) {
          case 0:
            winCircle = "#g";
            $(winCircle).addClass('won');
            actualWin = "g";
            break;
          case 1:
            winCircle = "#i";
            $(winCircle).addClass('won');
            actualWin = "i";
            break;
          case 2:
            winCircle = "#k";
            $(winCircle).addClass('won');
            actualWin = "k";
            break;
          case 3:
            winCircle = "#m";
            $(winCircle).addClass('won');
            actualWin = "m";
            break;
          case 4:
            winCircle = "#o";
            $(winCircle).addClass('won');
            actualWin = "o";
            break;

          default:
          console.log("something got messd up");

        }
      } else if(thisMoveDirection == "west") {
          switch (currentMoveStartPoint[1]) {
            case 0:
              winCircle = "#f";
              $(winCircle).addClass('won');
              actualWin = "f";
              break;
            case 1:
              winCircle = "#h";
              $(winCircle).addClass('won');
              actualWin = "h";
              break;
            case 2:
              winCircle = "#j";
              $(winCircle).addClass('won');
              actualWin = "j";
              break;
            case 3:
              winCircle = "#l";
              $(winCircle).addClass('won');
              actualWin = "l";
              break;
            case 4:
              winCircle = "#n";
              $(winCircle).addClass('won');
              actualWin = "n";
              break;

            default:
            console.log("something got messd up");

          }
        } else {
      console.log("didn't win south");
    }
    if(playerGuess == actualWin) {
      $('#announce').addClass('announceWon');
      $('#playAgain').addClass('playAgain');
    } else {
      $('#announce').addClass('announceLost');
      $('#playAgain').addClass('playAgain');
    }
}

//-------------------

///------------ Player guesses winning square -----

function playerSelection() {
  var x = this.id;
  console.log("you chose: "+x);
  playerGuess = x;
  $(this).addClass('selected');
}

function flightController() {
  var flightPath = calcMoves();//this is an array of all moves performed
  console.log(flightPath);
  $('.ball').animate({marginTop: flightPath[0]},400, function(){
    $(this).animate({marginLeft: flightPath[1]}, 300, function() {
      $(this).animate({marginTop: flightPath[2]}, 300, function() {
        $(this).animate({marginLeft: flightPath[3]}, 300,function() {
        $(this).animate({marginTop: flightPath[4]}, 300, function() {
        $(this).animate({marginLeft: flightPath[5]}, 300, function() {
        $(this).animate({marginTop: flightPath[6]}, 300, function() {
        $(this).animate({marginLeft: flightPath[7]}, 300, function() {
        $(this).animate({marginTop: flightPath[8]}, 300, function() {
        $(this).animate({marginLeft: flightPath[9]}, 300,function() {
        $(this).animate({marginTop: flightPath[10]}, 300, function() {
        $(this).animate({marginLeft: flightPath[11]}, 300, function() {
        $(this).animate({marginTop: flightPath[12]}, 300, function() {
        $(this).animate({marginLeft: flightPath[13]}, 300, function() {
        $(this).animate({marginTop: flightPath[14]}, 300, winRegister(300));
        console.log('the win was: '+actualWin);
        console.log("player 1 guess was: "+ playerGuess);

      })})})})})})})})})})})})
    })});
  }console.log("this should be our lasst k before launch, if we get that far");

})
  //clicks, events, and calls


  $('.win').on('click', playerSelection);

  $('.win').on('click', flightController);
  ballMargin();

  $('#playAgain').on('click', function() {
    location.reload()

  }
  playGame();
//end of jquery
})
