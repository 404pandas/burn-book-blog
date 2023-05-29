const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'If you\'re from Africa, why are you white?',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text: 'That is so fetch!',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Oh my God, Karen, you can\'t just ask people why they\'re white.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'Gretchen, stop trying to make fetch happen! It\'s not going to happen!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'And I\'m sorry for telling everyone about it.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'And I\'m sorry for repeating it now.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Okay, you did not just say that.',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'What? He\'s a good kisser',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'He\'s your cousin.',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'Yeah, but he\'s my first cousin.',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'She doesn\'t even go here!',
    user_id: 3,
    post_id: 6
  },
  {
    comment_text: 'Gretchen Wieners has cracked.',
    user_id: 1,
    post_id: 7
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
