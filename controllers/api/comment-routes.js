const express = require('express');
const commentRouter = express.Router();
const { Comment } = require('../../models/');
const { apiGuard } = require('../../utils/auth');

commentRouter.post('/', apiGuard, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      postId: req.body.post_id,
      userId: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

commentRouter.delete('/:id', apiGuard, async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.userId !== req.session.user_id) {
      return res.status(403).json({ message: 'Not your comment' });
    }

    await comment.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = commentRouter;
