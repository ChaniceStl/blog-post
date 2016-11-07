/////////////////////////
// Routes for getting and creating (aka posting) Readers
/////////////////////////

const router = require('express').Router();
const Reader = require('mongoose').model('Reader');

//Get all readers from database
const getReader = (req, res) => {
  Reader.find({}, (err, data) => {
    res.send(data);
  })
}

//Create a new test reader in database
const postReader = (req, res) => {
  console.log(req.body)
  Reader.create({users: req.body,
                  name: req.body,
                  comments: req.body,
                  email: req.body,
                  password: req.body,
                  date_joined: req.body,
                  age: req.body
                },
                  () => {
                    console.log('reader successfully created');
                  })
}

//Update a post in database
// const updatePost = (req, res) {
//   Post.update()
// }

//Configure router for get and post calls
router.route('/')
  .get(getReader)
  .post(postReader)


module.exports = router;
