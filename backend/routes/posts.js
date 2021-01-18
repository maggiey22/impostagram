const router = require('express').Router();
let Post = require('../models/post.model');

// get all posts
router.route('/').get((res) => {
    Post.find()
        .then((posts) => res.json(posts))
        .catch((err) => res.statusMessage(`Error: ${err}`));
});

// add a post
router.route('/add').post((req, res) => {
    const { img, desc } = req.body.desc;

    const newPost = new Post({
        img,
        desc: desc && desc !== '' ? desc : null,
    });

    newPost
        .save()
        .then(() => res.json('Added a dummy item!'))
        .catch((err) => console.log(err));
});

router.route('/random').get((req, res) => {
    Post.find()
        .then((data) => {
            const len = data.length;

            // generate a random index in [0, data.length)
            const randomIndex = Math.floor(Math.random() * Math.floor(len));
            res.json(data[randomIndex]);
        })
        .catch((err) => console.log(`Error: ${err}`));
});

module.exports = router;
