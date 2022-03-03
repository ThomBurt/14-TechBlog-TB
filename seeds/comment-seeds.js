const { Comment } = require('../models');

const commentData = [
  {
    description: "Agreed. This is my first comment too.",
    post_id: 1,
    user_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
