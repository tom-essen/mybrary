const mongoose = require('mongoose');

const connectDB = url => {
  const db = mongoose.connection;
  db.on('error', error => console.error(error));
  db.once('open', () => console.log('Connected to Mongoose'));

  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
