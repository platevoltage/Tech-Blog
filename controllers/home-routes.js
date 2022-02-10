const router = require('express').Router();
// const path = require('path');
const { Post, User } = require('../models/');

// This is the 'get' route 
router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],

        }
      ]
    }).catch((err) => { 
      res.json(err);
    });
    // console.log(postData);

    const posts = postData.map((post) => post.get({ plain: true }));
    
    console.log(posts);
    


    res.render('post', {
      posts: posts, 
      loggedIn: req.session.loggedIn,
      userid: req.session.userid
    });
  } catch (err) {
    res.status(500).json(err);
  }
  

});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
  

});

router.get('/new', async (req, res) => {
  try {
    res.render('new');
  } catch (err) {
    res.status(500).json(err);
  }
  

});



module.exports = router;
