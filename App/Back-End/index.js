const config = require('./database.js');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pkg = require('./package.json');
const mongoose = require('mongoose');
const mode = '';


const authRoutes = require('./routes/auth.routes');
const badgeRoutes = require('./routes/badge.routes');
const eventRoutes = require('./routes/event.routes')

const app = express();

// Settings
app.set('pkg', pkg);
app.use(cors());

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);
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