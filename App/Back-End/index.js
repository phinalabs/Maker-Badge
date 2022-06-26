const express = require('express');
const morgan = require('morgan');
const pkg = require('./package.json');


const app = express();


// Settings
app.set('pkg', pkg);


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes


// Welcome Route
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version:app.get('pkg').version
    })
})


app.listen(3000, () => {
    console.log('Server running on port: 3000')
});