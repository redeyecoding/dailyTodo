const mongoose = require('mongoose');
const { schema } = require('./TodoContainer');
const Schema = mongoose.Schema;

const TodoDataSchema = new Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    taskName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false       
    }
});

module.exports = TodoData = mongoose.model('tododata', TodoDataSchema);