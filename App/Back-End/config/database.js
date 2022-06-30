const mongoose = require('mongoose');


// Config DB Connection
const mongoDB = 'mongodb://localhost/makerBadge';

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;


module.exports = mongoose;