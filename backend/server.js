//This is an abstraction of the http npm module. Similar to http on steroids
const express = require('express');
//This saves the express function call in a variable
const app = express();
//Mongoose is a liason between express and MongoDB. It connects the database to the server
const mongoose = require('mongoose');
//Import from the file where the schema was created. This is to interact with table created in file.
const postModel = require('./posts/posts-model');
const Post = mongoose.model('BlogPost')


//This connect method is used to create a database if one does not exist or connect to a
mongoose.connect('mongodb://localhost/blog-app-test');

const db = mongoose.connection;

db.on('open', () => {
  console.log('db connection is opened!');

  app.listen(4444, () => {
    console.log('App listening on port 4444');

    //This method is used to create posts to your database
    Post.create({ title: 'test post 1'}, (err, data) => {
        if(err) console.log('Error with database:')
        else console.log('Post created!', data)
    });

    //This is for our server to throw an error if the database doesn't mount.
    db.on('error', () => {
      console.log('error in db connection!');
    });
  });
});


app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/posts',(req, res) => {
  res.send('Hey from the posts site!');
});
