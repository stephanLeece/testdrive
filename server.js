const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const contentful = require('contentful');
const nodemailer = require('nodemailer');
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
let secrets;
console.log('outside if: ', process.env, process.env.NODE_ENV);
if (process.env.NODE_ENV == 'production') {
    console.log('process in if: ', process.env);
    secrets = process.env;
} else {
    console.log('process in else: ', process.env);
    secrets = require('./secrets');
}

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'drivedrive.testdrive@gmail.com',
        pass: secrets.pass
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
    console.log("line34");
    let video = {};
    client.getEntries().then((entries) => {
        console.log("line 36");
        entries.items.forEach(entry => {
            console.log("line39");
            if (entry.fields.videoFile) {
                video = entry.fields.videoFile[0].fields.file;
                console.log("line40");
            }
        });
        console.log("line45");
        res.render('home', {

            layout: 'layout',
            video: video

        });
    });
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
                console.log("URL: ", url);
                catalogue.push({fileName, url});
            }
            if (entry.fields.videoFile) {
                video = entry.fields.videoFile[0].fields.file;
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
    client.getEntries({'content_type': 'drivedriveEvent'}).then((entries) => {
        const eventList = entries.items? entries.items.map((entry) => {
            return {
                eventClassName: entry.fields.ddClassName,
                eventTitle: entry.fields.ddEventTitle,
                eventDate: entry.fields.ddEventDate,
                eventInfo: entry.fields.ddEventInfo,
                eventContent: entry.fields.ddEventContent? entry.fields.ddEventContent.map((image) => {
                    return {image: `http:${image.fields['file'].url}`, imageDescrip: image.fields['description']};
                }) : null
            };
        }) : null;
        res.render('events', {
            layout: 'layout',
            eventList: eventList
        });
    });
});

app.get('/testdrive', function(req, res) {
    client.getEntries({'content_type': 'testdriveEvent'}).then((entries) => {
        const eventList = entries.items? entries.items.map((entry) => {
            return {
                eventClassName: entry.fields.tdClassName,
                eventTitle: entry.fields.tdEventTitle,
                eventDate: entry.fields.tdEventDate,
                eventInfo: entry.fields.tdEventInfo,
                eventContent: entry.fields.tdEventContent?  entry.fields.tdEventContent.map((image) => {
                    return {image: `http:${image.fields['file'].url}`, imageDescrip: image.fields['description']};
                }) : null
            };
        }) : null;
        res.render('testdrive', {
            layout: 'layout',
            eventList: eventList
        });
    });
});

app.get('/info', function(req, res) {
    res.render('info', {layout: 'layout'});
});

app.post('/info', function(req, res) {
    console.log(req.body);
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'drivedrive.testdrive@gmail.com', // sender address
        to: 'drivedrive.testdrive@gmail.com', // list of receivers
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

app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080'));
