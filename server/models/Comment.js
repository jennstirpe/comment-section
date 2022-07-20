const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    createdAt: String,
    score: Number,
    userId: String,
    commentId: String,
});


module.exports = mongoose.model('Comment', commentSchema);
