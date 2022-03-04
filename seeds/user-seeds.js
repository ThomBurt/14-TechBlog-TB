const { User } = require('../models');

const userData = [{
        username: 'thom',
        password: 'thom123'

    },
    {
        username: 'josh',
        password: 'josh123'
    },
    {
        username: 'niki',
        password: 'niki123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;