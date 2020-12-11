const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    listType: { 
        type: String,
        required: true,
        default: 'personal'
    },
    workTodo: [],
    personalTodo: [],
    todoData:  {
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
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);