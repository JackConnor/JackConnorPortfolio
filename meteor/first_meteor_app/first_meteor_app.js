
Books = new Mongo.Collection('books');
Balls = new Mongo.Collection('balls');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });


  Template.booksList.helpers({
    allBooks: function(){
      return Books.find({})
    }
  });

  Template.insertBook.events({
    'click button': function () {
      // increment the counter when button is clicked
      var newBook = $(".bookTitle").val();
      console.log(newBook);
      Books.insert({name: newBook})
    }
  });

  Template.balls.events({
    'input #moveBall': function(evt, tmpl){
      console.log(evt);
      console.log(tmpl);
      var cir = $('circle');
      console.log(cir);
      Session.set('ballX', $(evt.target).val());
      Balls.update({_id: '3zgEfrDofFnnNmadj'}, {x: $(evt.target).val()})
    }
  })

  Template.balls.helpers({
    ball: function(){
      return Balls.findOne({})
    }
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
