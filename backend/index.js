/////////////////////////
// Index page - import and organize all models and routes. export for use in server
/////////////////////////

//Models
const Posts = require('./posts/posts-model');
const Readers = require('./readers/reader-model');
const Authors = require('./authors/authors-model');

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');
const readers = require('./readers/reader-router');
const authors = require('./authors/authors-router');

module.exports = {
  models: {
    Posts: Posts,
    Readers: Readers,
    Authors: Authors
  },
  routes: {
    posts: posts,
    readers: readers,
    authors: authors,
    home: home
  }
}
