const router = require('express').Router();
const axios = require('axios');
const fs = require('fs');

let Post = require('../models/post.model');

const GET_SETTINGS = { method: 'GET' };
const RANDOM_USER_API = 'https://randomuser.me/api/';

let user = null;

const getRandomUser = () => {
    axios
        .get(RANDOM_USER_API)
        .then((res) => {
            // const user = {
            //     username: res.results[0].login.username,
            //     pfp: res.results[0].picture.large,
            // };
            // res.json('hi');
            // console.log(res.data);
            user = res.data;
            return 'DONE!';
            // return 'hello';
            // res.json(res.data);
        })
        .catch((err) => console.log(err));
};

// get all posts
router.route('/').get(async (req, res) => {
    const thing = await getRandomUser();
    console.log(user);
    console.log(thing);
    // console.log(typeof randUser);
    // console.log(randUser);
    // res.json(randUser);
    // Post.find()
    //     .then((posts) => res.json(posts))
    //     .catch((err) => res.statusMessage(`Error: ${err}`));
});

// add a post
router.route('/add').post((req, res) => {
    const { img, desc } = req.body;

    // const randomUser =
    // const newPost = new Post({
    //     img,
    //     desc: desc !== '' ? desc : null,
    // });

    // console.log(`hello from backend: ${desc}`);
    let newPost = new Post();
    newPost.img.data = fs.readFileSync(img);
    newPost.img.contentType = 'image/png';

    newPost
        .save()
        .then(() => res.json('Added a picture!'))
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
