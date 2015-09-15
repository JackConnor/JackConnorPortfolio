console.log('testing')

angular.module('booksApp',[])
    .controller('booksController', booksController);



function booksController($http){
    var self = this;
    self.booksList = [];
    self.selectedBook = null;
    self.editing = false;

    self.selectBook = function(book) {
      self.selectedBook = book;
    }
    //this.books = [{name:'marimer'}, {name:'moby dick'}, {name:"max payne"}];
    $http({
        method: 'get'
        ,url: '/books'
    }).then(function(data){
        console.log(data);
        self.booksList = data.data;
    }), function(err){
        console.log(err);
    }

    self.createGenericBook = function(name){
        //var title = document.querySelector("#bookTitle").value;
        $http({
            method: 'post'
            ,url: '/books/'
            ,data: {name: name}
        }).then(function(data){
            console.log('book created');
            console.log(data.data);
            self.booksList.push(data);
        }), function(err){
            console.log(err)
        }
    }

    self.deleteBook = function(book){
        //var bookL = document.getElementById(book._id);
        //console.log(bookL);
        //
        //bookL.style.height = "0px";
        //bookL.innerHtml = "";

        console.log(this);
        console.log(book);
        $http({
            method: 'delete'
            ,url: "/books/"+book._id
        }).then(function(data){
            console.log(data);
            var bookIndex = self.booksList.indexOf(book);
            console.log(bookIndex);
            self.booksList.splice(bookIndex, 1);
        }), function(err){
            console.log(err);
        }

    }

    self.editBook = function(book) {
        self.editing = true;
        // var newName = document.querySelector
        console.log(self.editing);
        console.log(book);
        $http({
            method: "patch"
            , url: '/books/' + book._id
            , data: {name: book.name}
        }).then(function (data) {
            console.log(data);
        }), function (err) {
            console.log(err);
        }
    }


}
