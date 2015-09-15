$(document).ready(function(){
  var showPhone = "";
  //prevent the default behavior of the form which
  //is to submit.

  $('.deleteButton').on('click',function(event){
    var button = this;
    var form = $(button).parent(".deleteForm");

    event.preventDefault(); //prevent form from submiting
    var chooseToDelete = confirm("are you sure?");//true or false

    if (chooseToDelete) {
      form.submit();
    }
  });


  $('#delete').on('click', function(){
    $('.deletethang').css({"margin-left": "0px"})
  })

  $('.see-details').on('click', function(event){
    console.log(event.target.id);
    showPhone = (event.target.id);
    phoneArray = showPhone.split(' ');
    console.log(phoneArray);
    console.log("Name should be: "+phoneArray[1]);
    console.log("Color should be: "+phoneArray[0]);
    $('#showName').text(phoneArray[1]);
    $('#showColor').text(phoneArray[0]);

    //all container movements
    $('.all-phones').css('margin-left', "-2000px");
    $('.show').css('margin-left', "auto");
    $('.show').css('margin-right', "auto");
    $('.show').css('margin-top', "-240px");
  })

  $('.backShow').on('click', function(event){
    $('.all-phones').css('margin-left', "0px");
    $('.show').css('margin-left', "-2000px");
    $('.show').css('margin-right', "0");
  })

  $('.newph').on("click", function(event){
    $('.all-phones').css('margin-left', "-2000px");
    $('.newPhone').css('margin-left', "auto")
    $('.newPhone').css('margin-right', "auto")
  })

  $('.newForm').on('submit', function(event){
    console.log(event.target)
    console.log('submiting');
    event.preventDefault();
    $.ajax({
      method: 'post'
      , data: JSON.stringify({name: event.target.name.value, color: event.target.color.value})
      , contentType: "application/json; charset=UTF-8"
      , dataType : "json"
      , url: 'http://localhost:3000/phones'
      , success: function(data) {
        console.log("Data is: ", data);
        $('ul').append("<li>Phone: "+event.target.name.value+"<li>")
        console.log('made ');
        $('ul').append("<li>Color: "+event.target.color.value+"<li>")
        $('ul').append("<li><a href='/phones/"+data._id+"'>Edit </a>| </a><div id='"+data.color+" "+data.name+"' class='see-details'>See Details</div></li>");
        $('.all-phones').css('margin-left', '0px');
        $('.newPhone').css('margin-left', '-2000px');
        console.log('made ');
      }
    })
  })
});
