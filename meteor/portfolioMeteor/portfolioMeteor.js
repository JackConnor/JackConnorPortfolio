

Projects = new Mongo.Collection('projects');

if (Meteor.isServer){
  process.env.MONGO_URL=' mongodb://jackconnor:Skateboard1@ds051913.mongolab.com:51913/jackconnorportfoliodb'
}

if (Meteor.isClient) {

  Session.setDefault('introCounter', true);
  Session.setDefault('numero', true);
  Session.setDefault('singleCounter', false);
  Session.setDefault('singlePhotosArray', []);
  Session.setDefault('photoMarginLeft', 0);
  Session.setDefault('aboutMeCounter', false);
  Session.setDefault('currentProject', null);
  Session.setDefault('currentCategory', null);
  Session.setDefault('photoCounter', 0);
  Session.setDefault('contactSwitch', false);

  Template.navbar.helpers({

  });

  Template.navbar.events({
    'click .siteTitle': function(){
      Session.set('singleCounter', false);
      Session.set('numero', true);
      Session.set('contactSwitch', false);
    },
    'mouseenter .siteTitle': function(){
      $('#titleName').animate({
        fontSize: "60px",
      })
    },
    'mouseleave .siteTitle': function(){
      $('#titleName').animate({
        fontSize: "56px"
      })
    },
    'click #contact': function(){
      Session.set('singleCounter', false);
      Session.set('numero', false);
      Session.set('contactSwitch', true);
    }
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
      } else {
        console.log(evt.target.parentNode.parentNode.id);
        Session.set('currentCategory', evt.target.parentNode.parentNode.id);
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
      }, 100);
      var textBlurb = $(target.parent().children()[1]);
      textBlurb.animate({
        opacity: .7
        // width: "290px",
        // fontSize: "18px"
      }, 200)
    },
    'mouseleave .projectPhoto': function(evt){
      var target = $(evt.target);
      target.animate({
        opacity: 1
      }, 100);
      var textBlurb = $(target.parent().children()[1]);
      textBlurb.css({
        opacity: 0
      });
      // textBlurb.css(
      //   "fontSize", "0px"
      // )
    },
    'mouseenter .popout': function(evt){
      var textBlurb = $(evt.target);
      textBlurb.css({
        opacity: .7
      });
    },
    'mouseleave .popout': function(evt){
      var textBlurb = $(evt.target);
      textBlurb.css({
        opacity: 0
      });
    }
  })

  Template.projects.helpers({
    projectList: function(){

      var photos = [];
      var combo = [];

      var projects = Projects.find();
      console.log(projects[0]);

      projects.forEach(function(data){
        console.log(data.media[0].url);
        photos.push(data.media[0].url);
      })

      projects.forEach(function(data, photos){
        combo.push({data: data, photo: data.media[0].url})
      })
      return combo;
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
      $('#backPhotos').css('opacity', 0.4);
      $('#morePhotos').css('opacity', 0.4);
      $('.thumbHolder').css('background-color', '#77ECF3')
    },
    'mouseleave .currentPhoto': function(){
      $('#backPhotos').css('opacity', 0.1);
      $('#morePhotos').css('opacity', 0.1);
      $('.thumbHolder').css('background-color', '#92E2E7')

    },
    "mouseenter #backPhotos": function(){
      $('#backPhotos').css('opacity', 0.7);
      $('#morePhotos').css('opacity', 0.3);
      $('.thumbHolder').css('background-color', '#77ECF3')
    },
    "mouseleave #backPhotos": function(){
      $('#backPhotos').css('opacity', 0.1);
      $('#morePhotos').css('opacity', 0.1);
      $('.thumbHolder').css('background-color', '#92E2E7')
    },
    "mouseenter #morePhotos": function(){
      $('#morePhotos').css('opacity', 0.7);
      $('#backPhotos').css('opacity', 0.3);
      $('.thumbHolder').css('background-color', '#77ECF3')
    },
    "mouseleave #morePhotos": function(){
      $('#morePhotos').css('opacity', 0.1);
      $('#backPhotos').css('opacity', 0.1);
      $('.thumbHolder').css('background-color', '#92E2E7')
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
    },
    'mouseenter .github': function(){
      $('#hiddenDesc').css("opacity", 1);
    },
    'mouseleave .github': function(){
      $('#hiddenDesc').css('opacity', 0);
    },
    'mouseenter .live': function(){
      $('#hiddenTitle').css("opacity", 1);
    },
    'mouseleave .live': function(){
      $('#hiddenTitle').css('opacity', 0);
    },
    'mouseenter .descriptionsContainer': function(){
      $('#soWhat').animate({'fontSize': "36px"})
    },
    'mouseleave .descriptionsContainer': function(){
      $('#soWhat').animate({'fontSize': "30px"})
    }
  })

  Template.singleProject.helpers({
    data: function(){
      return Session.get('currentProject');
    },
    photoThumbs: function(){
      var photoArray = Session.get('singlePhotosArray');
      return {first: photoArray[0], second: photoArray[1], third: photoArray[2], fourth: photoArray[3], fifth: photoArray[4]}
    },
    media: function(){
      var photo = Session.get('currentPhoto');
      return photo;
    },
    members: function(){
      var team_members = [Session.get('currentProject').members, {name:"jack"}]
      return team_members;
    },
    technologies: function(){
      var techString = Session.get('currentProject').allData.content.technology_used;
      console.log(techString);
      var parsed = techString.split(" ")
      return ({first: parsed[0], second: parsed[1], third: parsed[2]});
    }
  })

  Template.contact.events({

  })

  Template.contact.helpers({

  })

  Template.intro.events({
    'click .introContainer': function(){
      Session.set('introCounter', !Session.get('introCounter'));
    },
    'mouseover .introContainer': function(){
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
    },
    contactSwitch: function(){
      return Session.get('contactSwitch');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
