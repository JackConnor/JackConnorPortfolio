
  angular
    .module('myClassApp', [])
    .controller('playgroundController', playgroundController)

    function playgroundController(){
      this.color = '';
      this.makeItRed = function(){
        console.log('lets make it red');
        this.color = 'reddish';
      }
      this.makeItGreen = function(){
        this.color = 'greenish'
      }
      this.makeItBlue = function(){
        this.color = 'bluish'
      }
      this.makeBig = function(){
        this.fontSizeClass = 'biggish';
      }
      this.makeSmall = function(){
        this.fontSizeClass = 'smallish';
      }
      this.markAsDone = function(){
        this.status = !this.status
      }
    }

    //when anguar module is called with one arg, then we retrieve this module
