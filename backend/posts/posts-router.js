/////////////////////////
// Routes for getting and creating (aka posting) blog posts
/////////////////////////

const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPosts = (req, res) => {
  Post.find({}, (err, data) => {
    res.send(data);
  })
}

//Create a new test post in database
const postPosts = (req, res) => {
  console.log(req.body.post)
  Post.create({title: req.body.post, test: 'sucessfully created a test post'}, () => {
    console.log('post successfully created');
  })
}


const deletePost = (req, res) => {
  console.log(req.body)
  Post.remove(req.body, (err) => {
   if(err){
      console.log('error')
    }
  })
}

//Update a post in database
const updatePost = (req, res) => {
  console.log(req.body)
  Post.findByIdAndUpdate(req.body, (err, post) => {
    if(err) {
      console.log('error')
    } else {
      res.send(post)
      console.log('post successfully updated!')
    }
  })
}

//Configure router for get and post calls
router.route('/')
  .get(getPosts)
  .post(postPosts)
  .delete(deletePost)
  .put(updatePost)


module.exports = router;
