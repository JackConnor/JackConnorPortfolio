Projects = new Mongo.Collection('projects');

// if (Meteor.isServer){
//   Meteor.startup(function(){
//     process.env.MONGO_URL=' mongodb://jackconnor:Skateboard1@ds051913.mongolab.com:51913/jackconnorportfoliodb'
//   })
// }

if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault('introCounter', true);
  Session.setDefault('numero', true);
  Session.setDefault('singleCounter', false);
  Session.setDefault('singlePhotosArray', []);
  Session.setDefault('photoMarginLeft', 0);
  Session.setDefault('aboutMeCounter', false);
  Session.setDefault('currentProject', null);
  Session.setDefault('currentCategory', null);
  Session.setDefault('photoCounter', 0);

  Template.navbar.helpers({

  });

  Template.navbar.events({

  })

  Template.aboutMe.events({
    'click .cat': function(evt){
      //begin category calc
      console.log(evt.target);
      console.log(evt.target.parentNode.parentNode);
      console.log(evt.target.parentNode.parentNode.id);
      if(evt.target.id){
        Session.set('currentCategory', evt.target.id)
        console.log(evt.target);
        // $('.category').css('opacity', .2);
        // document.querySelector(".techTitle").style.opacity = 1;
      } else {
        console.log(evt.target.parentNode.parentNode.id);
        // $('.category').each(function(){
        //   $(this).css('opacity', .2);
        // }
        Session.set('currentCategory', evt.target.parentNode.parentNode.id);

        // document.querySelector(".techTitle").style.opacity = 1;
      }
      console.log(Session.get('currentCategory'));
      Session.set('aboutMeCounter', !Session.get('aboutMeCounter'));
    },
    'mouseenter .category': function(evt){
      console.log(evt);
      console.log(evt.currentTarget.parentNode.parentNode.childNodes[3]);
      var textTarget = evt.currentTarget.parentNode.parentNode.childNodes[3];
      console.log(textTarget);
      textTarget.style.opacity =  1;
    },
    'mouseleave .category': function(){
      $('.techTitle').css('opacity', 0);
    }
  })

  Template.aboutMe.helpers({
    catProjects: function(){
      return Session.get('catArray');
    }
  })

  Template.catProject.events({
    'click .catProj': function(event){
        var filterCategory = Projects.find({technologies: {$regex: /\bruby\b/}});
        //database call for single project
        var objId = event.target.id;
        console.log(objId);
        var currentProj = Projects.findOne({"name":objId});
        Session.set('currentProject', currentProj);
        console.log(currentProj);
        console.log(currentProj.name);
        if (!Session.get('singleCounter')) {
          Session.set('singleCounter', !Session.get('singleCounter'));
        }
        Session.set('aboutMeCounter', !Session.get('aboutMeCounter'));
    }
  })


  Template.catProject.helpers({
    categoryProjects: function(){
          var category = Session.get("currentCategory");
          if(category == "ruby"){
            var filterCategory = Projects.find({technologies: {$regex: /\bruby\b/}}, {limit: 3});
          } else if(category == "ux") {
            var filterCategory = Projects.find({technologies: {$regex: /\bux\b/}}, {limit: 3});
          } else if(category == "javascript") {
            var filterCategory = Projects.find({technologies: {$regex: /\bjavascript\b/}}, {limit: 3});
          }
          var returnCat = filterCategory
          return returnCat;
        }
    //end of template
  })

  Template.projects.events({
    'click .projects': function(evt){
      console.log('working?');
      console.log(evt);
      // Session.set('singleCounter', !Session.get('singleCounter'));
      if(evt.target.id[0] == "O") {
        var id = evt.target.id;
        var dataCall = Projects.findOne(id);
        var currProj = {allData: dataCall, media: dataCall.media};
        Session.set('currentProject', currProj);
        Session.set('singlePhotosArray', currProj.media)
        Session.set('currentPhoto', currProj.media[0].url);
        console.log(Session.get('currentPhoto'));

      }else if(evt.target.id){
        var name = evt.target.id;
        var dataCall = Projects.findOne({"name": name});
        var currProj = {allData: dataCall, media: dataCall.media};
        Session.set('singlePhotosArray', currProj.media)
        Session.set('currentProject', currProj);
        Session.set('currentPhoto', currProj.media[0].url);
        console.log(Session.get('currentPhoto'));


      }else{
        var name = $(evt.target);
        var dataCall = Projects.findOne({"name": name.context.innerText});
        var currProj = {allData: dataCall, media: dataCall.media};
        Session.set('currentPhoto', currProj.media[0].url);
        Session.set('singlePhotosArray', currProj.media)
        Session.set('currentProject', currProj);
        console.log(Session.get('currentPhoto').url);

      }
      Session.set('singleCounter', !Session.get('singleCounter'));
    },
    'mouseenter .projectPhoto':function(evt){
      var target = $(evt.target);
      target.animate({
        "opacity": .6
      }, 300);
      var textBlurb = $(target.parent().children()[1]);
      textBlurb.animate({
        width: "290px",
        fontSize: "18px"
      })
    },
    'mouseleave .projectPhoto': function(evt){
      var target = $(evt.target);
      target.animate({
        opacity: 1
      }, 100);
      var textBlurb = $(target.parent().children()[1]);
      textBlurb.animate({
        width: "0px",
        fontSize: "0px"
      })
    }
  })

  Template.projects.helpers({
    projectList: function(){
      var ps = Projects.find();
      console.log(ps);
      return ps;
    },
    singleProjectDetails: function(){
      //counter stuff
      if(Session.get('singleCounter')) {
        var proj = Session.get('currentProject');
        return proj;
      } else {
        return false;
      }
    }
  })

  Template.singleProject.events({
    'click #backAll': function(){
      Session.set('singleCounter', !Session.get('singleCounter'));
    },
    'click #morePhotos': function(evt){
      console.log(count);
      var count = Session.get('photoCounter');
      if  (count >= 4) {
        Session.set('photoCounter', 4);
      } else if(count <= 0){
        Session.set('photoCounter', 1);
        var count = 1;
        var photos = Session.get('singlePhotosArray');
        console.log(photos);
        var newUrl = photos[count].url;
        Session.set('currentPhoto', newUrl);
        //begin moving the photo holder
        var margin = Session.get('photoMarginLeft');
        var newMargin = (margin - 124);
        $('.thumbHolder').animate({"margin-left": newMargin+"px"});
        Session.set('photoMarginLeft', newMargin);
      } else{
        Session.set('photoCounter', Session.get('photoCounter')+1);
        var newCount = Session.get('photoCounter');
        var photos = Session.get('singlePhotosArray');
        console.log(photos);
        var newUrl = photos[newCount].url;
        Session.set('currentPhoto', newUrl);
        //begin moving the photo holder
        var margin = Session.get('photoMarginLeft');
        var newMargin = (margin - 124);
        $('.thumbHolder').animate({"margin-left": newMargin+"px"});
        Session.set('photoMarginLeft', newMargin);
      }
    },
    'click #backPhotos': function(){
      if  (count >= 4) {
          Session.set('photoCounter', 4);
        } else if(count < 0){
          Session.set('photoCounter', 0);
        } else{
        Session.set('photoCounter', Session.get('photoCounter')-1);
        var count = Session.get('photoCounter');
        var photos = Session.get('singlePhotosArray');
        console.log(photos);
        var newUrl = photos[count].url;
        Session.set('currentPhoto', newUrl)
        var margin = Session.get('photoMarginLeft');
        var newMargin = (margin + 124);
        $('.thumbHolder').animate({"margin-left": newMargin+"px"});
        Session.set('photoMarginLeft', newMargin);
      }
    },

    'mouseenter .currentPhoto': function(){
      $('#backPhotos').css('opacity', 0.3);
      $('#morePhotos').css('opacity', 0.3);
      // $('#backPhotos').css('background-color', "#0B2161");
    },
    'mouseleave .currentPhoto': function(){
      $('#backPhotos').css('opacity', 0.1);
      $('#morePhotos').css('opacity', 0.1);
    },
    "mouseenter #backPhotos": function(){
      $('#backPhotos').css('opacity', 0.7);
      $('#morePhotos').css('opacity', 0.3);
    },
    "mouseleave #backPhotos": function(){
      $('#backPhotos').css('opacity', 0.1);
      $('#morePhotos').css('opacity', 0.1);

    },
    "mouseenter #morePhotos": function(){
      $('#morePhotos').css('opacity', 0.7);
      $('#backPhotos').css('opacity', 0.3);

    },
    "mouseleave #morePhotos": function(){
      $('#morePhotos').css('opacity', 0.1);
      $('#backPhotos').css('opacity', 0.1);
    },
    'mouseenter #titleTitle':function(){
      $('#titleTitle').animate({'fontSize': '62px'})
    },
    'mouseleave #titleTitle': function(){
      $('#titleTitle').animate({'fontSize': '56px'})
    },
    'mouseenter #challenge': function(){
      $('#challengeTitle').animate({'fontSize': "36px"})
    },
    'mouseleave #challenge': function(){
      $('#challengeTitle').animate({'fontSize': "30px"})
    },
    'mouseenter #solution': function(){
      $('#solutionTitle').animate({'fontSize': "36px"})
    },
    'mouseleave #solution': function(){
      $('#solutionTitle').animate({'fontSize': "30px"})
    }
  })

  Template.singleProject.helpers({
    data: function(){
      // Session.set('singleCounter', !Session.get('singleCounter'));
      return Session.get('currentProject');
      // return Session.get('singlePhotosArray');
    },
    photoThumbs: function(){
      var photoArray = Session.get('singlePhotosArray');
      return {first: photoArray[0], second: photoArray[1], third: photoArray[2], fourth: photoArray[3], fifth: photoArray[4]}
    },
    media: function(){
      var photo = Session.get('currentPhoto');
      return photo;
      // return {first: photo[0].url, second: photo[1].url, third: photo[2].url, fourth: photo[3].url, video: photo[4].url};
    },
    members: function(){
      var team_members = [Session.get('currentProject').members, {name:"jack"}]
      return team_members;
    }
  })

  Template.intro.events({
    'click .introContainer': function(){
      Session.set('introCounter', !Session.get('introCounter'));
    },
    'mouseover .introContainer': function(){
      // var x = $('.clickToEnter');
      var x = $('.title');
       x.animate({opacity: .8}, 1000);
      setTimeout(function(){
        x.animate({opacity: .25}, 3000);
      })
    }
  })

  Template.introHolder.helpers({
    counter: function(){
      return Session.get('introCounter')
    }
  })

  Template.bodyHolder.helpers({
    numero: function(){
      return Session.get('numero');
    },
    toggle: function(){
      return Session.get('aboutMeCounter');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
