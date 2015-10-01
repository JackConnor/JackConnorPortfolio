


if (Meteor.isServer){

}

// Projects = new Mongo.Collection('projects');


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
  Session.setDefault('challengeToggle', false)
  Session.setDefault('solutionToggle', false)

  Template.navbar.helpers({

  });

  Template.navbar.events({
    'click #allProjects': function(){
      Session.set('singleCounter', false);
      Session.set('numero', true);
      Session.set('contactSwitch', false);
      $('html, body').animate({
        scrollTop: $(".projectscontainer").offset().top
      }, 700);
    },
    'click #about': function(){
      Session.set('singleCounter', false);
      Session.set('numero', true);
      Session.set('contactSwitch', false);
      console.log('sessions should be set');
      $('html, body').animate({
        scrollTop: $(".aboutJackContainer").offset().top
      }, 700);
    },
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
      $('html, body').animate({
        scrollTop: $(".contactContainer").offset().top
      }, 700);
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
        console.log(name);
        var dataCall = [];
        for (var i = 0; i < Projects.length; i++) {
          console.log(Projects[i].name);
          if(Projects[i].name == name){
            dataCall.push(Projects[i]);
          }
        }
        var dataCall = dataCall[0];
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
    'click .contactJackButton': function(){
      Session.set('singleCounter', false);
      Session.set('numero', false);
      Session.set('contactSwitch', true);
      setTimeout(function(){
        $('html, body').animate({
          scrollTop: $(".contactContainer").offset().top
        }, 700);
      }, 300);
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
      var projects = Projects

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
    },
    'mouseenter #challenge': function(){
      $('#moreChallenge').css('opacity', 0.35);
    },
    'mouseleave #challenge': function(){
      $('#moreChallenge').css('opacity', .1);
    },
    'mouseenter #solution': function(){
      $('#moreSolution').css('opacity', 0.35);
    },
    'mouseleave #solution': function(){
      $('#moreSolution').css('opacity', .1);
    },
    'click #challenge': function(){
      if(!Session.get('challengeToggle')){
        $('#moreChallenge')[0].innerText = "Click to Close"
        $('#challengeContent')[0].innerText = Session.get('currentProject').allData.content.problem;
        Session.set('challengeToggle', !Session.get('challengeToggle'))
      } else {
        $('#moreChallenge')[0].innerText = "Click for More Info"
        $('#challengeContent')[0].innerText = Session.get('currentProject').allData.content.problem.split(' ').slice(0, 8).join(' ')+'...';
        Session.set('challengeToggle', !Session.get('challengeToggle'))
      }
    },
    'click #solution': function(){
      if(!Session.get('solutionToggle')){
        $('#moreSolution')[0].innerText = "Click to Close";
        var el = $('#solutionContent');
        console.log(el);
        console.log(el[0].innerText);
        el[0].innerText = Session.get('currentProject').allData.content.solution;
        Session.set('solutionToggle', !Session.get('solutionToggle'))
      } else {
        $('#moreSolution')[0].innerText = "Click for More Info";
        $('#solutionContent')[0].innerText = Session.get('currentProject').allData.content.solution.split(' ').slice(0, 8).join(' ')+"...";
        Session.set('solutionToggle', !Session.get('solutionToggle'))
      }
    }
  })

  Template.singleProject.helpers({
    data: function(){
      return Session.get('currentProject');
    },
    shortChallenge: function(){
      var full =  Session.get('currentProject').allData.content.problem;
      var short = full.split(' ').slice(0, 8).join(' ');
      console.log(short);
      return short + "...";
    },
    shortSolution: function(){
      var full =  Session.get('currentProject').allData.content.solution;
      var short = full.split(' ').slice(0, 8).join(' ');
      console.log(short);
      return short + "...";
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

Projects = [
////first project
  {
    name: "reBound",
    completion_date: "06-15-2015",
    role: "FullStack Javascript developer",
    content: {
      short: "Improve your memory and mental cognition by gauging the flight path of a ball across a table",
      long: "This game, to be played in the pantheon of Lumosity and Fit-Brains mental training games, provides real memory enhancement through a fun (but difficult) two-player game. Memorize the path of a flying ball across a board as it careens off a series of bumpers, or set up a tough board to stump your friends. This game was built using pure javascript/jquery, comprising nearly two thousand lines of code. I personally found this to be a satisfying challenge, as I’ve enjoyed other iterations of reBound and embraced the requirement of creating a two-player game to create something fun and unique.",
      problem: "To build a two-player game using javascript and jquery. Long a fan of cognition training games, I decided to narrow this challenge to rebuild an old favorite.",
      solution: "I designed and developed this game using a minimum of technologies (just jQuery), and I knew that the biggest challenge would be to pre-track the path of the ball as it bounces off of the bumpers, as these are set by the player rather than by the board. The solution was to create a thorough model for our board that would be scanned through and read to create the flight path for the ball. This model is fed into a repeating function to analyze each leg of the balls journey, and ultimately it’s exit path from the board (which may or may not have been guessed by the opposing player). ",
      technology_used: "javascript jquery html/css"
    },
    links: {
      github: "https://github.com/JackConnor/reBound",
      live: "http://rebound.bitballoon.com/"
    },
    media: [
      {"url":"http://s9.postimg.org/wty1cpbtr/Screen_Shot_2015_09_26_at_12_13_12_AM.png"},
      {"url": "http://s1.postimg.org/ov0rv1wv3/Screen_Shot_2015_09_26_at_12_15_27_AM.png"},
      {"url": "http://s9.postimg.org/i0jdry42n/Screen_Shot_2015_09_26_at_12_14_19_AM.png"},
      {"url": "http://s16.postimg.org/svhq9mvr9/Screen_Shot_2015_09_26_at_12_16_23_AM.png"},     {"url": "http://s23.postimg.org/5kmajxz4r/Screen_Shot_2015_09_26_at_12_16_28_AM.png"}
    ]
  },
  //second data piece
  {
    name: "Now Playing",
    completion_date: "09-10-2015",
    role: "FullStack Javascript Developer",
    content: {
      short: "Find movies playing near you now, with Now Playing",
      long: "Now Playing was built and designed to solve one problem - how to find the movies playing near you that are starting soon, quickly and easily. Current products on the market such as Fandango and MovieFone offer robust services, but aren't especially useful for quick, location-based search. Setting a goal to find your movie within two clicks, we used Google Maps and the GraceNote TMSapi movie finder api, in order to build a dynamic map and listview, so our customers can find what's playing now.",
      problem: "Build a mobile solution for consumers that would allow them to find movies playing in their area within a few clicks or less. For the film lover who wants to see a movie in their area, Now Playing was built to solve this particular market gap in theater-technology",
      solution: "With an Express Base and Angular frontend, we've created a browser-version of this mobile app. Meeting our specifications, this app opens to a customized map-view, popping up markers based on the users current location which dynamically show upcoming movie times. Clicking through will also provide directions to the theater, as well as a full information-view page for each movie with a slew of interesting details. Designed for elegance and ease of use, we've built a solution that provides pointed information to the user from any device.",
      technology_used: "javascript angular express"
    },
    links: {
      github: "https://github.com/JackConnor/now-playing",
      live: "https://sheltered-cliffs-2863.herokuapp.com/#/list"
    },
    media: [
      {"url": "http://s16.postimg.org/pq4xosd39/Screen_Shot_2015_09_25_at_10_49_30_PM.png"},
      {"url": "http://s1.postimg.org/9s4sfa3z3/Screen_Shot_2015_09_25_at_11_01_21_PM.png"},
      {"url": "http://s7.postimg.org/bx76qdpez/Screen_Shot_2015_09_25_at_10_54_27_PM.png"},
      {"url": "http://s29.postimg.org/g3mqywkon/Screen_Shot_2015_09_25_at_10_55_35_PM.png"},     {"url": "http://s28.postimg.org/3qsvyp8nh/Screen_Shot_2015_09_25_at_10_57_52_PM.png"}
    ]
  },
  ///third data point
  {
    name: "The Quantum Institue",
    completion_date: "09-29-2015",
    role: "FullStack Javascript Developer",
    content: {
      short: "A science comedy podcast’s homepage and customized podcast player",
      long: "The Quantum Institute is a podcast dedicated to talking about science like normal people. We argue the ins and outs of expansionary inflation theory, laugh about phony science in sci-fi movies, and generally have a great time discussing the things that interest us the most.",
      problem: "To build a Single Page Application that would easily function both as a player, and as a home page and contact for The Quantum Institute. As QI currently uses youtube for hosting, it was necessary to have live-play in screen.",
      solution: "I used Meteor.js, jQuery, and  a bit of Bootstrap for responsiveness to create the streamlined site you’ll find when clicking through. The #1 UX goal of this project was for new listeners to have a place to easily listen to archived episodes in-browser, so I built an in-page youtube player for each individual episode, which folds out only when clicked. Extensive jquery and javascript frontend coding was used to “guide” the user towards each episodes player with visual and movement-oriented visual clues to indicate functionality, so that anyone could open and use the site problem-free, first try. Finally, I integrated the youtube iFrame player api, so that users could listen in screen with one click, without needing to click through to another site.",
      technology_used: "meteor.js, javascript, jquery"
    },
    links: {
      github: "https://github.com/JackConnor/theQuantumInstitute",
      live: "http://quantuminstitute.meteor.com/"
    },
    media: [
      {"url": "http://s4.postimg.org/qax7end9p/Screen_Shot_2015_09_29_at_12_29_28_PM.png"},
      {"url": "http://s28.postimg.org/wv2bl5sgt/Screen_Shot_2015_09_29_at_12_31_15_PM.png"},
      {"url": "http://s23.postimg.org/qo3byf4wb/Screen_Shot_2015_09_29_at_12_30_06_PM.png"},
      {"url": "http://s30.postimg.org/3rnsnnke9/Screen_Shot_2015_09_29_at_12_42_36_PM.png"},     {"url": "http://s22.postimg.org/joblaftzl/Screen_Shot_2015_09_29_at_12_30_27_PM.png"}
    ]
  },
  ///fourth data point
  {
    name: "Link Up",
    completion_date: "08-18-2015",
    role: "FullStack Javascript Developer",
    content: {
      short: "Web-Socket driven real-time person-to-person location finder",
      long: "Using the powerful Socket.io module with an Express framework backend, we built this platform to (upon permission) send location data continuously back-and-forth with a peer, which is converted in realtime into an arrow rendered in 3D on the user's phone, pointing towards their partner. With uses for businesses, parents, and concert-goers (to name a few), Link Up uses Javascript browser technology to create real-world connections.",
      problem: "Build a mobile solution that will allow users to find one-another in real time via a dynamic arrow, like a compass, which would point towards the others device.",
      solution: "With an Express Base backend and Facebook authentication using Passport, we used web-socket technology provided by Socket.io and plain Javascript for this app. Grabbing the users device-orientation data from their phone (latitude and longitude in this version), we transmit this data in realtime to a partner, which is rendered into a 3D, dynamically pointing marker (it changes as you move you device) on each users screen, which they can follow to find one another.",
      technology_used: "javascript node web-socket"
    },
    links: {
      github: "https://github.com/JackConnor/location_master",
      live: "https://warm-bayou-8573.herokuapp.com/"
    },
    media: [
      {"url": "http://s3.postimg.org/ff2n9xq43/Screen_Shot_2015_09_25_at_11_24_43_PM.png"},
      {"url": "http://s29.postimg.org/p6u289uwn/Screen_Shot_2015_09_25_at_11_26_33_PM.png"},
      {"url": "http://s12.postimg.org/sx4lawllp/Screen_Shot_2015_09_25_at_11_29_43_PM.png"},
      {"url": "http://s27.postimg.org/3z10gqyyb/Screen_Shot_2015_09_25_at_11_28_11_PM.png"},     {"url": "http://s14.postimg.org/6zetm6egx/Screen_Shot_2015_09_25_at_11_29_12_PM.png"}
    ]
  }
]

// for (var i = 0; i < data.length; i++) {
//   console.log(data[i].name);
// }
