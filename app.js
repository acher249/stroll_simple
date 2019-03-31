const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ ectended: false }));
app.use(bodyParser.json());

// Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
res.render('contact');
});

app.post('/send', (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;
});

app.listen(3000, () => console.log("server started..."))