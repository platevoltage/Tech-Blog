const router = require('express').Router();
// const path = require('path');
const Post = require('../models/Post');

// This is the 'get' route 
router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
    // console.log(postData);

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);


    res.render('post', {posts: posts});
  } catch (err) {
    res.status(500).json(err);
  }
  

});

module.exports = router;
