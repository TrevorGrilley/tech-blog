const { User } = require('../models');

const userData = [
    {
        username: "bill123",
        twitter: "billy123",
        github: "bill123",
        email: "bill123@gmail.com",
        password: "wordpass1"
    },
    {
        username: "samk",
        twitter: "samk",
        github: "samk",
        email: "samk@gmail.com",
        password: "wordpass2"
    },
    {
        username: "meganf",
        twitter: "meganf",
        github: "meganf",
        email: "meganf@gmail.com",
        password: "wordpass3"
    },
    {
        username: "chuckn",
        twitter: "chuckn",
        github: "chuckn",
        email: "chuckn@gmail.com",
        password: "wordpass4"
    },
    {
        username: "evanp",
        twitter: "evanp",
        github: "evanp",
        email: "evanp@gmail.com",
        password: "wordpass5"
    },
    {
        username: "michaelb",
        twitter: "michaelb",
        github: "michaelb",
        email: "michaelb@gmail.com",
        password: "wordpass6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;