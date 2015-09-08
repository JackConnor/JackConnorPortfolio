$(function(){
  console.log("whatup")

  //create empty list to hold items
  var theList = [];

  var title = $('#box')

  var h1 = $('h1')

  var listTemplate = _.template("you have <%= count %> items left")

  $('#additem').on('click', function(){
    console.log(title.val());
    $('#first').append("<li class='firstli'><h1>"+(title.val())+"</h1>check to mark done:<input type='checkbox' class='check'>delete this item: <div class='delete'>X<div></li>");
    $('#box2').val(title.val());
    var check = $('.check');
    check.on('change', function(){
      console.log(this.parentNode);
      var el = $(this.parentNode);
      if(el)
      el.toggleClass('secondli');
    })
    var deleter = $('.delete');
    deleter.on('click', function(){
      var parent = $(this.parentNode);
      console.log("title should be: "+parent.find('h1').text());
      var theTitle = parent.find('h1').text();
      var itemToDelete = _.where({title: theTitle});
      console.log(itemToDelete[0]);
      console.log(parent.find('h1').text())
      var x = _.each(theList, function(el){
        console.log("title of deleted item is: "+el.title);
      })
      var filter = _.filter(theList, function(el){
        return el.title !== parent.find('h1').text();
      })
      console.log("trees include: "+_.pluck(filter, 'title'));
      console.log(x);
      console.log("new list is "+_.pluck(theList, 'title'));
      theList = filter;
      h1.html(listTemplate({count: theList.length}))
      parent.hide(500);
    })
    theList.push({title: title.val(), completed: "false"});
    console.log(_.pluck(theList, 'title'));
    console.log(theList);
    h1.html(listTemplate({count: theList.length}))
  })





  //
  // var ul = $('#first');
  // var sevensUl = $("#sevenMultiplesList")
  //
  //
  // var myNums = [4,5,6,3 ,6, 7, 7, 9, 8, 9];
  //
  //
  // function attach(num){
  //   sevensUl.append('<li>'+num+'</li>')
  // }
  //
  // function attachSevens(num) {
  //   console.log(num);
  //   sevensUl.append('<li>HI</li>')
  // }
  //
  //
  // var sevenMultiples = _.filter(myNums, function(num){
  //   return num % 7 == 0;
  // });
  //
  //
  // _.each(sevenMultiples, attachSevens);
  // _.each(sevenMultiples, attach);
  //
  // console.log(sevenMultiples)
  //
  //
  //
  //
  // var x = [{name: "giacomo", age: 30}, {name: "simmm", age: 50}, {name: "jeff", age: 55}]
  //
  // var y = _.pluck([{name: "giacomo", age: 30}, {name: "simmm", age: 50}, {name: "jeff", age: 55}], 'name')
  //
  // console.log(y)


})
