const express = require('express');
const postRouter = express.Router();
const { Post } = require('../../models');
const { apiGuard } = require('../../utils/auth');

postRouter.post('/', apiGuard, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      userId: req.session.user_id,
    });
    res.json(newPost);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error creating post', error: err.message });
  }
});

postRouter.delete('/:id', apiGuard, async (req, res) => {
  try {
    const [postData] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (postData > 0) {
      res.status(200).end();
    } else {
      res.status(404).json({ message: 'No post found with this id!' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error deleting post', error: err.message });
  }
});

postRouter.put('/:id', apiGuard, async (req, res) => {
  try {
    const [postData] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (postData > 0) {
      res.status(200).json(postData);
    } else {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error updating post', error: err.message });
  }
});

module.exports = postRouter;
