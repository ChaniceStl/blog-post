/////////////////////////
// Schema and database model configuration for blog posts
/////////////////////////

const mongoose = require('mongoose');

//Schema (aka blueprtint) for our blog posts
const blogPostSchema = mongoose.Schema({
  title: String,
  text: String
});

const Post = mongoose.model('Post', blogPostSchema);
