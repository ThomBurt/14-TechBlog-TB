const { Comment } = require('../models');

const commentData = [
  {
    description: "Agreed. This is my first comment too.",
    date_created: "04/04/21",
    post_id: 1,
    user_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
