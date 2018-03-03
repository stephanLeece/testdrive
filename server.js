const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const contentful = require('contentful');
const secrets = require('./secrets.json');
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', port: 587, secure: false, // true for 465, false for other ports
  auth: {
    user: 'eo4x2kvtldia4j3e@ethereal.email', // generated ethereal user
    pass: 's42jbsHDqGMPzxwMRs' // generated ethereal password
  }
});

client = contentful.createClient({space: secrets.space, accessToken: secrets.accessToken});

const app = express();

// View engine setup
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(__dirname + '/public'));

app.use(express.static(__dirname + `/public`));

app.get('/', function(req, res) {

  client.getEntries({'content_type': 'drivedriveEvent'}).then(function(entries) {
    const eventList = entries.items.map((entry) => {
      return {
    eventTitle: entry.fields.ddEventTitle,
    eventDate: entry.fields.ddEventDate,
    eventContent: entry.fields.ddEventContent
  }
});
console.log(eventList[0]);
  })
  res.render('home', {
    layout: 'layout'
    // ,content: result
  });
});

// placeholders for eventresults and catalogueResults returned from database/cms

app.get('/catalogue', function(req, res) {
  //need client.getEntries for artists names / essays
  res.render('catalogue', {
    layout: 'layout'
    // artists: artistsResults,
    // essays: essaysResults
  });
});

app.get('/events', function(req, res) {
  res.render('events', {
    layout: 'layout'
    // ,events: eventsResults
  });
});

app.get('/testdrive', function(req, res) {
  // need a db.query or req from cms for events information
  res.render('testdrive', {
    layout: 'layout'
    // ,events: eventsResults
  });
});

app.get('/info', function(req, res) {
  res.render('info', {layout: 'layout'});
});

app.post('/info', function(req, res) {
  console.log(req.body);
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'new user sign up:', // Subject line
    text: req.body.userEmail, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
  res.render('info', {layout: 'layout'});
});

app.listen(8080, () => console.log('Listening on port 8080'));
