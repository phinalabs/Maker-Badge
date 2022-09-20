
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

const DB_URL = `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DBNAME}`;
const PORT = process.env.PORT;

mongoose.connect(DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }, () => {
    console.log(DB_URL);
    console.log(`DB up and running`);
  });
   mongoose.Promise = global.Promise;

// mongoose.connect(mongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// mongoose.Promise = global.Promise;

module.exports = mongoose;

