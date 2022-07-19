const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    content: String,
    createdAt: String,
    score: Number,
    userId: String,
    replyTo: String,
});


module.exports = mongoose.model('Reply', replySchema);