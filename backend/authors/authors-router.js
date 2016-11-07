/////////////////////////
// Routes for getting and creating (aka posting) Authors
/////////////////////////

const router = require('express').Router();
const Author = require('mongoose').model('Author');

//Get all authors from database
const getAuthor = (req, res) => {
  Author.find({}, (err, data) => {
    res.send(data);
  })
}

//Create a new test author in database
const postAuthor = (req, res) => {
  console.log(req.body)
  Author.create({ name: req.body,
                  email: req.body,
                  password: req.body,
                  bio: req.body,
                  articles: req.body
                },
                  () => {
                    console.log('author successfully created');
                  })
}

//Update a post in database
// const updatePost = (req, res) {
//   Post.update()
// }

//Configure router for get and post calls
router.route('/')
  .get(getAuthor)
  .post(postAuthor)


module.exports = router;
