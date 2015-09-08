
$(

  $('#btn').on('click', function(){
    var obj = $('#textbox').val();
    console.log(obj);
    $.ajax({
        method: "get"
        ,url: 'https://pixabay.com/api/?username=jackconnor830&key=dbcf9fdb7a20f91191a4&q='+obj+'&image_type=photo'
        ,success: function(returnedData){
          console.log(returnedData);
          console.log(returnedData.hits[0]);
          $('.picture').append('<img src='+returnedData.hits[0].webformatURL+'>')

        }
    })
  })
)

console.log('connected bitches')
