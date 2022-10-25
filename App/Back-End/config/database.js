
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
    console.log(`${process.env.MONGO_DB_DBNAME} connected, up and running`);
  });
   mongoose.Promise = global.Promise;



module.exports = mongoose;

