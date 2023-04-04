
const mongoose = require('mongoose');

const DB_HOST = "mongodb+srv://nastyaandrus:opuow8lO2bXDPmlO@cluster0.mjhw4th.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

const app = require('./app');

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    });
    console.log('Database connection successful');
  }).catch(error => {
    console.log(error.message);
    process.exit(1);
  })

