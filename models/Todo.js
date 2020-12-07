const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    workTodo: [
        {
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
            comfirmed: {
                type: Boolean        
            }
        }
    ],
    personalTodo: [
        {
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
            comfirmed: {
                type: Boolean        
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);