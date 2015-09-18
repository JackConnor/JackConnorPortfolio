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
      Session.set('singleCounter', !Session.get('singleCounter'));
      if(evt.target.id[0] == "O") {
        var id = evt.target.id;
        console.log(id);
        var currProj = Projects.findOne(id);
        Session.set('currentProject', currProj);
        console.log(Session.get('currentProject'));
      }else if(evt.target.id){
        var name = evt.target.id;
        console.log(name);
        var currProj = Projects.findOne({"name": name});
        Session.set('currentProject', currProj);
        console.log(Session.get('currentProject'));
      }else{
        var name = $(evt.target);
        var currProj = Projects.findOne({"name": name.context.innerText});
        Session.set('currentProject', currProj);
        console.log(Session.get('currentProject'));
      }
    },
    'mouseenter '
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
