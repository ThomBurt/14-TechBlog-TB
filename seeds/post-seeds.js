const { Post } = require('../models');

const postData = [
  {
    title: "First Blog Post",
    description: "Hello, this is my first blog post. I am excited to see it show up on this page.",
    date_created: "04/04/21",
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
