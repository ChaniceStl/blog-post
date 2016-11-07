/////////////////////////
// Schema and database model configuration for authors
/////////////////////////

const mongoose = require('mongoose');

//Schema (aka blueprtint) for our authors
let Mixed = mongoose.Schema.Types.Mixed;
const authorSchema = mongoose.Schema({
  name: String,
  email: String,
  password: Mixed,
  bio: String,
  articles: [Mixed]
});

const Author = mongoose.model('Author', authorSchema);
