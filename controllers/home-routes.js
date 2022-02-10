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
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
  

});

router.get('/login', async (req, res) => {
  try {
    res.render('login', {
      loggedIn: req.session.loggedIn,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
  

});

router.get('/new', async (req, res) => {
  try {
    res.render('new', {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userid: req.session.userid
    });
  } catch (err) {
    res.status(500).json(err);
  }
  

});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
  

});


module.exports = router;
