var Skateboard = require('../models/Skateboard');

// GET
function getIndex(request, response) {
  Skateboard.find({}, {}, function(error, dbResponse) {
    if (error) {
      res.send('Something went wrong');
    }
    console.log('GET REQUEST FOR ALL');
    // response.json(dbResponse);
    response.render('./skateboards/index', {
      title: "Skateboard Index",
      skateboards: dbResponse
    });

    // response.render('layout', {: candies});
  });
}

// GET
function newBoard(request, response) {
  console.log("FORM RENDERED FOR NEW DOCUMENT");
  response.render('./skateboards/new', {
    title: "Create New Board"
  });
}

// POST
function create(request, response) {
  console.log('POST REQ RECVD');
  console.log('body:', request.body);
  var skateboard = new Skateboard();

  skateboard.name = request.body.name;
  skateboard.color = request.body.color;

  skateboard.save(function(error) {
    if (error) {
      res.send('Could not ceate skateboard b/c:' + error);
    }
    response.redirect('/skateboards');
  });
}

// GET
function getOne(request, response) {
  var id = request.params.id;

  Skateboard.findById(id, function(error, dbResponse) {
    if (error) {
      response.send('Could not find skateboard b/c: ' + error);
    }
    console.log("GET REQUEST FOR ONE DOCUMENT");
    console.log(dbResponse);
    response.render('./skateboards/show', {
      title: "Show Skateboard",
      skateboard: dbResponse
    });
  });
}

function edit(request, response) {
  var id = request.params.id;
  Skateboard.findById(id, function(err, dbResponse) {
    response.render('./skateboards/edit', {
      skateboard: dbResponse
    });
  });
}

function update(request, response) {
  var id = request.params.id;

  Skateboard.findById(id, function(error, dbResponse) {
    if (error) {
      res.send('Could not find skateboard b/c:' + error);
    }
    console.log('PUT REQUEST RECEIVED');
    console.log(dbResponse);
    dbResponse.name = request.body.name;
    dbResponse.color = request.body.color;
    dbResponse.save(function(error) {
      if (error) {
        response.send('Could not update skateboard b/c:' + error);
      }
      response.redirect('/skateboards');
    });
  });
}

function destroy(request, response) {
  var id = request.params.id;
  console.log('DELETE REQUEST RECEIVED');
  Skateboard.remove({
    _id: id
  }, function(error) {
    if (error) {
      response.send('Could not delete skateboard due to: ' + error);
    }
    response.redirect('/skateboards');
  });
}

module.exports = {
  getIndex: getIndex,
  new: newBoard,
  create: create,
  getOne: getOne,
  edit: edit,
  update: update,
  destroy: destroy
};
