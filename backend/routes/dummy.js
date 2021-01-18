const router = require('express').Router();
let Dummy = require('../models/dummy.model');

// get all dummy data
router.route('/').get((req, res) => {
    // ERROR I WAS RUNNING INTO: res is the SECOND param.
    Dummy.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(`Error: ${err}`));
});

// add a post
router.route('/add').post((req, res) => {
    const desc = req.body.desc;

    const newDummyItem = new Dummy({
        desc,
    });

    newDummyItem
        .save()
        .then(() => res.json('Added a dummy item!'))
        .catch((err) => console.log(err));
});

router.route('/random').get((req, res) => {
    Dummy.find()
        .then((data) => {
            const len = data.length;

            // generate a random index in [0, data.length)
            const randomIndex = Math.floor(Math.random() * Math.floor(len));
            res.json(data[randomIndex]);
        })
        .catch((err) => console.log(`Error: ${err}`));
});

module.exports = router;
