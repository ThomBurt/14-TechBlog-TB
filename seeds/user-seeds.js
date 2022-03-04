const { User } = require('../models');

const userData = [{
        username: 'thom',
        password: 'thom123'

    },
    {
        username: 'niki',
        password: 'niki123'
    },
    {
        username: 'kelly',
        password: 'kelly123'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;