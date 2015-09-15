Projects = new Mongo.Collection('projects');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('introCounter', true);
  Session.setDefault('numero', true);
  Session.setDefault('singleCounter', false);
  Session.setDefault('aboutMeCounter', false);
  Session.setDefault('currentProject', null);

  Template.navbar.helpers({

  });

  Template.navbar.events({

  })

  Template.aboutMe.events({
    'click .cat': function(evt){
      //begin category calc
      var catArray = Projects.find();
      console.log(catArray);

      Session.set('catArray', catArray);

      var techArr = catArray;
      console.log(techArr);

      Session.set('categoryName', evt.target.id)
      Session.set('aboutMeCounter', !Session.get('aboutMeCounter'));
      return Session.get('aboutMeCounter');
    }
  })

  Template.aboutMe.helpers({
    catProjects: function(){
      return Session.get('catArray');
    }
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
      var x = $('.clickToEnter');
      x.animate({opacity: .8}, 3500);
      setTimeout(function(){
        x.animate({opacity: 0}, 4000);
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
