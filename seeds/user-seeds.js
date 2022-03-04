const { User } = require('../models');

const userData = [{
        username: 'thom',
        password: 'thom'

    },
    {
        username: 'niki',
        password: 'niki'
    },
    {
        username: 'kelly',
        password: 'kelly'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;