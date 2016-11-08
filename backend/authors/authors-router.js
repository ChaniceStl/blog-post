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
                  bio: req.body,
                  articles: req.body
                },
                  () => {
                    console.log('author successfully created');
                  })
}

const deleteAuthor = (req, res) => {
  console.log(req.body)
  Author.remove(req.body, (err) => {
   if(err){
      console.log('error')
    }
  })
}

//Configure router for get and post calls
router.route('/')
  .get(getAuthor)
  .post(postAuthor)
  .delete(deleteAuthor)


module.exports = router;
