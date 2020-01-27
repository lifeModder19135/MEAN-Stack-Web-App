const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to db
mongoose.connect(config.database);

//log connection and/or errors
mongoose.connection.on('connected', () => {
    console.log('connected to database at ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

const app = express();
const port = 3000;

const users = require('./routes/users');

//CORS Middleware
app.use(cors());

//Setstatic folder
app.use(express.static(path.join(__dirname, 'public')));

//Body-Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Routing for index page
app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

//Start server and log message
app.listen(port, () => {
    console.log("app listening on port " + port);
});
