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
<<<<<<< HEAD
  console.log(req.body)
=======
  console.log(req.body.post)
>>>>>>> aaca564bcd60b8ca9e6e50f47960234aad1b7bac
  Post.create({title: req.body.post, test: 'sucessfully created a test post'}, () => {
    console.log('post successfully created');
  })
}

<<<<<<< HEAD
//Update a post in database
// const updatePost = (req, res) {
//   Post.update()
// }
=======
const deletePost = (req, res) => {
  console.log(req.body)
  Post.remove(req.body, (err)=> {
   if(err){
      console.log('error')
    }
  })
}
>>>>>>> aaca564bcd60b8ca9e6e50f47960234aad1b7bac

//Configure router for get and post calls
router.route('/')
  .get(getPosts)
  .post(postPosts)
  .delete(deletePost)


module.exports = router;
