Projects = new Mongo.Collection('projects');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('introCounter', true);
  Session.setDefault('numero', true);
  Session.setDefault('singleCounter', false);
  Session.setDefault('aboutMeCounter', false);
  Session.setDefault('currentProject', null);
  Session.setDefault('currentCategory', null);

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
      } else {
        Session.set('currentCategory', evt.target.parentNode.parentNode.id)
      }
      console.log(Session.get('currentCategory'));
      Session.set('aboutMeCounter', !Session.get('aboutMeCounter'));
      // return Session.get('aboutMeCounter');
    },
    'mouseenter .category': function(evt){
      // $(this).child('techTitle').css('opacity', 1);
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
            var filterCategory = Projects.find({technologies: {$regex: /\bruby\b/}}, {limit: 4});
          } else if(category == "ux") {
            var filterCategory = Projects.find({technologies: {$regex: /\bux\b/}}, {limit: 4});
          } else if(category == "javascript") {
            var filterCategory = Projects.find({technologies: {$regex: /\bjavascript\b/}}, {limit: 4});
          }
          var returnCat = filterCategory
          return returnCat;
        }
    //end of template
  })

  Template.projects.events({
    'click .projects': function(evt){
      Session.set('singleCounter', !Session.get('singleCounter'));
      var name = $(evt.target)
      var currProj = Projects.findOne({"name": name.context.innerText});
      Session.set('currentProject', currProj);
      console.log(Session.get('currentProject'));
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

    }
  })

  Template.singleProject.helpers({
    data: function(){
      // Session.set('singleCounter', !Session.get('singleCounter'));
      return Session.get('currentProject');
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
       x.animate({opacity: .8}, 2200);
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
