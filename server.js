const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const contentful = require('contentful');
const secrets = require('./secrets.json');




client = contentful.createClient({
  space: secrets.space,
  accessToken: secrets.accessToken,
})

const app = express();

// View engine setup
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(__dirname + '/public'));

app.use(express.static(__dirname + `/public`));

app.get('/', function(req, res) {
  client.getEntries()
  .then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {

      console.log(entry)

  })
})
  res.render('home',
  {
    layout: 'layout'
  });
});

// placeholders for eventresults and catalogueResults returned from database/cms

app.get('/drivedrive', function(req, res) {

  res.render('drivedrive',
  {
    layout: 'layout'
    // ,events: eventsResults,
    // catalogue: catalogueResults
  });
});

app.get('/drivedrive/events', function(req, res) {
  res.render('drivedrive',
  {
    layout: 'layout'
    // ,events: eventsResults,
    // catalogue: catalogueResults
  });
});

app.get('/drivedrive/catalogue', function(req, res) {
  res.render('drivedrive',
  {
    layout: 'layout'
    // ,events: eventsResults,
    // catalogue: catalogueResults
  });
});

// need a get route for testdrive events module -- "testdrive/event/:id"
// res.send to modal to show 'modal', and 'content' for the individual event info
// probably will need the same for drivedrive events modal

app.get('/testdrive', function(req, res) {
  // need a db.query or req from cms for events information

  res.render('testdrive',
  {
    layout: 'layout'
    // ,events: eventsResults

  });
});

app.get('/info', function(req, res) {
  res.render('info',
  {
    layout: 'layout'
  });
});

app.get('/space', function(req, res) {
  res.render('space',
  {
    layout: 'layout'
  });
});

app.listen(8080, () => console.log('Listening on port 8080'));
