const router = require('express').Router();
// const path = require('path');
const Post = require('../models/Post');

// This is the 'get' route 
router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll();
    // console.log(postData);

    const post = postData[0].get({ plain: true });
    console.log(post);


    res.render('post', post);
  } catch (err) {
    res.status(500).json(err);
  }
  

});

module.exports = router;
