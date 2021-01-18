const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dummySchema = new Schema(
    {
        desc: { type: String, required: true, trim: true },
    },
    { collection: 'dummy' }
);

const Dummy = mongoose.model('Dummy', dummySchema);

module.exports = Dummy;
