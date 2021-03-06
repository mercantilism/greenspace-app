const mongoose = require('mongoose');

/* from examp
var CONTACTS_COLLECTION = "contacts";
*/
var GREENSPACES_COLLECTION = "greenspaces";

// create a db variable outside of db connection callback
var db;

// import environmental variables from our variables.env file
// uses dotenv package to access these vars
    // move to start.js if that happens
require('dotenv').config({ path: 'variables.env' });

// connect to database before starting the application server
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(err.message);
});

// we'll need to import all of our models here
require('./server/src/app/schemas/Greenspace');
require('./server/src/app/schemas/User');
//
// starting our server
const app = require('./server/src/server');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running at PORT  ${server.address().port}`);
});