const { Post } = require('../models');

const postData = [
    {
        title: "Run Buddy has officially launched",
        post_content: "Run Buddy is an app designed to get you in contact with trainers to help guide you on your health journey.",
        user_id: 1
    },
    {
        title: "A Day In The Smoky Mountains Is Ready For Use",
        post_content: "A Day In The Smoky Mountains is designed to help people taking trips to the Smokies",
        user_id: 2
    },
    {
        title: "Regex Tutorial Is Up And Running",
        post_content: "An easy to understand basic tutorial on regular expressions.",
        user_id: 3

    },
    {
        title: "Quick Track Has Made It To The App Store",
        post_content: "Fitness application to help people track their daily calories.",
        user_id: 4
    },
    {
        title: "Quick Track V2 Is Underway",
        post_content: "New and improved Quick Track with a bunch of new features",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;