const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware
app.use(cors());
app.use(express.json()); // parse json

const MONGODB_TOKEN = process.env.TOKEN;
mongoose
    .connect(MONGODB_TOKEN, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully!');
});

const postsRouter = require('./routes/posts');
const dummyRouter = require('./routes/dummy');

app.use('/posts', postsRouter);
app.use('/dummy', dummyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
