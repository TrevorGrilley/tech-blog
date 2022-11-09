const { Comment } = require('../models');
const commentData = [
    {
        user_id: 2,
        post_id: 5,
        comment_text: "Congrats on finishing!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "This app is great!"
    },
    {
        user_id: 5,
        post_id: 1,
        comment_text: "You're doing awesome work!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "You're killing it!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Stellar work!"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "You're almost there!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Very nice feature you added!"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I will be using this app in the future!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Excellent use of handlebars!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;