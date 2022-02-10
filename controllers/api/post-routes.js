const router = require('express').Router();
const { Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id
       
      });

      
        res.status(200).json(dbPostData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
router.post('/comment', async (req, res) => {
    try {
      const dbCommentData = await Comment.create({
        
        body: req.body.body,
        user_id: req.body.user_id,
        post_id: req.body.post_id
       
      });

      
        res.status(200).json(dbCommentData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  


module.exports = router;