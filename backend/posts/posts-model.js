const mongoose = require('mongoose');
//This is the blueprint for our database. It outlines the different information our database will contain.
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: String
});

//First argument is name of the model, second argument is the Schema
const Post = mongoose.model('BlogPost', blogSchema);
