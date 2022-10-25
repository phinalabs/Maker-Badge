let config = require('./database.js');
let express = require('express');
let cors = require('cors');
let morgan = require('morgan');
let pkg = require('./package.json');
let mongoose = require('mongoose');
let mode = '';


let badgeRoutes = require('./routes/badge.routes');
let eventRoutes = require('./routes/event.routes');

let app = express();

// Settings
app.set('pkg', pkg);
app.use(cors());

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/badges', badgeRoutes);
app.use('/api/events', eventRoutes);

var path = require('path');

console.log(`MONGO_URI= ${config.MONGO_URI}`);

mongoose.connect(`${config.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongo database");
    })
    .catch((err) => {
        console.log("Error connecting mongo database", err);
        process.exit(1);
    });

var db = mongoose.connection;

// Welcome Route
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://127.0.0.1:${config.PORT}`);
})