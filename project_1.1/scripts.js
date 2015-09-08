$(function() {

var counter = 0;


var boardArrayDown = [[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]];

var boardArrayAcross = [[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]];

var topOrSide = (Math.floor(Math.random()*1
)); //for initial ball placement on top or side;

function marginAmount() {
  var zeroToFour = Math.floor((Math.random()*5)+1);
  return zeroToFour;
}

var acrossStart = parseInt(marginAmount());
console.log("the starting row is: " + acrossStart); //The ball starting row (1 - 5)
//note: column number is only thing not on 0-4 spectrum

function ballMargin() {
  var pixelsMoved  = (acrossStart)*104;
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


///Start Code

function dropEvent() {
  var squareId = parseInt(this.id);
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
    default: console.log('nope');
  }
  console.log(this);
  console.log("our start point shoudl be: "+ (acrossStart-1));
  return this;
}


/////begin Moves

function holyShit() {
  var moves = [];
  var movesMargin = [];
  ///move one calculations (that go into our presets) go here
  var startX = acrossStart-1;
  console.log(startX);
  var startY = -1;
  console.log("starting point will be ["+startX+','+startY+']');
  var currentMoveStartPoint = [startX, startY];
  var thisMoveDirection = "south";
  for (var i = 0; i < 10; i++) {
    /*
  var leftMargin = 250 + ((acrossStart-1)*104);
  var topMargin = 0;
  console.log("left margin is: "+ leftMargin);
  console.log("top margin is: "+ topMargin);
*/
    if(i%2 === 0) { ///start the engine

      ///downs and ups go here
      var x = boardArrayDown[currentMoveStartPoint[0]]; ///return the proper array
      console.log(x);
      var nextIdFun = function() {
        if(thisMoveDirection == "south"){
          for(j=1; j < x.length+1; j++) {
            if((x[currentMoveStartPoint[1]+j]/x[currentMoveStartPoint[1]+j]) === 1) {
              return x[currentMoveStartPoint[1]+j];
            } else if ((x[currentMoveStartPoint[1]+j]/x[currentMoveStartPoint[1]+j]) === null){
              console.log("nada");
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
            } else {
              console.log("we're outta here");
            }
          }
        }
        //ideal place for cutoff switch
      }
      var nextId = nextIdFun(); ////returns ID of next north/south
      console.log(nextId);
      if(nextId/nextId == 1) {
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
      console.log(nextDirection);
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
      var nextMoveMargin = 104 + (nextPoint[1]*104);
      moves.push(distancePixels);
      movesMargin.push(nextMoveMargin);
      console.log('distance to next point is: '+distancePixels);
      ///I think I've found all my down info
      currentMoveStartPoint = nextPoint;
      console.log("we're feeding this position to next move: "+currentMoveStartPoint);
      thisMoveDirection = nextDirection;
      console.log("feeding this direction, too: "+thisMoveDirection);
      console.log("our moves so far: "+moves);
      console.log("our moves margins are: "+movesMargin);

      console.log("ONTO MOVE NUMBER "+ (i+1));

    } else if(i%2 === 1){
      console.log("move should go " +thisMoveDirection+ "and start at: "+ currentMoveStartPoint);
      //left and right goes here
      var x = boardArrayAcross[currentMoveStartPoint[1]]; ///return the proper array
      console.log(x);
      var nextIdFun = function() {
        if(thisMoveDirection == "east"){
          for(j=1; j < x.length+1; j++) {
            if((x[currentMoveStartPoint[0]+j]/x[currentMoveStartPoint[0]+j]) === 1) {
              return x[currentMoveStartPoint[0]+j];
            } else if ((x[currentMoveStartPoint[0]+j]/x[currentMoveStartPoint[0]+j]) === null){
              console.log("nada");
            } else {
              console.log("We're outta here!");
            }
          }
        } else if(thisMoveDirection == "west") {
          for(j=1; j < x.length+1; j++) {
            if((x[currentMoveStartPoint[0]-j]/x[currentMoveStartPoint[0]-j]) === 1) {
              return x[currentMoveStartPoint[0]-j];
            } else if ((x[currentMoveStartPoint[0]-j]/x[currentMoveStartPoint[0]-j]) === null){
              console.log("nada");
            } else {
              console.log("we're outta here");
            }
          }
        }
        //ideal place for cutoff switch

      }
      var nextId = nextIdFun(); ////returns ID of next north/south
      console.log(nextId);
      // if(nextId/nextId == 1) {
      //   console.log("we got a bumper up ahead");
      // } else {
      //   console.log("road is totally barren, we're going for the win!!!");
      //   i=11;
      //   return movesMargin;
      // }
      if(nextId/nextId == 1) {
      console.log("we got a bumper up ahead");
      } else {
        console.log("road is totally barren, we're going for the win!!!");
        i=11;
        if(thisMoveDirection == "east"){
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
      console.log(nextDirection);
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
          return nextPoint[0] - currentMoveStartPoint[0];
        } else if(thisMoveDirection == "east") {
          return (currentMoveStartPoint[0] - nextPoint[0])*-1;
        } else {
          console.log("what the hell?")
        }
      }
      var distanceSpaces = distanceSpacesFun();
      console.log("the distance to the next target is: "+distanceSpaces);
      var distancePixels = distanceSpaces*104;
      moves.push(distancePixels);
      var nextMoveMargin = 250 + (nextPoint[0]*104);
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
  ////final calls to flight controller go here

  return movesMargin;
}


//---------------------End Moves

function flightController() {
  var holyFuck = holyShit();//this is an array of all moves performed
  console.log(holyFuck);
  $('.ball').animate({marginTop: holyFuck[0]},400, function(){
    $(this).animate({marginLeft: holyFuck[1]}, 300, function() {
      $(this).animate({marginTop: holyFuck[2]}, 300, function() {
        $(this).animate({marginLeft: holyFuck[3]}, 300,function() {
        $(this).animate({marginTop: holyFuck[4]}, 300, function() {
        $(this).animate({marginLeft: holyFuck[5]}, 300, function() {
        $(this).animate({marginTop: holyFuck[6]}, 300, function() {
        $(this).animate({marginLeft: holyFuck[7]}, 300);
      })})})})})
    })});
  }

  //clicks, events, and calls

  $('.ball').on('click', flightController);
  ballMargin();

//end of jquery
})
