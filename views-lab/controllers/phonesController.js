var Phone = require('../models/Phone');

// GET
function getIndex(request, response) {
  Phone.find({}, {}, function(error, dbResponse) {
    if (error) {
      response.send('Something went wrong');
    }
    console.log('GET REQUEST FOR ALL');
    response.render('./phones/index', {
      title: "Phone Index",
      phones: dbResponse
    });
  });
}

// GET
function newBoard(request, response) {
  console.log("FORM RENDERED FOR NEW DOCUMENT");
  response.render('./phones/new', {
    title: "Create New Board"
  });
}

// POST
function create(request, response) {
  console.log('POST REQ RECVD');
  console.log('body:', request.body);
  var phone = new Phone();

  phone.name = request.body.name;
  phone.color = request.body.color;

  phone.save(function(error) {
    if (error) {
      res.send('Could not ceate phone b/c:' + error);
    }
    response.json(phone);
  });
}

// GET
function getOne(request, response) {
  var id = request.params.id;

  Phone.findById(id, function(error, dbResponse) {
    if (error) {
      response.send('Could not find phone b/c: ' + error);
    }
    console.log("GET REQUEST FOR ONE DOCUMENT");
    console.log(dbResponse);
    response.render('./phones/show', {
      title: "Show Phone",
      phone: dbResponse
    });
  });
}

function edit(request, response) {
  var id = request.params.id;
  Phone.findById(id, function(err, dbResponse) {
    response.render('./phones/edit', {
      phone: dbResponse
    });
  });
}

function update(request, response) {
  var id = request.params.id;

  Phone.findById(id, function(error, dbResponse) {
    if (error) {
      res.send('Could not find phone b/c:' + error);
    }
    console.log('PUT REQUEST RECEIVED');
    console.log(dbResponse);
    dbResponse.name = request.body.name;
    dbResponse.color = request.body.color;
    dbResponse.save(function(error) {
      if (error) {
        response.send('Could not update phone b/c:' + error);
      }
      response.redirect('/phones');
    });
  });
}

function destroy(request, response) {
  var id = request.params.id;
  console.log('DELETE REQUEST RECEIVED');
  Phone.remove({
    _id: id
  }, function(error) {
    if (error) {
      response.send('Could not delete phone due to: ' + error);
    }
    response.redirect('/phones');
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
