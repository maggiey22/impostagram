const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        img: { type: { data: Buffer, contentType: String }, required: true },
        desc: { type: String, required: false, trim: true },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
