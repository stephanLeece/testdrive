const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// View engine setup
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(__dirname + '/public'));

app.use(express.static(__dirname + `/public`));

app.get('/', function(req, res) {
  res.render('home',
  {
    layout: 'layout'
  });
});

app.get('/drivedrive', function(req, res) {
  res.render('home',
  {
    layout: 'layout'
  });
});

// app.get('/drivedrive/events', function(req, res) {
//   res.render('home',
//   {
//     layout: 'layout'
//   });
// });

// app.get('/drivedrive/catalogue', function(req, res) {
//   res.render('home',
//   {
//     layout: 'layout'
//   });
// });

app.get('/testdrive', function(req, res) {
  res.render('testdrive',
  {
    layout: 'layout'
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

// node server.js
// sass: npm run scss

app.listen(8080, () => console.log('Listening on port 8080'));
