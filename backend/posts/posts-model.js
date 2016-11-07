/////////////////////////
// Schema and database model configuration for blog posts
/////////////////////////

const mongoose = require('mongoose');

//Schema (aka blueprtint) for our blog posts
const blogPostSchema = mongoose.Schema({
  title: String
  // date: Date,
  // text: String,
  // categories: [String],
  // images:[String],
  // comments: String,
  // author:String,
  // archive: Boolean

});

const Post = mongoose.model('Post', blogPostSchema);
//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean