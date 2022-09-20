const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./config/database');
const pkg = require('./package.json');

const authRoutes = require('./routes/auth.routes');
const badgeRoutes = require('./routes/badge.routes');
const eventRoutes = require('./routes/event.routes')


const app = express();


// DB settings
mongoose.connection.on('error', console.error.bind(console, 'DB Connection Errror'));


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


// Welcome Route
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})


app.listen(3000, () => {
    console.log('Server running on port: 3000')
});