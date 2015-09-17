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
      console.log(evt.target.parentNode);
      if(evt.target.id){
        Session.set('currentCategory', evt.target.id)
      } else {
        Session.set('currentCategory', evt.target.parentNode.id)
      }
      console.log(Session.get('currentCategory'));
      Session.set('aboutMeCounter', !Session.get('aboutMeCounter'));
      // return Session.get('aboutMeCounter');
    }
  })

  Template.aboutMe.helpers({
    catProjects: function(){
      return Session.get('catArray');
    }
  })

  Template.catProject.events({
    'click .catContainer': function(){
        var filterCategory = Projects.find({technologies: {$regex: /\bruby\b/}});

        console.log(filterCategory);
    }



  })

  Template.catProject.onRendered();

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
      console.log('intro thingy clicked');
      Session.set('introCounter', !Session.get('introCounter'));
    },
    'mouseover .introContainer': function(){
      console.log('mousing overeeree');
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
      console.log(Session.get('introCounter'));
       return Session.get('introCounter')
    }
  })

  Template.bodyHolder.helpers({
    numero: function(){
      console.log(Session.get('numero'));
      return Session.get('numero');
    },
    toggle: function(){
      console.log(Session.get('aboutMeCounter'));
      return Session.get('aboutMeCounter');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
