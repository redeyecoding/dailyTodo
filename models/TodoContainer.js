const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoContainerSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    listType: { 
        type: String,
        required: true,
        default: 'personal' // ( work || personal )
    },
    work: [],
    personal: [],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Todo = mongoose.model('todo', TodoContainerSchema);