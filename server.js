const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const contentful = require('contentful');
const nodemailer = require('nodemailer');
const marked = require('marked');
const app = express();

let secrets;
if (process.env.NODE_ENV == 'production') {
  secrets = process.env;
} else {
  secrets = require('./secrets');
}

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'drivedrive.testdrive@gmail.com',
    pass: process.env.pass || secrets.pass
  }
});
client = contentful.createClient({
  space: process.env.space || secrets.space,
  accessToken: process.env.accessToken || secrets.accessToken
});

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true,
  smartLists: true,
  smartypants: true
});

function compare(a, b) {
  var splitA = a.split(" ");
  var splitB = b.split(" ");
  var lastA = splitA[splitA.length - 1];
  var lastB = splitB[splitB.length - 1];
  if (lastA < lastB)
    return -1;
  if (lastA > lastB)
    return 1;
  return 0;
}

function dateToString(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let numOfMonth = date[1] - 1;
  date[1] = months[numOfMonth];
  return date.join(' ');
}

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + `/public`));

app.get('/', function(req, res) {
  let video = {};
  client.getEntries().then((entries) => {
    entries.items.forEach(entry => {

      if (entry.fields.videoFiles) {
        video = entry.fields.videoFiles[1].fields.file;
      }
    });
    res.render('home', {
      layout: 'layout',
      video: video
    });
  });
});

app.get('/catalogue', function(req, res) {
  client.getEntries().then((entries) => {
    let artists = [];
    let video;
    let catalogue = [];
    entries.items.forEach(entry => {
      if (entry.fields.artistName) {
        artists.push(entry.fields.artistName);
      }
      if (entry.fields.cataloguePdf) {
        let fileName = entry.fields.cataloguePdf.fields.file.fileName;
        let url = entry.fields.cataloguePdf.fields.file.url.replace('//', '');
        catalogue.push({fileName, url});
      }
      if (entry.fields.videoFiles) {
        video = entry.fields.videoFiles[0].fields.file;
      }
    });
    artists.sort((a, b) => {
      return compare(a, b);
    });
    res.render('catalogue', {
      layout: 'layout',
      artists,
      video,
      catalogue
    });
  }).catch((err) => {
    console.log('err: ', err);
  });
});

app.get('/events', function(req, res) {
  client.getEntries({
    'content_type': 'drivedriveEvent',
    order: '-fields.ddEventDate'
  }).then((entries) => {
    const eventList = entries.items
      ? entries.items.map((entry) => {
        let ddEventDate = dateToString(entry.fields.ddEventDate.split('-').reverse()) || null;
        return {
          eventTitle: entry.fields.ddEventTitle,
          eventDate: ddEventDate,
          eventInfo: marked(entry.fields.ddEventInfo),
          eventContent: entry.fields.ddEventContent
            ? entry.fields.ddEventContent.map((image) => {
              return {image: `http:${image.fields['file'].url}`, imageDescrip: image.fields['description']};
            })
            : null
        };
      })
      : null;
    res.render('events', {
      layout: 'layout',
      eventList: eventList
    });
  });
});

app.get('/testdrive', function(req, res) {
  client.getEntries({
    'content_type': 'testdriveEvent',
order: '-fields.tdEventDate'
  }).then((entries) => {
    const eventList = entries.items
      ? entries.items.map((entry) => {
        let tdEventDate = dateToString(entry.fields.tdEventDate.split('-').reverse()) || null;
        return {
          eventTitle: entry.fields.tdEventTitle,
          eventDate: tdEventDate,
          eventInfo: marked(entry.fields.tdEventInfo),
          eventContent: entry.fields.tdEventContent
            ? entry.fields.tdEventContent.map((image) => {
              return {image: `http:${image.fields['file'].url}`, imageDescrip: image.fields['description']};
            })
            : null
        };
      })
      : null;
    res.render('testdrive', {
      layout: 'layout',
      eventList: eventList
    });
  });
});

app.get('/info', function(req, res) {
  res.render('info', {layout: 'layout'});
});

app.post('/new-contact', function(req, res) {
  const { email } = req.body;
  if (!email) {
    res.send(400);
    return;
  }
  let mailOptions = {
    from: 'drivedrive.testdrive@gmail.com', // sender address
    to: 'drivedrive.testdrive@gmail.com', // list of receivers
    subject: 'new user sign up:', // Subject line
    text: email, // plain text body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
  res.send(201);
});

app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080'));
