const { Comment } = require('../models');

const commentdata = [
  {
    description: "Agreed. This is my first comment too.",
    date_created: "04/04/21",
    post_id: 1,
    user_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
