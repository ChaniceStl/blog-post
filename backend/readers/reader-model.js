/////////////////////////
// Schema and database model configuration for readers
/////////////////////////

const mongoose = require('mongoose');

//Schema (aka blueprtint) for our readers
let Mixed = mongoose.Schema.Types.Mixed;
const readerSchema = mongoose.Schema({
  users: String,
  name: String,
  comments: String,
  email: String,
  password: Mixed,
  date_joined: Date,
  age: Number
});

const Reader = mongoose.model('Reader', readerSchema);
