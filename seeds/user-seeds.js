const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: "Thom",
    email: "thom@hotmail.com",
    password: "password123"
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password123"
  },
  {
    username: "Emily",
    email: "em@aol.com",
    password: "password123"
  },
  {
    username: "Jordan",
    email: "jordan@msn.com",
    password: "password123"
  },
  {
    username: "peele",
    email: "peele@yahoo.com",
    password: "password123"
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
